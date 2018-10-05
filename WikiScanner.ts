import {WikiPage} from "./entity/WikiPage";
import {getRepository} from "typeorm";
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

export class WikiMap
{
    [name:string]:WikiPage
}

export class WikiScanner
{
    wikiMap:WikiMap;
    
    async doScan(startUrl:string):Promise<WikiMap>
    {
        let browser;
        this.wikiMap = {[startUrl]:null};
    
        try
        {
            console.log("starting scan");
            browser = await puppeteer.launch(({args: ['--no-sandbox', '--disable-setuid-sandbox']}));
            const browserPage = await browser.newPage();
    
            let nextPageUrl:string;
            while(nextPageUrl = Object.keys(this.wikiMap).find(key => !this.wikiMap[key]))
            {
                const wikiPage = await this.scanWikiPage(browserPage, nextPageUrl);
                this.wikiMap[nextPageUrl] = wikiPage;
                wikiPage.linkUrls.map(linkUrl =>
                {
                    if(!this.wikiMap[linkUrl]) this.wikiMap[linkUrl] = null;
                });
                if(wikiPage.exists) getRepository(WikiPage).save(wikiPage);
            }
            
            return this.wikiMap;
        }
        catch (e)
        {
            console.error(e);
        }
        finally
        {
            browser.close();
        }
    }
    
    private async scanWikiPage(browserPage, url:string, attempts:number = 0):Promise<WikiPage | null>
    {
        console.log("Scanning", url);
        try
        {
            await browserPage.goto('http://wikki.orionspherelrp.co.uk/doku.php?id=' + url, {timeout: 30000});
            let content = await browserPage.$eval(".page.group", (element) => element.innerHTML);
            const hrefs = await browserPage.$$eval('a.wikilink1', as => as
                .map(a=>a.href)
                .filter(href => href.indexOf("http://wikki.orionspherelrp.co.uk/doku.php?id=") >= 0)
                .filter(href => href.indexOf("do=") < 0));
            const ids = hrefs.map(h => h.slice(46).split("#")[0]);
            if(content.indexOf("topic does not exist") > -1) return new WikiPage(url);
            content = content.replace("<strong><span>+</span></strong>", "");
            const $ = cheerio.load("");
            const fragment = $("<div>"+content+"</div>");
            fragment.find("*").removeAttr("style");
            fragment.find(".tags").remove();
            fragment.find("a[href]").map((i, a) => {
                $(a).attr("href", $(a).attr("href").replace("doku.php?id=", ""));
            });
            return new WikiPage(url, fragment.html(), ids);
        }
        catch(error)
        {
            if(attempts > 4) throw new Error("Load failed after 5 retries, cancelling");
            console.error(`Failed to load ${url} attempt ${attempts+1}`, error);
            attempts++;
            return await this.scanWikiPage(browserPage, url, attempts);
        }
    }
}
import logger = require("morgan");
import express = require("express");
import createError = require('http-errors');

import {WikiPage} from "./entity/WikiPage";
import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {WikiScanner} from "./WikiScanner";
import {Express, Request, Response} from "express";
import * as path from "path";

const startUrl = "start";

export const appPromise = createConnection().then(connection =>
{
    const app:Express = express();
    
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.use(express.static(process.env.PWD && path.join(process.env.PWD, 'static') || 'static'));
    app.set('view engine', 'pug');
    
    app.get("/:path?", async (request:Request, response:Response, next: Function) =>
    {
        const name = (request.params && request.params.path || startUrl).toLowerCase();
        const wikiPage = await getRepository(WikiPage).findOne({name}, {order:{createdOn:"DESC"}});
        if(wikiPage)
        {
            response.render("index",{content:wikiPage.content, name:wikiPage.name});
        }
        else next();
    });
    
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });
    
    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
        
        console.error(err);
        
        // render the error page
        res.status(err.status || 500);
        res.send(err);
    });
    
    const wikiScanner = new WikiScanner();
    // wikiScanner.doScan(startUrl);
    
    return app;
});
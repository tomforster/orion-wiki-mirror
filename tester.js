const cheerio = require("cheerio");

const content = `
<div id="dw__toc">
    <h3 class="toggle closed" style="cursor: pointer;">Table of Contents</h3>
    <div aria-expanded="false" style="display: none;">
        <ul class="toc" style="display: none;">
            <li class="level1">
                <div class="li"><a href="#arcigolite">Arcigolite</a></div>
                <ul class="toc">
                    <li class="clear">
                        <ul class="toc">
                            <li class="level3"><div class="li"><a href="#composition">Composition</a></div></li>
                            <li class="level3"><div class="li"><a href="#occurrence">Occurrence</a></div></li>
                        </ul>
                    </li>
                    <li class="level2"><div class="li"><a href="#applications">Applications</a></div></li>
                </ul>
            </li>
            <li class="level1"><div class="li"><a href="#ooc_game_information">OOC Game Information</a></div></li>
        </ul>
    </div>
</div>
<!-- TOC END -->

<h1 class="sectionedit1" id="arcigolite">Arcigolite</h1>
    <div class="level1">

    <p>
    Arcigolite is a rare mineral with anomalous biochemical properties. Its chemical make-up and structure acts as an inhibitor for a wide range of biochemical interactions.
</p>

</div>

<h3 class="sectionedit2" id="composition">Composition</h3>
    <div class="level3">

    </div>

    <h3 class="sectionedit3" id="occurrence">Occurrence</h3>
    <div class="level3">

    </div>

    <h2 class="sectionedit4" id="applications">Applications</h2>
    <div class="level2">

    <p>
    <br>

    </p>
    <hr>

    <p>
    <br>

    </p>

    </div>

    <h1 class="sectionedit5" id="ooc_game_information">OOC Game Information</h1>
<div class="level1">

    <p>
    Arcigolite is a type of <a href="/doku.php?id=exotic_reagents" class="wikilink1" title="exotic_reagents">Exotic Reagent</a> - an <a href="/doku.php?id=exotic_substances" class="wikilink1" title="exotic_substances">Exotic Substance</a> related to <a href="/doku.php?id=corporeal_science" class="wikilink2" title="corporeal_science" rel="nofollow">Corporeal Science</a>. A physrep of some kind of mineral can be used to represent measures of this substance, small mineral samples can represent one or two measures, while larger physrep samples can hold more.
</p>

<p>
A measure of Arcigolite can be applied to any single measure of an injectable <a href="/doku.php?id=medicaments" class="wikilink1" title="medicaments">Medicament</a>. Applying a measure of this substance will slow down and lengthen the medicament&apos;s effects, doubling all times and durations. This can extend the duration of beneficial medicaments, extending the time that they are effective. It can also, however, make healing chemicals take longer to work, or extend the effect of debilitating toxins.
    </p>

    <p>
    As with all <a href="/doku.php?id=exotic_substances" class="wikilink1" title="exotic_substances">Exotic Substances</a>, a character with at least 1 rank in the relevant speciality (<a href="/doku.php?id=professional_skills#corporeal_science" class="wikilink1" title="professional_skills">Corporeal Science</a> in this case) can spend 1 minute of appropriate roleplaying to apply 1 measure of Arcigolite to a <a href="/doku.php?id=medicaments" class="wikilink1" title="medicaments">Medicament</a>. After this roleplaying, they should unpeel the sticker that represents this substance, and stick it to the lammie of the <a href="/doku.php?id=medicaments" class="wikilink1" title="medicaments">Medicament</a>, modifying its game effect.
</p>
<div class="tags"><span>
    <a href="/doku.php?id=tag:science&amp;do=showtag&amp;tag=science" class="wikilink1" title="tag:science" rel="tag">science</a>,
    <a href="/doku.php?id=tag:galactipedia&amp;do=showtag&amp;tag=galactipedia" class="wikilink1" title="tag:galactipedia" rel="tag">galactipedia</a>,
    <a href="/doku.php?id=tag:item&amp;do=showtag&amp;tag=item" class="wikilink1" title="tag:item" rel="tag">item</a>,
    <a href="/doku.php?id=tag:corporeal_science&amp;do=showtag&amp;tag=corporeal_science" class="wikilink1" title="tag:corporeal_science" rel="tag">corporeal science</a>
</span></div>

</div>`;
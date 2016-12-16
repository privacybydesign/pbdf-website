---
layout: page
teaser: Een korte uitleg over hoe de website in elkaar is gezet
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
permalink: /tutorial/
---

# Structuur

### Thema

Het thema heeft veel verschillende opties en paginatypes: bijvoorbeeld wel of niet zo'n plaatje bovenaan, of een sidebar links of rechts. Alles wordt op de [website ervan](https://phlow.github.io/feeling-responsive) gedemonstreerd. Zie ook [de documentatie](https://phlow.github.io/feeling-responsive/documentation/) ervan.

### Markdown

Een formaat die vergelijkbaar is met HTML, maar eenvoudiger, en die als doel heeft om zowel voor computers als voor mensen makkelijk leesbaar te zijn. In een soort compileerproces wordt dit vertaald naar HTML door [Jekyll](https://jekyllrb.com/).

### Website structuur

De linkjes bovenaan zijn gedefiniëerd in `_data/nagivation.yml`. De pagina's waar die linkjes naar wijzen staan in `pages/`. Er staan een hoop splash images voor bovenaan in `images/`.

# Aanpassen

### Jekyll

Een Ruby softwarepakket. Als je ruby 2 of nieuwer hebt (zie `ruby --version`), dan kun je dat installeren met `gem install bundler jekyll`. Daarna ga je naar het pad waar je de website hebt ge-git-cloned, en zeg je `bundle install`. Dan downloadt hij alle benodigdheden voor de website.

### De website lokaal draaien

Als alles hierboven goed is gegaan, kun je nu dit uitvoeren:

`bundle exec jekyll serve --watch --config _config.yml,_config_dev.yml`

Dan compileert hij de website en start hij lokaal op je computer een tijdelijke webserver op, zodat je de website kunt bekijken op [localhost:4000](http://localhost:4000/). Telkens wanneer je een van de bestanden aanpast en opslaat, zal de website automatisch opnieuw gecompileerd worden zodat het resultaat direct zichtbaar is als je in je browser refresht.

### De website naar staging zetten

`bundle exec jekyll build --config _config.yml,_config_staging.yml`

De gecompileerde website staat nu in `_site`. Die kan gekopiëerd worden naar `/www/pbdf/test/htdocs` op lilo, bijvoorbeeld met `rsync -rlvz --chmod=ugo=rwX _site/* lilo:/www/pbdf/test/htdocs` (aangenomen dat lilo in je `.ssh/config` staat). Het resultaat is dan zichtbaar op [privacybydesign.foundation:4432](https://privacybydesign.foundation:4432/).

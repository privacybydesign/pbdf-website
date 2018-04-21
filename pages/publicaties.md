---
layout: page
title: IRMA academische publicaties
meta_title: Publicaties
header:
  image_fullwidth: header_unsplash_4.jpg
  title: Privacy by Design Foundation
permalink: /publicaties/
language: nl
translations:
  en: /publications
---

Op deze pagina staan (in omgekeerd chronologische volgorde) wetenschappelijke
publicaties over het IRMA ecosysteem, vooral geschreven door onderzoekers van
de [Digital Security Group](http://www.ru.nl/ds/) van de Radboud universiteit,
Nijmegen. Daarnaast is onderaan deze pagina een aantal publicaties (niet
afkomstig van de Digital Security Group van de Radboud Universiteit) opgenomen
over Idemix, het cryptografische fundament van IRMA.

{% capture pubs %}{% include publications.md %}{% endcapture %}
{{ pubs | markdownify }}

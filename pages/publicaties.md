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
Nijmegen. Het cryptografische fundament van IRMA is ontwikkeld door IBM
Research in Zürich, en heet [Idemix](https://idemix.wordpress.com/)
(een afkorting van *Identity Mixer*).

{% capture pubs %}{% include publications.md %}{% endcapture %}
{{ pubs | markdownify }}

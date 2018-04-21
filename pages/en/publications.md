---
layout: page
title: IRMA Academic Publications
meta_title: Publications
header:
  image_fullwidth: header_unsplash_4.jpg
  title: Privacy by Design Foundation
permalink: /publications/
language: en
translations:
  nl: /publicaties
---

This page collects, in reverse chronological order, scientific
publications about the IRMA ecosystem, mostly written by researchers
from the [Digital Security Group](http://www.ru.nl/ds/) of Radboud
University, Nijmegen. In addition, although they are not from Radboud
University's Digital Security Group, a number of publications Idemix 
(the cryptographic basis of IRMA) are included at the bottom of this page.

{% capture pubs %}{% include publications.md %}{% endcapture %}
{{ pubs | markdownify }}

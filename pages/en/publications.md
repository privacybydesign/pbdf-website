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
University, Nijmegen. The cryptographic techniques underlying IRMA
have been developed by IBM Research in Zürich, under the name
[Idemix](https://idemix.wordpress.com/), short for *Identity Mixer*.

{% capture pubs %}{% include publications.md %}{% endcapture %}
{{ pubs | markdownify }}

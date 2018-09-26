---
layout: page
header:
  image_fullwidth: header_poly2.png
  title: Publications
permalink: /publications/
language: en
translations:
  nl: /publicaties
---

# Year report

The first year report, including an overview of activities and a financial report, can be found below. As the foundation was established at the end of 2016 this report includes not only 2017 but also the last months of 2016.

* [Year report of 2017 and end of 2016 (in Dutch)](/pdf/jaarverslag-2017.pdf)

# IRMA academic publications

Below scientific publications are listed about the IRMA ecosystem,
in reverse chronological order, mostly written by researchers
from the [Digital Security Group](http://www.ru.nl/ds/) of Radboud
University, Nijmegen. In addition, although they are not from Radboud
University's Digital Security Group, a number of publications Idemix 
(the cryptographic basis of IRMA) are included at the bottom of this page.

{% capture pubs %}{% include publications.md %}{% endcapture %}
{{ pubs | markdownify }}

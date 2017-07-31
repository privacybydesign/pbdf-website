---
layout: page
title: IRMA demos
header:
  image_fullwidth: header_unsplash_4.jpg
  title: Privacy by Design Foundation
permalink: /demo-en/
language: en
translations:
  nl: /demo
---

The [IRMATube demo](/demo/irmaTube) is een fictious video-streaming
service that demonstrates several aspects of IRMA. When you become
IRMATube "member" you receive membership attributes. Subsequently, you
can use these to watch (trailers of) movies on the IRMATube main page.

In particular, the IRMATube demo illustrates the following aspects of
attribute-based authentication.

* Upon becoming member you receive *two* attributes: one which simply
  proves that you are a member, and one which contains a personal
  membership number. When you wish to watch a movie, only your
  membership attribute is requested, not the membership number that
  identifies you: you only prove that you are a member, not who you
  are.

  In a more elaborate and realistic scenario you may want to reveal
  your membership number too in case you want a movie to be added to
  your profile. That is not included in the current version of the
  IRMATube demo.

* Some of the movies on IRMATube have an age limit. When you wish to
  watch those movies, you have to reveal not only your IRMATube
  membership attribute, but also your age limit attribute. (These
  attributes can be obtained [here](/issuance/idin)

<a class="button" href="/demo/irmaTube">Go to IRMATube</a>

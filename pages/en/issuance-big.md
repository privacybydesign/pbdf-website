---
layout: page
header:
  image_fullwidth: header_poly2.png
  title: Issuance of BIG attributes
permalink: /issuance-big/
language: en
translations:
  nl: /uitgifte-big
---

The [BIG-register](https://english.bigregister.nl/) is a public
register of healthcare professionals, such as physicians, dentists and
nurses. Every healthcare professional in the Netherlands is registered
there with a personal BIG-number. BIG is a Dutch abbreviation for:
*Beroepen in de Individuele Gezondheidszorg*.

When you are a (registered) healthcare professional in the Netherlands
the Privacy by Design foundation can look up your BIG-registration on
the basis of your name, date of birth and gender; subsequently it can
issue to you the following attributes:

 * BIG-number
 * date of BIG-registration
 * medical profession
 * medical specialism

These personal attributes are obtained from the BIG-register.  The
correctness of the attributes is the register's responsibility. The
foundation does not check them.

As first step of this issuance process you disclose your name, date of
birth and gender from the [iDIN credential](/issuance-idin) to the
foundation. With your consent, the foundation uses these data to
search in the BIG-register. If this yields an unambiguous result, you
will receive your BIG attributes in a new **BIG credential** in your
IRMA app.  The foundation subsequently removes your name and date of
birth, and also these BIG attributes, from its systems. The foundation
does not keep a log of issuance: it does not record which attributes
it issues to whom at what time.

The validity period of this BIG credential is *one year*.

The foundation can test the issuance mechanism of BIG credentials only
to some extent, simply because of the limited number of available
BIG-registrations that the developers of the foundation can try out.
Hence it may very well happen that unforeseen issues arise. In such a
case your feedback is much appreciated, preferably with a clear
explanation of what happened, via the "info" address at
[contact](/contact-en).

In the current set-up the following rules are used.

* If a BIG registration has expired, no attributes are issued.
* If multiple people, with both the same name and the same date of
  birth, occur in the BIG register, no attributes are issued: after
  all, the foundation cannot distinguish these individuals.
* If someone occurs with multiple medical professions in the BIG
  register, a separate credential is created for each of these
  professions. You can then choose yourself on each occasion
  which one you wish to disclose.

[Back](/issuance) to attribute issuance.

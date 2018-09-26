---
layout: page
header:
  image_fullwidth: header_poly2.png
  title: Issuance of iDIN attributes
permalink: /issuance-idin/
language: en
translations:
  nl: /uitgifte-idin
---

[iDIN](https://www.idin.nl/consumenten/) is an authentication service
that is operated jointly by banks in the Netherlands. It allows
everyone with access to electronic banking to login. This logging in
via iDIN works in the same manner as logging into your bank account,
typically with a special reader or with one-time codes via SMS or on
paper.

The Privacy by Design foundation has its own connection to iDIN. Via
this (secure) connection it receives attributes about the person who
logs into iDIN, namely:

 * initials
 * family name
 * date of birth
 * gender
 * address
 * postal code
 * city.

These personal attributes are obtained from the bank of the user.  The
correctness of the attributes is the bank's responsability. The
foundation does not check them.

The foundation receives, after permission of the user, these
attributes and signs them digitally, using its own private key, and
puts them in the IRMA app of the user. There they appear as an **iDIN
credential**, containing the above attributes. The foundation
subsequently removes these attributes from its own systems. The
foundation does not keep a log of issuance: it does not record which
attributes it issues to whom at what time.

The validity period of this iDIN credential is *one year*. The
attribute that is most sensitive to expiration is the address
(including postal code and city). After expiration of the iDIN
credential, users have to re-load a new (fresh) one. This works in the
same way as the first initial loading of the iDIN credential, with
a new login to one's bank.

The connection of the Privacy by Design foundation to iDIN is an
experimental phase, until december 31, 2017, in which the foundation
can use iDIN free of charges. This will probably change after december
31.

[Back](/issuance) to attribute issuance.


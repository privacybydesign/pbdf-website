---
layout: page
header:
  image_fullwidth: header_poly2.png
  title: Attribute issuance
permalink: /issuance/
language: en
translations:
  nl: /uitgifte
---

<style type="text/css">
  article a.button {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    background-color: #568099;
  }
  article a img {
    height: 1.75rem;
    padding-right: 1rem;
  }
</style>

Here you can (re)load attributes into the [Yivi app](/download-en) on your
phone, in order to compose a personal 'passport'.  The Privacy by
Design foundation digitally signs these attributes, so that verifiers
can check their origin and integrity. You can subsequently use these
attributes for authentication or login.

*Warning:* if you load these attributes into your phone via a QR-code,
make sure that someone else cannot pick them up first, for instance
over your shoulder. This other person can then load your attributes
into his/her phone.

### International attributes

The following attributes can be loaded into an Yivi app by anyone on earth.

**E-mail address attribute**  
Attribute: e-mail address  
<a class="button" href="https://sidnemailissuer.irmaconnect.nl/issuance/email/">
<img src="/images/email.png">Load e-mail address attribute</a>  
[More information](/issuance-email)

**Social media attributes**  
<!-- Attributes (differs per network): first name, family name, email address, birth date, username  -->
<!-- <a class="button" href="/issuance/social/twitter"> -->
<!-- <img src="/images/twitter.png">Load attributes via Twitter</a>   -->
<a class="button" href="/issuance/social/linkedin">
<img src="/images/linkedin.png">Load attributes via LinkedIn</a>  
[More information](/issuance-socialmedia)

<!-- **Attributes via your educational institution**   -->
<!-- Attributes: given name, family name, email address, institution, staff/student, local registration number   -->
<!-- <a class="button" href="/issuance/surfconext/edugain">  -->
<!-- <img src="/images/edugain.png">Load attributes via eduGAIN</a>   -->
<!-- Notice: this is an experimental service. We appreciate any feedback at irma 'at' privacybydesign.foundation, preferably with screenshots if something goes wrong.  -->

### Attributes for Europe

**Mobile phone number attribute**  
Attribute: mobile phone number attribute  
<a class="button" href="https://sidnsmsissuer.irmaconnect.nl/issuance/sms/">
<img src="/images/mobile.png">Load mobile phone number attribute</a>  
[More information](/issuance-mobile)


### Attributes for The Netherlands

The issuance options below require a connection to the Netherlands,
for instance in the form of a Dutch bank account, a Dutch mobile phone
number, or registration at a Dutch university/school.

**Attributes from Dutch Civil Registry**  
Attributes: name, birth date, sex, address, zip code, city, BSN  
<a class="button" href="https://services.nijmegen.nl/irma/gemeente/start">
<img src="/images/nijmegen.png">Load attributes from Dutch Civil Registry</a>  
[More information](/issuance-brp)

**Attributes via your dutch educational institute**  
Attributes: given name, family name, email address, institution, staff/student, local registration number  
<a class="button" href="/issuance/surfconext?action=login">
<img src="/images/surfconext.png">Load attributes via SURFconext</a>  
[More information](/issuance-surfconext)

**Attributen via the AGB-register --- issued by the foundation [nuts.nl](https://nuts.nl) from Vektis**  
Attributen: [AGB-code](https://www.agbcode.nl/) of a medical professional, for declarations etc.
<a class="button" href="https://irma-agb.nuts.nl/">
<img src="/images/agb-code.gif">Load attributes via AGB</a>  

<!-- **Attributes via iDIN**  
<!-- Attributes: initials, family name, date of birth, gender, address, postal code, city   -->
<!-- <a class="button" href="/uitgifte/idin"> -->
<!-- <img src="/images/idin.png">Load attributes via iDIN</a>   -->
<!-- [More information](/issuance-idin) -->

<!-- **Attributes via iDEAL**   -->
<!-- Attributes: IBAN, account holder, BIC   -->
<!-- <a class="button" href="/uitgifte/ideal"> -->
<!-- <img src="/images/ideal.png">Load attributes via iDEAL</a>   -->
<!-- More information about these attributes can be found on the issuance page itself. -->
<!-- This information is only available in Dutch. -->

<!-- **Attributes via the BIG-register --- based on iDIN data (Experimental)**   -->
<!-- Attributes: BIG-number, date of BIG-registration, medical profession, medical specialisms   -->
<!-- <a class="button" style="cursor: not-allowed;" disabled>
<!-- <img src="/images/big.png">Load attributes via BIG</a>   -->
<!-- This service has been disabled due to a breaking change at the BIG-register. Medical professionals can still load AGB attributes, see above. [More information](/issuance-big) -->

<!-- **Attributes via the [diploma register of DUO](https://duo.nl/particulier/diplomas/mijn-diplomas.jsp) (disabled temporarily)**     -->
<!-- Attributes: school and/or study diploma    -->
<!-- <a class="button" style="cursor: not-allowed;" disabled> -->
<!-- <img src="/images/diploma-logo.png">Load attributes via DUO</a>   -->
<!-- This experimental service has been temporarily disabled due to a change in the diploma documentation by DUO. We are happy to receive feedback about possible use-cases via irma 'at' privacybydesign.foundation. ([more information](/issuance-diploma)) -->

---
layout: page
title: Attribute issuance
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
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

Via this page you can (re)load attributes into the IRMA app on your
phone.  The Privacy by Design foundation digitally signs these
attributes, so that verifiers can check their origin and integrity.
You can subsequently use these attributes for authentication or
login. This requires that you have already installed the IRMA app and
registered yourself as an IRMA user. Installation proceeds via the
[Download](/download-en) page; the registration process starts
automatically when you open the IRMA app.

Below there is a list of buttons for loading different attributes.
The number of attribute sources will increase in the future. Some
restrictions apply.

* Not all sources of attributes can be used by everyone. For instance,
  for iDIN, one needs to have an account at a Dutch bank and be able to
  log in electronically; for Surfnet attributes, a registration at an
  institute for higher education in the Netherlands is required ---
  and additionally, this institution must have enabled IRMA.
* There are some dependencies between attribute sources. For instance,
  in order to obain attributes of healthcare professionals from the BIG
  register, other attributes must have been loaded first, namely from
  iDIN (name and date of birth). Of course, this issuance only works
  for people who have such a BIG registration.

Attributes via iDIN
:   Attributes: initials, family name, date of birth, gender, address, postal code, city
    <a class="button" href="/uitgifte/idin">
    <img src="/images/idin.png">Load attributes via iDIN</a>  
    [More information](/issuance-idin)

E-mail address attribute
:   Attribute: e-mail address  
    <a class="button" href="/issuance/email">
    <img src="/images/email.png">Load e-mail address attribute</a>  
    [More information](/issuance-email)

Mobile phone number attribute
:   Attribute: mobile phone number attribute  
    <a class="button" href="/uitgifte/telefoonnummer">
    <img src="/images/mobile.png">Load mobile phone number attribute</a>  
    [More information](/issuance-mobile)

Attributes via Surfconext
:   Attributes: given name, family name, email address, institution, staff/student, local registration number  
    <a class="button" href="/uitgifte/surfnet?action=login">
    <img src="/images/surfnet.png">Load attributes via SURFconext</a>  
    [More information](/issuance-surfconext)

Attributes via the BIG-register --- based on iDIN data
:   Attributes: BIG-number, date of BIG-registration, medical profession, medical specialisms  
    <a class="button" href="/uitgifte/big">
    <img src="/images/big.png">Load attributes via BIG</a>  
    [More information](/issuance-big)

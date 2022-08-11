---
layout: page
header:
  image_fullwidth: header_poly2.png
  title: Starting with the IRMA app
permalink: /irma-start/
language: en
translations:
  nl: /irma-begin
---

These page provides answers to the following questions.

 1. [How to get started with IRMA](#getstarted)
 2. [What does MyIRMA provide?](#myirma)
 3. [What happens under the hood?](#hood)

Knowing about this last point is not essential for using IRMA; it only
provides additional background information for people who wish to
understand more about IRMA.

Deze pagina geeft antwoord op de volgende vragen.

### <a name="getstarted"></a>1. How to get started with IRMA

The next diagram summarizes the initial steps, when you wish to start
using IRMA.

<p align="center"><img src="../images/Registratie_Stappenplan_en.png" alt="IRMA issuer" style="width: 50%; height: 50%"/></p>

It is wise to take a bit of time for this, since these steps require
some care and attention. You are about to make a digital identity for
yourself, which you can use in principle for a long time, for
sensitive personal matters such as logging in or digital
signing. This is a bit like applying for, and collecting, a passport.
But such a passport requires much more time and effort, for instance
because you have to visit your local authorities (twice). Just like a
passport, IRMA is strictly personal: no-one else should be able to
(ab)use your IRMA identity.

#### 1.1. Installation

The IRMA app is available via the [Download](/download-en) page of the
foundation. You can also directly install the IRMA app on your phone
or tablet via the Android Playstore or the Apple App store.

#### 1.2. Registration

When you open the IRMA app for the first time, you have to set it up.
You are asked to provide:

 * a PIN code of 5 digits

Please choose your PIN code with care. You will regularly need it when
you use the IRMA app. This code guarantees that you are the only
person who is using your IRMA app. Avoid obvious codes like 00000. If
you write down your PIN code, please use a special place (or manner)
so that others cannot get to it easily. The app asks you to re-type
the chosen code, in order to avoid typing errors.

Every time you authenticate with IRMA, by revealing IRMA attributes,
this PIN code is required. Digital signatures also require it.

Changing or retrieving your PIN code is (currently) not possible.  If
you loose your PIN code, you have to start all over and
re-register. All the attributes that you have collected at that stage
will be lost. This is a hassle.

At registration you can optionally add an email address. It is advised
to do so, because via such an email address you can block your
registration at the foundation, on the [MyIRMA](/myirma) webpage.
[Below](#myirma) more information will be given about this.  Adding an
email address is optional, not compulsory. If you do not add it, the
foundation knows nothing about you except an automatically generated
random username, the app ID. You can see this username, after successful
registration, by tapping on "More" and going to the bottom of the screen.

When you choose to associate an email address to your IRMA app, please
use an address that actually belongs to you --- and to no-one else ---
and that you will be able to use for a longer period of time. You will
immediately receive an email message at this address with a link for
confirmation. In this way it is checked that the email address is
under your control.

In exceptional cases the email address may be used to contact you
about usage of IRMA. The address is not shared with anyone else.


#### 1.3. Personalization with your email address

The email address that you possibly submit upon registration can now
be loaded into your IRMA app on your phone. After the previous
registration steps, in which you have chosen your PIN code and email
address, you will receive a link (web-address) by email. By clicking on
this link and following subsequent instructions, your email address
will be added as attribute in your IRMA app.

When you go in a web-browser to the web-address in this link (received
by email), you will see an "Email Issue" button. It illustrates how
issuing and receiving of attributes works.

 * When you open the webpage in a browser on a PC or laptop and push
   the "Email Issue" button, a QR code appears. Now open the IRMA app
   on your phone and touch the "scan banner" at the top of the
   app. This starts the camera of phone, so that you can scan the QR
   code. Having done so, the app asks you if you wish to accept your
   email address as new attribute in your app on your phone.

 * When you open the webpage in a browser on your phone itself and
   press the "Email Issue" button, the IRMA app on your phone opens
   automatically. You are also asked if you wish to accept your email
   address as attribute on your phone.

After registration you can try out the [IRMATube demo](/demo/irmaTube).


#### 1.4. Personalization with additional attributes

It is possible to receive more attributes, in addition to your email
address. You can do this immediately upon registration, but also
later. To do so, please visit the [IRMA issuance](/issuance) page.
There you will see several possibilities to load additional attributes.
This list of possibilities is not fixed, and will grow in the future,
as more parties join IRMA. At this stage the focus is on attributes
from Dutch sources. If you wish to join with other, possibly
international, attributes, please do [contact](/contact-en) the
foundation.

 * iDIN provides attributes from your bank, like name, address, town,
   and date of birth. After logging into your own bank, with your the
   bank's own login mechanism, these attributes can be loaded into
   your IRMA app. This service if available for everyone with a bank
   account in the Netherlands, see [iDIN](https://www.idin.nl).

 * SURFconext provides attributes from the (mainly Dutch) higher
   education sector. It is available, in principle, for students and
   staff members from educational institutes in the Netherlands, with
   a [SURFconext](https://www.surfconext.nl) registration. Your own
   institution will have to explicitly approve IRMA access. Via
   SURFconext "educational" attributes can be loaded into your IRMA
   app.

 * ...

### <a name="myirma"></a>2. What does MyIRMA provide?

The [MyIRMA](/myirma) website of the foundation offers the following
possibilities.

* You can monitor the usage of your own IRMA app: the *log* files can
  be inspected there. You can see when your app has revealed
  attributes and also when the app has received (loaded)
  attributes. However, it is not possible to see which attributes are
  involved: to which verifier you have revealed attributed, or from
  which issuer you have received attributes. The foundation does not
  want to know these matters, and therefore does not register them, and
  cannot show them to you. This is a consequence of the *privacy by
  design* character of IRMA.

  It is wise to check these log files from time to time. If you see
  there that your app is being used while you know nothing about it,
  something is wrong: someone else may be abusing your app in order to
  steal your identity. This is a reason to take action immediately. It
  brings us to the second possibility that the myIRMA webpage offers.

* At the MyIRMA webpage you can disable (block) further usage of your
  IRMA app. Of course, you can do this at any moment when you no
  longer wish to use IRMA. In addition, however, it is important to be
  able to pull this "emergence brake" when your phone has been stolen,
  so that no-one else can abuse your identity.

  When you decide to terminate IRMA on the MyIRMA webpage, all your
  data will be deleted immediately, so that your IRMA app can no
  longer be used, even if it is sill installed on your phone. If, at
  some later stage, you choose to start using IRMA again, you have to
  re-register from the start.

* At the MyIRMA webpage you can also manage which email address, if
  any, is associated with your IRMA app.

Logging into the MyIRMA webpage can be done in two ways:

1. With IRMA itself, via your email attribute.
2. By typing in your email address; you then receive a fresh link by email,
   which gives you access to your MyIRMA.

The latter, second option can only be used when you have (earlier)
associated an email address with your IRMA app. This is especially
useful when your phone is stolen (in which case the first option is
not available). When you read your email on another device, you can
login from there into MyIRMA and disable your IRMA app.

Because of this second option it is wise to associate an email
address with your IRMA app.


### <a name="hood"></a>3. What happens under the hood?

The text below dives deeper into what precisely happens when you
register via the IRMA app. This background information is not
necessary for actual usage of IRMA; it is intended for people who are
more technically interested and like to know how things have been set
up and how security and privacy-protection have been organized in the
IRMA ecosystem. Even more information is available on a [separate
page](/irma-explanation).

One essential point is that the IRMA app is strictly personal and
should be protected against abuse by others. This happens via the
personal PIN code that you choose at registration. Of course, it is
theoretically possible that you hand over your phone together with
your PIN code to someone else. It is equally unwise to share your bank
card with PIN. No security mechanism can protect against that.

It will thus be assumed that users keep their PIN code secret. The
question is then: where is this PIN code stored? The same question
holds for the secret cryptographic key that is required to let your
app work for you.

The IRMA implementation uses a *split key* trick, so that secret
cryptographic information is distributed between the app and the
MyIRMA server of the foundation.  The app and the server have to
collaborate in a precisely defined manner in order to make IRMA
work. They each have too little secret data to achieve this alone:
they have to cooperate and both use their own secrets for a joint
computation. This is called *multi-party computation*.

As a result, the MyIRMA server alone can never pretend to be you: the
app on your phone is strictly required. What you can do on the server
side is described [above](#myirma). Logging into the MyIRMA server can
be done via IRMA, but also via a link that is sent by email. If your
phone has been stolen, the thief probably also has access to your
email. Hence he/she can log into your MyIRMA. But the only
thing that the thief can do there is disable your IRMA app. Hopefully,
by then, you have already done this yourself.

To summarize: the MyIRMA server offers additional protection and
inspection, but cannot do anything on its own --- except disable.  The
Privacy by Design foundation operates the MyIRMA server in order enable
the usage of IRMA. In principle, other parties can run such a server
too.

The MyIRMA server also helps to protect your PIN code. In general, it
is unwise to store a PIN inside an app on a phone, because it could
possibly be extracted when your phone is hacked. Therefore, the IRMA
app does not store your PIN locally. Instead, it stores a large
arbitrary number, called a *nonce*. Also the MyIRMA server does not
know your PIN, but upon registration it receives from your app the
hash value *hash( PIN | nonce )*. From this your PIN cannot be
deduced.

When you log into your app with your PIN code, the app computes the
(large) number *hash( PIN | nonce )*, sends this hash value to the
MyIRMA server, and deletes your PIN from its memory. If the hash value
matches the number that the server stores for you, the app and server
are connected, and your login has succeeded. A successful attacker
can possibly extract the nonce from your IRMA app, but that is not
so useful. The only thing that the attacker can do is try out all
100,000 possible PIN codes: for each attempt *X*, the number
*hash( X | nonce )* can be computed and sent to the server. The
server will notice such repeated attempts and will slow down
the login attempts (*rate limiting*).

The picture below summarizes the two roles of the Privacy by Design
foundation. On the one hand, the foundation issues several attributes
for personalization of your IRMA app. On the other hand, it operates
the MyIRMA server, for inspection of your own IRMA usage and for
possibly blocking your IRMA app.

<p align="center"><img src="../images/Rollen_Stichting_en.png" alt="IRMA
uitgever" style="width: 70%; height: 70%"/></p>

Initially, the foundation is the only issuer of IRMA
attributes. Hopefully, other parties will follow.

The foundation also verifies attributes, but only for itself, when
IRMA users log into MyIRMA. Such verifications are not done for
others. The foundation restricts its role to issuance and inspection.

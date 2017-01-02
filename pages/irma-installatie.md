---
layout: page
title: Installing IRMA
language: en
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
permalink: /irma-installatie/
---

The IRMA app brings privacy-friendly IRMA-authentication to your
Android phone. On this page you can find information about the IRMA
phone app.  You can also immediately go to [Android Play
store](https://play.google.com/store/apps/details?id=org.irmacard.cardemu),
install the app, and find out "by doing". General background
information (in Dutch) about IRMA can be found
[elsewhere](/irma-uitleg) on this website.

## What can the IRMA phone app do for me?  

With the IRMA technology you carry certified statements about yourself
on your phone, such as "I am over 18", "I am entitled to access ..."
or "my name is ...". These statements are called _attributes_. They
exist as digitally signed data on your mobile phone, and are bound to
your device via a personal (secret) cryptographic key. You can
reveal these personal "attributes" yourself, just like you can
show your passport in certain situations. But: IRMA is a digital
passport, that can hold any number and type of attributes.

Users can use these attributes to authenticate to services. For
instance, if you order something in an online store, usually this
store only needs to know your address (for delivery), your bank
account (for payment), and possibly whether you are of the appropriate
age (depending on content). In practice, online stores often request
your name, date of birth and any other pieces of data they like to
collect, but do not need for the purchase. The IRMA technology allows
your to reveal only a minimal set of attributes about yourself. To use
some slogans: IRMA supports privacy-friendly, context-dependent,
proportional authentication.

Not only the users but also the online stores (and other verifiers)
benefit from the IRMA technology. Attributes presented to them are
reliable, signed statements by trusted parties. For instance,
webstores like amazon.com or bol.com can have more trust in a signed
IRMA attribute proving someone's address, than in the address typed in
a text field by a user. Or simply think of online age
verification. Currently the state-of-the-art is having the user tick a
check box "I am over 18".  IRMA can replace this with a signed
statement by the government: unforgeable and privacy-friendly at the
same time!

IRMA is not yet used in real-life applications, but several
organisations are experimenting with the technology. You can find out
yourself how IRMA works by trying out some of our toy examples on
[demo.irmacard.org](https://demo.irmacard.org/). If you like to try
out more, and set up your own authentication scenarios, you can do
so. The technology is open and freely
[available](http://credentials.github.io/).


## How does IRMA work?
After [downloading and installing](#install) the IRMA phone
app, you can start using it.

 1. The _enrolment_ is an initialisation process to set up your
personal IRMA environment.
 2. Having an initial set of attributes, you are able to _use the
IRMA app for authentication_ and to obtain additional attributes.

### <a name="sse"></a>Personalising the app

The fastest way to get started is to select the "_Demo Enroll_" option
under the preferences menu in your app. It brings you to a webpage
where demo attributes will be issued to your app. You can change
the contents of these attributes yourself, at this website.

When you hit the "_Issue credentials_" button on this website the
attributes will be issued to your phone. The attributes will
be signed digitally, but with a "demo key" that should not be
trusted for serious applications.

In addition, Dutch users can enroll via their passport, identity card,
and also driver's licence (when provided with an embedded chip).


### Using the app The main purpose of the IRMA phone app is to allow
you to do online authentication at service providers. Each
authentication process reveals a subset of your available
attributes. The service provider chooses which attributes it wants to
verify for a particular transaction. You have to agree to this
explicitly, before anything is revealed by your phone.

After [obtaining your attributes](#sse), you can use the app for some
experimental applications. You can play around with the IRMA
functionality on the [IRMA demo website](https://demo.irmacard.org).
All of these functions will require you to disclose some (but not
all!) attributes to a verifier.  The "_IRMA tube"_ demo shows a
possible implementation of a privacy friendly video streaming
service. For this example a user will first need to obtain a
membership credential (by clicking _Register_) in order to get access
to movies. IRMA-DigiD, shows how simple logging in to the Dutch
national authentication scheme DigiD could be with your IRMA app,
using a passport number as attribute. (It would be more natural to use
the national citizen identification number BSN for this, but its use
is restricted by law.)

Obtaining a new attribute and showing an attribute require very
similar actions, so let's take a look at the IRMA verification
example:

On the IRMA [verification demo
site](https://demo.irmacard.org/tomcat/irma_api_server/examples/multiple-attributes.html),
select the attributes you wish to verify and click _Authenticate with
IRMA_. A pop-up with a QR-code will appear.

[<img src="https://www.irmacard.org/wp-content/uploads/2015/10/screenshot-300x176.png"
class="alignleft" alt="" width="300" />](https://www.irmacard.org/wp-content/uploads/2015/10/screenshot.png)

<a name="QR_code"></a>You can scan this QR code with your IRMA app, by
pressing the "_Tap to scan QR_" text in the app's main view.  This QR
code allows the IRMA app to contact the server of the verifier.  When
this connection has been made, the IRMA phone app will show the user
which attributes (s)he is about to reveal to the verifier, by clicking
"_YES_".

[<img src="https://www.irmacard.org/wp-content/uploads/2015/10/Screenshot_2015-10-07-21-21-34-180x300.png"
class="alignright" width="180" />](https://www.irmacard.org/wp-content/uploads/2015/10/Screenshot_2015-10-07-21-21-34.png)

After clicking YES, the verifier will see signed attributes with the
information requested (and approved by the user) and nothing else. The
demo website now displays the attributes that it has just verified.

This is the essential work flow for all IRMA verifications.  Getting
new attributes, which you can test in the [IRMA tube
demo](http://demo.irmacard.org/v2/demos/irmaTube/), also involves
similar actions.  The IRMA app keeps a log of issue and reveal
activities; it can be inspected by clicking a symbol in the right top
corner. The IRMA app also allows the user to clear all his/her
credentials. Tapping a credential in the main view will reveal details
and long clicking a credential allows for credential deletion.  Please
try it!

## Security implications 

IRMA is a privacy enhancing technology, based on
privacy-by-design. The IRMA infrastructure will not leak any
information about your identity to other parties, except for that
which you allow. The IRMA team cares about your privacy. However,
since this is a demo there are some caveats which we like to make
explicit.

### App security

Currently we use the demo features as a functionality test, and not,
for instance, as a security test. The current version of the app is
yet to be strengthened with respect to security! In practice this
means that if a skillful attacker gets your phone with the current
version of the IRMA phone app, he will probably be able to obtain the
crucial secret cryptographic key that is needed to reveal your
attributes. In this test system with only toy verifiers, no serious
harm can come from using these attributes.  Besides, your phone
probably contains more privacy sensitive data than these
IRMA-attributes, but it is good to be aware of this.

A new version of the app with improved security features will be
released soon. It involves partial sharing of the secret cryptographic
key, so that a compromise of your phone need not lead to a compromise
of your attributes.


### Android permissions
The IRMA phone app requires several permissions, which Android will ask
you to approve upon installing the app. We attempted to keep the number
of permissions required to a minimum. Here we explain why we require
each permission:

 * NFC, the IRMA phone app uses NFC to read your identity document during [self enrolment](#sse).
 * INTERNET, Internet connection is needed, as both enrolment and verifications happen online.
 * CAMERA, camera access is required to scan the [QR code](#QR_code) during authentication.
 * ACCESS NETWORK STATE, this permission allows the app to only send metrics data when there is a WiFi connection.

### <a name="crash"></a>Crash reports
As the IRMA phone app is still under active development, things could go
wrong. We have not yet tested this software on a wide variety of devices
(that's one of the goals of this public test). When the app crashes, or
something goes wrong internally, the app will send a _crash report_
to our servers.

Although we have done our best to ensure that the contents of your
attributes will not be included in these crash reports, other privacy
sensitive values might be included, such as the exact brand and type of
your phone, the version of your mobile OS and the time of the crash. We
will treat this information as sensitive data, and remove it as soon as
we no longer need it for improving the IRMA software.

Also, please be advised that these crash reports are transmitted even
when you have no WiFi connection. This means that even though the crash
reports are quite small (about the size of an average e-mail), their
transmission can incur some mobile data costs.

### Metrics

We also gather some statistics and metrics about the use of the IRMA
phone app. These data (such as how long it takes your phone to perform
the necessary computation for proving your attributes) helps us to
further improve the system. These details are stored on your phone and
transmitted to us periodically in batches, only over WiFi connections.
We have taken care to make sure that no privacy sensitive details are
revealed in this way.

## What do I need?

### System requirements 

To use the IRMA phone app, you will need a smart phone (or tablet)
running Android 4.1 (Jelly Bean) or higher. Your phone needs to be
equipped with a camera, and NFC for self-enrollment via identity
documents. These are very standard features of most Android phones
today.

### <a name="install"></a>Download and installation
The IRMA app is now available in the
[Android Play store](https://play.google.com/store/apps/details?id=org.irmacard.cardemu),
you can install it from there.

If you cannot use the Play store, or do not wish to, we also have a
binary available outside of the Play store.  In order to install the
app this way, you will have to enable the security option "unknown
sources", which allows you to install apps from outside of the Android
market. Then simply browse to
[https://demo.irmacard.org/irma.apk](https://demo.irmacard.org/irma.apk)
on your phone, to download and install the app. We do advise to switch
off the option "unknown sources" after the install. This version of
the app will not update automatically.

Enjoy! Show this cool technology to your friends and colleagues, and to
your boss and ICT-department too, and tweet and blog about it.

### Technical assistance &amp; feedback

If you have questions or feedback you can [contact](/contact) us.

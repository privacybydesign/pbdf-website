---
layout: page
title: Starting with the IRMA app
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
permalink: /irma-start/
language: en
translations:
  nl: /irma-begin
teaser: This page has not yet been translated.
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

The next diagram summarises the initial steps, when you wish to start
using IRMA.

<p align="center"><img src="../images/Registratie_Stappenplan.png" alt="IRMA uitgever" style="width: 50%; height: 50%"/></p>

It is wise to take a bit of time for this, since these steps require
some care and attention. You are about to make a digital identity for
yourself, which you can use in principle for a long time, for
sensitive personal matters, such as logging in, or digital
signing. This is a bit like applying for, and collecting, a passport.
But such a passport requires much more time and effort, for instance
because you have to visit your local authorities (twice). Just like a
passport, IRMA is strictly personal: no-one else should be able to
(ab)use your IRMA identity.

#### 1.1. Installation

The IRMA app is available in the [Android Play
store](https://play.google.com/store/apps/details?id=org.irmacard.cardemu).
Download and install this app on your phone (or tablet).

So far, the IRMA app exists only for Android phones or tablets.  An
iOS version for iPones and iPads is under development; it is expected
to be available in the fall of 2017.

#### 1.2. Registration

Open the IRMA app. When you do this for the first time, you will
be asked to provide two things:

 * an email address
 * a PIN code of 5 digits

The email address will be used to contact you, if needed, about your
usage of IRMA. This address will not be shared with others. Only
rarely you will receive a message at this address. Please, do use an
address that actually belongs to you --- and to no-one else --- and
that you will be able to use for a longer period of time. You will
immediately receive an email message at this address with a link for
confirmation. In this way it is checked that the email address is
under your control.

Please choose your PIN code with care. You will regularly need it when
you use the IRMA app. This code guarantees that you are the only one
who is using your IRMA app. Avoid obvious codes like 00000. If you
write down your PIN code, please use a special place (or manner) so
that others cannot get to it easily. The app asks you to re-type the
chosen code, in order to avoid typing errors.

Every time you authenticate with IRMA, by revealing IRMA attributes,
this PIN code is required. Digital signatures also require it.

Changing or retrieving your PIN code is (currently) not possible.  If
you loose your PIN code, you have to start all over and
re-register. All the attributes that you have collected at that stage
will be lost. This is a hassle.

#### 1.3. Personalisation with your email address

The email address that you submit upon registration kan now be
loaded into your IRMA app on your phone. After the previous registration
steps, in which you have chosen your email address and PIN code, you
will receive a link (webaddress) by email. Via this link you log into
your MyIRMA account. At that stage your registration is confirmed.

When you go in a webbrowser to the webaddress in this link (received
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


#### 1.4. Personalisation with additional attributes

It is possible to receive more attributes, in addition to your email
address. You can do this immediately upon registration, but also
later. To do so, please visit the [IRMA issuance](/issance) page.
There you will see several possiblities to load additional attributes.
This list of possibilities is not fixed, and will grow in the future,
as more parties join IRMA. At this stage the focus is on attributes
from Dutch sources. If you wish to join with other, possibly
international, attributes, please do [contact](/contact-en) the
foundation.

 * Surfconext provides attributes from the (mainly Dutch) higher
   education sector. It is available, in principle, for students and
   staff members from educational institutes in the Netherlands, with
   a [SURFconext](https://www.surfconext.nl) registration. Your own
   institution will have to explicitly approve IRMA access. Via
   Surfconext "educational" attributes can be loaded into your IRMA
   app.

 * iDIN provides attributes from your bank, like name, address, town,
   and date of birth. After logging into your own bank, with your the
   bank's own login mechanism, these attributes can be loaded into
   your IRMA app. This service if available for everyone with a bank
   account in the Netherlands, see [iDIN](https://www.idin.nl).

 * ...


### <a name="mijnirma"></a>2. Waarvoor is MijnIRMA?

De [MijnIRMA](/mijnirma) website van de stichting biedt de volgende
mogelijkheden.

* U kunt er het gebruik van uw eigen IRMA app volgen: de *log*
  gegevens zijn er zichtbaar. U kunt zien wanneer uw app attributen
  getoond heeft en ook wanneer de app attributen ontvangen heeft. Het
  is echter niet zichtbaar om welke attributen het gaat, aan welke
  controleur u attributen getoond hebt, of van welke uitgever u
  attributen ontvangen heeft. De stichting wil deze zaken niet weten,
  en kan ze daarom ook niet aan je laten zien. Dit is verankert in het
  *privacy by design* ontwerp van IRMA.

  Het is verstandig af en toe eens naar deze loggegevens te
  kijken. Als daar blijkt dat uw IRMA app gebruikt wordt terwijl u
  daar helemaal niet van weet is er iets aan de hand: iemand anders
  gebruikt uw app om zich als u voor te doen. Dat is reden om
  direct in te grijpen. Hiermee komen we aan de tweede mogelijkheid
  die de MijnIRMA pagina biedt.
* U kunt op de MijnIRMA webpagina het gebruik van IRMA stop zetten.
  Natuurlijk kunt u dat doen als u IRMA niet langer wil
  gebruiken. Maar daarnaast is het belangrijk om aan deze "noodrem" te
  trekken als uw telefoon gestolen is, zodat een ander zeker geen
  misbruik kan maken van uw identiteit.

  Als u op MijnIRMA aangeeft te willen stoppen worden al uw gegevens
  gewist en kunt u IRMA niet meer gebruiken, ook al staat de app nog
  op uw telefoon. Mocht u hierna IRMA ooit toch nog willen gaan
  gebruiken, dan moet u zich opnieuw, van voor af aan registreren.

Inloggen op de MijnIRMA webpagina kan op twee manieren:

* Met IRMA zelf, via uw email attribuut.
* Door uw email adres in te typen. u krijgt dan een link toegestuurd
  op dit adres, die u toegang geeft tot uw account.

Deze laatste optie kunt u altijd gebruiken, vooral ook wanneer uw
telefoon gestolen is. Als u uw mail op een ander apparaat leest, kunt
u vandaaruit inloggen op MijnIRMA en uw IRMA account stopzetten.


### <a name="achtergrond"></a>3. Wat gebeurt er op de achtergrond?

De tekst hieronder gaat dieper in op wat er onder de motorkap gebeurt
wanneer u zich via de IRMA app registreert. Deze achtergrond
informatie is niet nodig voor het daadwerkelijke gebruik van IRMA,
maar is bedoeld voor mensen die technisch geïnteresseerd zijn en
willen weten hoe de zaken opgezet zijn en hoe beveiliging en privacy
bescherming in IRMA georganiseerd zijn.

Een eerste uitgangspunt is dat de IRMA app strikt persoonlijk is en
niet makkelijk door een ander misbruikt moet kunnen worden. Dit
gebeurt via een persoonlijke PIN code. Natuurlijk kunt u uw telefoon
met eigen attributen in een IRMA app tezamen met de PIN aan iemand
anders geven.  Dat is net zo onverstandig als uw bankpas met PIN aan
een ander geven.  Daar is geen beveiligingsmechanisme tegen
opgewassen.

We gaan er dus van uit dat IRMA gebruikers hun PIN code geheim
houden. De vraag is dan: waar is de PIN code opgeslagen? Hetzelfde
geldt voor de geheime persoonlijke cryptografische sleutel die nodig
is om de IRMA app voor u te laten werken.

De IRMA implementatie gebruikt een "truuk", waarbij zulke cruciale
geheime informatie verdeeld wordt tussen de app en de MijnIRMA server
van de stichting. De app en de server moeten heel precies samenwerken
om IRMA te laten werken. Ze hebben daar ieder alleen niet genoeg
informatie voor: ze moeten samenwerken en hun eigen geheimen apart
gebruiken voor een gezamenlijke berekening. Dit heet een *multi-party
computation*.

De MijnIRMA server kan zich in zijn eentje dus nooit als u voordoen:
daar is uw app op jouw telefoon voor nodig. Wat u wel op de server
kunt doen staat [hierboven](#mijnirma) beschreven. Het inloggen op de
MijnIRMA server kan via IRMA, maar ook via een link die per email
toegestuurd wordt. Als uw telefoon gestolen wordt, heeft de dief
mogelijk ook toegang tot uw email. De dief kan daarmee ook op uw
MijnIRMA inloggen. Maar het enige wat de dief daar kan doen is uw
account stopzetten. Als het goed is heeft u dat zelf al gedaan zodra u
de diefstal bemerkt.

Kortom: de MijnIRMA server biedt u extra bescherming en controle
mogelijkheden, maar kan zelf niks alleen doen -- behalve blokkeren. De
stichting Privacy by Design beheert de MijnIRMA server om het gebruik
van IRMA mogelijk te maken. Andere partijen kunnen in principe ook
zo'n server draaien.

De MijnIRMA server speelt ook een beschermende rol bij het gebruik
van uw PIN. Het is in het algemeen onverstandig als een PIN in een app
opgeslagen wordt, omdat die eruit gehaald zou kunnen worden als een
telefoon gehackt wordt.  De IRMA app slaat de PIN dus niet op, maar
wel een willekeurig groot getal dat een *nonce* genoemd wordt. De
MijnIRMA server weet ook uw PIN niet, maar krijgt bij registratie
de hash waarde *hash( PIN | nonce )*.  Hieruit is de PIN niet af te
leiden.

Wanneer u op uw app inlogt met uw PIN code, berekent de app dit
(grote) getal *hash( PIN | nonce )* en stuurt deze hash waarde naar de
MijnIRMA server. Daarna wordt de PIN verwijdert uit de app. Als de
hash waarde klopt, zijn de app en de server onderling gekoppeld en is
de inlog geslaagd.  Een succesvolle aanvaller kan eventueel wel de
nonce uit je app halen, maar heeft daar niet zo veel aan. Het enige
wat de aanvaller kan doen is alle 100.000 mogelijkheden van uw PIN
uitproberen, en bij iedere poging *X* het getal *hash( X | nonce )*
naar de MijnIRMA server sturen. De server ziet dan dat zoiets
geprobeerd wordt en sluit het account tot nader orde af. In dat geval
krijgt de eigenaar via het registratie email adres een waarschuwing,
en ook een link waarmee de blokkade ongedaan gemaakt kan worden.

Het onderstaande plaatje vat de twee rollen van de stichting Privacy
by Design samen. Enerzijds is de stichting uitgever van een aantal
attributen voor personalisatie.  Anderzijds zorgt de stichting via
MijnIRMA voor inzage in het eigen IRMA gebruik en voor de mogelijkheid
om het gebruik van IRMA (tijdelijk) stop te zetten.

<p align="center"><img src="../images/Rollen_Stichting.png" alt="IRMA
uitgever" style="width: 70%; height: 70%"/></p>

In het begin is de stichting de enige uitgever van IRMA
attributen. Hopelijk zullen andere partijen spoedig volgen.

De stichting verifieert ook attributen, maar alleen voor zichzelf,
wanneer IRMA gebruikers inloggen op MijnIRMA. Zulke verificaties
worden niet voor anderen gedaan. De stichting beperkt haar rol tot
uitgifte en inzage.

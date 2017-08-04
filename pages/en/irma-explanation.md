---
layout: page
title: IRMA in detail
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
permalink: /irma-explanation/
language: en
translations:
  nl: /irma-uitleg
teaser: This page has not yet been translated.
---

<a name="top"></a> This page explains the ideas behind the IRMA
system.  It also explains how the system works and has been
designed. The following topics will be discussed.

 1. [What is IRMA all about?](#topic)
 2. [Why would you wish to use attributes instead of identities?](#why)
 3. [How do I obtain and use attributes?](#how)
 4. [How does IRMA differ from authentication systems?](#architecture)
 5. [Which values does the IRMA technology embody?](#values)
 6. [How does IRMA work under the hood?](#hood)
 7. [Wat zijn attribuut-gebaseerde handtekeningen?](#signature)
 8. [Wat zijn de nadelen van IRMA?](#nadelen)
 9. [Hoe kan ik meedoen of bijdragen?](#meedoen)

These questions will be addressed one by one below. Elsewhere there
are shorter explanations, for [IRMA app users](/irma-start) and for
[IRMA verifiers](/irma-verifier).


### <a name="topic"></a>1. What is IRMA all about?

In many countries, when you buy a bottle of whiskey, you are obliged
to prove that you are older than 18. You don't have to prove who you
are. Just this personal property, that you are over 18, suffices
for the whiskey purchase. Such personal properties will be called
*attributes*.

IRMA is the name for a system that allows you to do precisely this.
IRMA stands for *I Reveal My Attributes*. IRMA empowers you to
disclose online, via your mobile phone, certain attributes of yourself
("over 18"), but at the same time hide other attributes (like your
name, or phone number). IRMA protects your privacy in this way. This
privacy-protection is intrinsic to the system, which is called
*privacy by design*. In the most recent European data protection
regulation such privacy by design is legally required for new
ICT-systems.

Apart from instrinsic privay-protection, IRMA also protects against
identity fraud: if your name and date of birth are not revealed at
all, they cannot be abused.

The list below gives several examples of attributes that may be useful,
for instance for interaction with a webshop, with the government,
with your bank, or at a webforum, etc.

* I'm a student (or a pensioner)
* I'm older than 12 (or 16, or 18, or 21, or 65)
* I'm younger than 12 (or ...)
* My nationality is ...
* My gender is ...
* My bank account number is ...
* My home address is ...
* My given/family name is ...
* My national registration number is ...
* My insurance number is ...
* My email address is ...
* My mobile phone number is ...
* My loyalty card of company X has status bronze / silver / gold
* My rail subscribtion is first / second class
* etc. etc.

Some of these attributes are uniquely identifying, like your bank
account number: it is associated with a single person. But some other
attributes can be used anonymously, without disclosing who is
involved. These non-identifying attributes apply to multiple people.

Attributes form a natural mechanism for revealing certain aspects of
yourself, while at the same time selectively disclosing other aspects.
There are many scenarios where attributes provide precisely the
relevant information that is required for a certain transaction.

* If you wish to join an online chat-box for minors, you have to prove
  that you are younger than 15, for instance. Or if you want to
  participate in an online discussion group of people with a certain
  sensitive disease, this disease itself can be the attribute that
  gives you anonymous access to the group.

* When you wish to buy a violent game/movie/book online, you have to
  prove that you are older than 16, or may even older than 18.

* If you possess the "student" attribute you may be able to get a
  discount at a hairdresser; en if you have the "handicapped"
  attribute of specific kind, you may be entitled to special
  transportation.

* For a purchase online you home address attribute is needed for
  delivery. Discounts may be available via a loyalty attribute of the
  webshop. And possible an age limit attribute is required if the item
  that you purchase is not intended for minors.

In short, IRMA is about attribute-based authentication: it is not
about *who* you are, but *what* you are. This is very natural and
intuitive. When you visit a doctor in a hospital you may wish to know
his/her name for communication, but a much more important attribute is
that the relevant person is a qualified medical doctor indeed. In the
non-digital world we rely very much on context: the person wears a
white coat and receives you in an office in a building that says
"hospital" above it entrance. But in the online world such context
information is often missing (or is easy to fabricate), so that we
have to use attributes like in IRMA for trusted intraction.

Kortom: IRMA gaat over attribuut-gebaseerde authenticatie: u bewijst
niet zozeer *wie* u bent, maar *wat* u bent. Dat is heel natuurlijk
en intuïtief. Als u een arts in het ziekenhuis bezoekt wilt u
diens naam misschien weten voor de communicatie, maar een veel
belangrijker attribuut is dat de betreffende persoon daadwerkelijk
arts is. In de niet-digitale wereld vertrouwen we erg op de context:
de persoon draagt een witte jas en ontvangt u in een werkkamer in een
ziekenhuis. Dat geeft vertrouwen. Maar in de online wereld ontbreekt
een dergelijke context (of is die makkelijk te vervalsen) en moeten we
attributen als in IRMA gebruiken voor betrouwbare omgang.


[To the top](#top)

### <a name="why"></a>2. Why would you wish to use attributes instead of identities?

The short answer is: attributes protect you and empower you.

Via a unique personal number, like a passport number or a national
registration number, people can be recognised in many different
situations and all their actions can be linked. This has many
advantages, for instance in public services. But it can also have
serious disadvantages, especially when this unique personal number is
abused by someone else. This is called identity fraud, and it is one
of the biggest plagues of the digital era.

When you use anonymous attributes, instead of a unique personal
number, for a transaction, then your identity does not play a role and
cannot be stolen. In this sense, attributes protect you.

Usage of attributes, instead of identities, has additional advantages.

* It is privacy-friendly because of *data minimalisation*. Only those
  attributes which are relevant and necessary for a transaction need
  to be disclosed.
* It provides the user, at least with IRMA, real control and
  transparancy about who is requesting to see which attributes.
* It is flexible and can be used in many situations.
* It prevents linking of different transactions, as long as
  non-identifying attributes are being used. Hence it also prevents
  open or surreptitious surrveillance and profiling, and everything
  that is associated with it, such as price-discrimination (the price
  that you have to pay depends on the profile that has been assembled
  about you).

In many digitisation projects of the past decades attributes from
daily life have been replaced by digital identities. An example is
smart card based e-ticketing in public transport. Traditionally,
having a (anonymous, untraceable) paper ticket was enough to get on a
bus or train. These days one implicitly reveals one's identity by
using a (uniquely numbered) smart card. Via such cards individual
movements can be traced and stored for many years, be used for
marketing purposes, and posssibly become public through a computer
hack or through negligence. Anonymous cards, at least in the
Netherlands, do not offer much privacy protection, since when an error
needs to be corrected or when you want to receive any remaining saldo
on the card after its expiration, you need to disclose your
identity. In this way a connection is made between you and and all
your travels, which, you thought, were anonymous.

Attribute-based identity management (re)introduces more protection and
flexibility for users. Additionally, attributes offer some protection
for service providers against possible disadvantages of total
anonymity, because they can demand that participants do reveal some
minimal level of relevant data about themselves, for instance that
they are female, or under 12, in special online discussion groups for
women or for children.

[To the top](#top)

### <a name="how"></a>3. How do I obtain and use attributes?

In the IRMA ecosystem your personal attributes are securely stored in
the IRMA app on your own phone (or tablet) --- and nowhere else. The
app is protected via your own PIN code. This personal PIN ensures that
no-one else can use your attributes in your IRMA app, and thus steal
your identity. Of course, it is important that, in addition, your
phone has its own login pattern or code. But on top of that, the IRMA
app has its own PIN, just like various apps from mobile banking have
their own PIN.

Attributes that hold for you can be downloaded to your IRMA app on
your phone. Typically this is done via the [web](/issuance), but it is
also possible to do this in a face-to-face scenario at a counter. An
organisation that provides attributes is called an *attribute issuer*,
or simply an *issuer*. There may be several issuers of attributes, such
as:

* national or local (government) authorities, for attributes like:
  name, address, date of birth, national citizen numbers, categories
  of income, etc.
* banks and insurance companies, for attributes like: bank and/or
  insurance account numbers, type of insurance, etc.
* internet service providers and telecom operators, for: email
  addresses, phone numbers, IP-addresses
* the Facebook's / Google's / Apple's / Amazon's / Microsoft's of this
  world for login data
* big or small webshops, with loyaly cards and custum numbers, with
    associated status, coupons, etc.
* companies and other organisations, for attributes as a basis for
  fine-grained role-based access management
* hospitals and other healthcare organisations, for regulating access
  via attributes, not only for healthcare professionals, but also for
  patients
* block chain initiatives, for authentication of users and their roles
* military organisations, for all their different ranks and (security)
  compartimentalisations and clearances, and for members of special
  forces whose identifying data are typically not revealed
* etc.

Unfortunately, at this stage, IRMA is not so widely accepted and
supported yet that all these organisations actually issue IRMA
attributes. But some of them seriously look at the possibilities.

If you wish to obtain certain attributes from such an issuer you first
have to authenticate (prove who you are) to this issuer. Subsequently,
this issuer can look up in its own database which attributes it knows
about you, and you can choose from the available attributes which ones
to download to your IRMA app on your phone, digitally signed by the
issuer. Concretely, in order to obtain attributes from your bank,
you have to log into your bank first. This is precisely what happens
with [iDIN](/issuance-idin).

Once your IRMA app contains a collection of attributes, you can start
using them in various transactions. In such transactions the other
side (think of a webshop) may ask you, for instance, what your home
address (attribute) is. After you have explicitly agreed to such a
request, and typed in your PIN code, this attribute is revealed by the
IRMA app to the webshop. By performing some cryptographic checks, the
webshop can verify that the attribute is genuine, has not expired, has
not been manipulated, has been issued by a specific issuer, and also
that it really belongs to you (actually: to your phone). This
requesting party, who wants to see some of your attributes, is called
a *verifier*, or sometimes a *relying party*. There is a special
[verifier page](/irma-verifier) explaining what this role amounts to.

It is built into the IRMA system that these verifiers must make very
clear to you which attributes they request to see.  You, as an IRMA
user, have to explicitly agree to the release of those attributes.  In
this way it is clear and transparant who wants to know what about you.
The IRMA app keeps its own log, so that you can see later which verifier
has requested which attributes (at what time), and what you have
revealed. If there are verifiers who request disproportionally much
information from users, you can file a complaint, based on these logs,
for instance with your (national) data protection authority.

(The Privacy by Design foundation also keeps a minimal log of all your
transactions, in order to enable you to detect possible abuse, see the
[MyIRMA explanation](/irma-start/#myirma). This log gives you no
information about the attributes that have been requested and/or
shown, and can not be used for complaints.)

Attributes in IRMA carry a digital signature of the issuer. Via this
signature the verifier can check the origin and the integrity of
attributes. Attributes have an expiry date, which can also be checked
by the verifier. If attributes have expired, they need to be refreshed
by the user, by returning to the original issuer. This works just like
for passports, identity cards, or driver's licenses: at some stage
they expire, and you need to get it re-issued. Refreshing of IRMA
attributes is much simpler, however, since it can be done online.

The three pictures below give a schematic overview, first of 
downloading attributes at an issuer, and subsequently, of 
using attributes at two different webshops.
<hr>
<p align="center"><img src="../images/Transactions_IRMA_voorbereiding.png" alt="IRMA uitgever" style="width: 55%; height: 55%"/></p>
<hr>
<p align="center"><img src="../images/Transactions_IRMA_eerste_gebruik.png" alt="IRMA gebruik" style="width: 50%; height: 50%"/></p>
<hr>
<p align="center"><img src="../images/Transactions_IRMA_enzovoort.png" alt="IRMA gebruik" style="width: 50%; height: 50%"/></p>
<hr>

This downloading of attributes is a natural form of modern *identity
management*. It allows you to assemble and maintain your own personal
digital passport in your IRMA app. Such personal data management is a
bit like installing and removing apps on your phone or tablet.

[To the top](#top)


### <a name="architecture"></a>4. How does IRMA differ from authentication systems?

IRMA differs in essential ways from other identity management systems,
such as [Facebook
login](https://developers.facebook.com/docs/facebook-login), or
[iDIN](http://www.idin.nl) in the Netherlands. IRMA has a
*decentralised* architecture. Your attributes are stored only locally,
on your phone, and not centrally in the computer systems of some
"identity broker". When you use IRMA to prove to a webshop that you
are older than 18, your IRMA app communicates directly with the
webshop, without intermediary parties. In the IRMA set-up there are,
in principle, no third parties who can monitor and record:

* which attributes you have
* where you use them
* when you use them.

In this manner IRMA offers optimal privacy protection, by design.

To compare: if website X does not use IRMA for user authentication,
but let's say Facebook login, you are re-directed to Facebook when you
wish to login at X. After logging into Facebook, using your Facebook
credentials, Facebook gives website X certain information about
you. In this way Facebook learns where you login at what moment and
uses this information to extend your profile and adapt its
advertisement targeting. In addition, it is not transparant to you
which data about you website X receives from Facebook.

Many identity management systems are organised in such a *centralised*
manner. This is commercially most interesting for the providers of the
identity management system: they can not only build up a profile of
all users --- who logs in where and when with which data --- but they
can also charge the relying party for each authentication action,
precisely because they are in the middle, and all communication goes
through their systems.

Another clear example is the iDIN authentication system that banks in
the Netherlands have set up. When you authenticate via iDIN, your bank
can see whether you login to a liquor store or to a psychiatric
clinic. The banks [promise](https://www.idin.nl/consumenten) that they
will not use this information for other purposes, for instance, when
they decide whether or not you will get a mortgage. In IRMA's
decentralised architecture such uncomfortable issues do not arise at
all. In addition, relying parties, such as webshops, need to pay the
banks per iDIN authentication session. The prices are a real concern
for them, and have already led to complaints. Again, with IRMA there
are no such artificial costs imposed by the chosen (centralised)
architecture.

The difference between a decentralised (IRMA) and centralised
(non-IRMA) set-up is sketched below.
<p align="center"><img src="../images/Transactions_all_lowres.png" alt="overzicht" style="width: 100%; height: 100%"/></p>

It may be clear that in the non-IRMA set-up the issuer of attributes
is a privacy hotspot who facilitates and sees all
transactions. Moreover, in the centralised architecture a (malicious)
issuer can completely take over your identity and impersonate you. You
have no way to stop this, or even notice it --- until possibly later
when you are confronted with the consequences. In the decentralised
IRMA set-up you have genuine control over the usage of your own
attributes: you disclose your own attributes yourself, only after
explicit consent, without (unnecessary) interference of third parties.
This is similar to the way you can disclose your (physical) passport
yourself, without dependence on others.

In the IRMA system there are no such *privacy hotspots*. At a
meta-level, IRMA does involve some level of coordination about how
attributes and credentials are organised and which cryptographic
(public) keys are needed at which stage. This coordinating role is
fulfilled by the Privacy by Design foundation. But: the foundation can
not see at all which attributes are used where.

The Privacy by Design foundation does not monopolise IRMA and its
technology. The software is open source and is freely available, for
everyone to use. Also other parties can play the coordinating and
issuing roles that the foundation is playing at this stage.  In fact,
it would be better if [iDIN](/issuance-idin) or the [BIG
register](/issuance-big) would directly issue IRMA attributes
themselves, instead of the foundation doing so indirectly ---
currently, hopefully temporarily.

Decentralised and centralised identity management systems do not
exclude each other. In fact, they can work well together, for instance
in the case of iDIN providing attributes for IRMA. IRMA can best be
used for applications where privacy plays a (big) role and where
attributes are needed that can not be organised easily in a
centralised manner, for instance because of legal restrictions or lack
of trust among users. IRMA can also handle "temporary" attributes,
like an entry ticket for a concert, containing the name, date and
location of the concert. In principle, you can buy such a ticket
online and download it as attribute to your IRMA app. At the entrance
of the concert the ticket can be shown and verified, and subsequently
deleted.


A subtle point is wheter IRMA outperforms centralised architectures
since such architectures intrinsically have a single-point-of-failure;
if it goes down all authentication is disabled. In fact, IRMA also
involves a small central component, as will be explained in more
detail [next](#hood), so that users can inspect and disable their
usage. This central component plays a role in each attribute
disclosure and issuance. Hence it is a single-point-of-failure too.


[To the top](#top)




### <a name="hood"></a>5. How does IRMA work under the hood?

Met iets meer technische details zal hier uitgelegd worden waarom IRMA
privacy-vriendelijk en goed-beveiligd is. IRMA is gebaseerd op
geavanceerde cryptografie, voor attribuut-gebaseerde credentials.
Deze credentials zijn containers met daarin een aantal attributen,
voorzien van een geldigheidsdatum en een digitale handtekening. De
onderliggende cryptografie is gebaseerd op
[Idemix](http://www.research.ibm.com/labs/zurich/idemix/) dat vanaf
eind jaren negentig bij IBM in Zürich is ontworpen.  De
technologie is *open*. Er is uitgebreid over gepubliceerd in de
wetenschappelijke literatuur. Dit geeft vertrouwen.

IBM stelt een implementatie van Idemix gratis beschikbaar.  De
stichting Privacy by Design heeft een andere, eigen, onafhankelijke,
open source [implementatie](https://credentials.github.io/) die door
iedereen bekeken en gecontroleerd kan worden. Ook dit geeft
vertrouwen, niet alleen in de juiste werking van het system, maar ook
om te kunnen controleren dat er geen stiekeme achterdeurtjes in
zitten. Deze eigen implementatie is gezamenlijk eigendom van de
stichting en de Radboud Universiteit, waar in eerste instantie deze
implementatie ontwikkeld is.

Zoals gezegd worden attributen in groepjes gecombineerd in een
credential. Bijvoorbeeld, u kunt een credential hebben met de
volgende attributen.

* nationaliteit
* geboorteplaats
* geboortedatum

Zo'n credential kan bijvoorbeeld uitgegeven worden door de gemeente,
of door de rijksoverheid, via
[mijnoverheid.nl](https://mijn.overheid.nl). U kunt de verschillende
attributen in zo'n credential los van elkaar, maar ook in
verschillende combinaties tonen. In het voorbeeld kunt u laten zien
wat uw nationaliteit is, zonder te onthullen waar of wanneer u
geboren bent. In het engels heet dit *selective disclosure*.

De partij die credentials uitgeeft heet een *uitgever*. Bij de
uitgifte zet de uitgever een zogenaamde *blinde* handtekening. Het
resultaat daarvan is dat de uitgever na uitgifte van een credential
niet kan nagaan waar dit credential gebruikt wordt, zelfs niet als de
uitgevers samenspant met alle controleurs. De stichting heeft open
source software [beschikbaar](https://credentials.github.io/) voor het
vervullen van zo'n uitgever rol.

De partij die een of meerdere attributen, uit een of meerdere
credentials, controleert heet een *controleur*. Zo'n controleur
controleert een aantal dingen:

* zijn de attributen nog geldig (niet verlopen)?
* klopt de digitale handtekening op de credentials, en daarmee de
  integriteit en de authenticiteit van de attributen?
* zijn de credentials afkomstig van een uitgever die de controleur voldoende
  vertrouwt voor deze transactie?
* indien er attributen uit meerdere credentials getoond worden: behoren ze tot
  dezelfde persoon.?

Ook voor deze controleur-rol heeft de stichting open source gratis
[software](https://credentials.github.io/). Een webwinkel kan daarmee
zelf attributen controleren.  Kleinere webwinkels zullen die controle
misschien liever aan andere derde partijen uitbesteden, net zoals ze
betalingen vaak uitbesteden. Dat kan ook, maar is minder goed voor de
privacy omdat deze externe controlerende partijen veel attributen te
zien krijgen. Zo'n derde partij kan met deze dienst mogelijk geld
verdienen.

Credentials zijn cryptografisch aan de telefoon, en aan elkaar,
gebonden via een persoonlijke geheime cryptografische sleutel. Die
geheime sleutel is cruciaal voor de beveiliging en dient goed
beschermd opgeslagen te worden.  Dat is moeilijk om op een telefoon te
doen, omdat een telefoon ge-root of gehackt kan worden. Daarom wordt
de geheime sleutel bij IRMA voor een klein, maar cruciaal deel buiten
de telefoon opgeslagen op een zogenaamde *keyshare-server*. De IRMA
PIN code wordt door de keyshare-server gecontroleerd. Alleen als die
PIN klopt, zal de server meedoen en kunnen attributen getoond
worden. De keyshare-server krijgt de attributen die je vrijgeeft niet
te zien, en ook niet aan wie je ze vrijgeeft.

Deze geheime persoonlijke sleutel, en dus de medewerking van de
keyshare-server, is nodig bij iedere IRMA-handeling zoals het
ontvangen en tonen van attributen. Zolang mijn sleutel bij mij blijft,
kunnen mijn attributen niet door anderen gebruikt worden. Daarmee zijn
attributen niet overdraagbaar.

(Natuurlijk kan iemand zowel de eigen telefoon als de PIN van de IRMA
app aan iemand anders geven.  Dat is bijzonder onverstandig. Als u
zoiets doet kan die ander zich als u voordoen, en allerlei nare dingen
in uw naam doen, waarvoor u de rekening krijgt.)


[To the top](#top)


### <a name="values"></a>5. Which values does the IRMA technology embody?

Authentication requirements reflect the power relations in society.
In general, the more powerful impose authentication requirements and
mechanisms on the less powerful. The Privacy by Design foundation is
well aware of these societally important issues and aims to use
value-laden design in offering IRMA as a transparant open ecosystem
for proportional and contextual authentication that empowers, instead
of weakens, users.  

IRMA works via freely available open source software. Everyone can
inspect and judge how it works. This transparancy is essential for
broad voluntary usage and acceptance of sensitive infrastructure, like
for authentication.  With IRMA there is no commerical lock-in, and
there is no extorted trust. Even if the foundation somehow goes down,
the software will still be there and can be maintained and continued
by others.

Thus, IRMA is not about plundering or deceiving your users, or about
surreptitiously steering them commercially or politically, but about
encountering them transparantly, respectfully and with dignity.

IRMA does not exclude commercial activities surrounding
authentication. But these commercial activities work best *on top of*
an open basic infrastructure, and not in its core.  Internet protocols
like TCP and IP are also open, and form the basis for the succes of
the internet, together with all the commercial transactions that run
on top of TCP/IP.


[To the top](#top)


### <a name="signature"></a>7. Wat zijn attribuut-gebaseerde handtekeningen?

IRMA is primair een systeem voor attribuut-gebaseerde authenticatie: u
kunt met IRMA selectief attributen van uzelf laten zien. Maar IRMA
biedt nog meer, namelijk attribuut-gebaseerde digitale handtekeningen.
Dit verkeert echter nog in experimentele fase.

Met een *traditionele* "natte" handtekening verklaart een
ondertekenaar zich akkoord met de inhoud van het ondertekende
document. Zo'n traditionele handtekening omvat typisch de naam van de
ondertekenaar, het tijdstip van ondertekening, en de handgeschreven,
eigen "krabbel".

Een *digitale* handtekening is een toevoeging aan een digitaal
document die alleen gegenereerd kan worden met de persoonlijke
(cryptografische) sleutel van de ondertekenaar. Deze persoonlijke
*private* sleutel is aan een persoon gebonden via een certificaat,
waarin de bijbehorende *public* key opgenomen is. Digitale
handtekeningen die aan bepaalde eisen voldoen worden wettelijk
geaccepteerd.

Een groot nadeel van zowel traditionele als huidige digitale
handtekeningen is dat ze weinig informatie geven over wie nu precies
de handtekening zet, in welke rol.

Een attribuut-gebaseerde handtekening is een speciale digitale
handtekening waarbij in de toevoeging aan het document ook een aantal
attributen van de ondertekenaar opgenomen worden. Deze attributen zijn
zichtbaar voor eenieder die de handtekening controleert. Zo kunt u
bijvoorbeeld zien dat een bepaalde ziekteverklaring ondertekend is
door een arts, via het "arts" attribuut, eventueel gecombineerd met de
medische specialisatie of met het BIG nummer, als attribuut. Een ander
voorbeeld is een verzoek van een burger aan de overheid, zeg over een
vergunning, dat ondertekend is met het eigen BSN attribuut. Daarmee
herkent de overheid direct dat dit verzoek daadwerkelijk van een
bepaalde burger afkomstig is. Ook betaalopdrachten kunnen via een
attribuut-gebaseerde handtekening gerealiseerd worden, door het
rekeningnummer van de ondertekenaar als attribuut in de handtekening
te stoppen.

Attribuut-gebaseerde handtekeningen worden door IRMA software
ondersteund, vooralsnog in experimentele vorm. Deze vorm moet nog
uitkristalliseren in toepassingen. Attribuut-gebaseerde handtekeningen
vormen een nieuw concept met ongekende toepassingsmogelijkheden.


[To the top](#top)


### <a name="nadelen"></a>8. Wat zijn de nadelen van IRMA?

Het belangrijkste voordeel van IRMA is: de gebruiker beheert en
controleert zelf zijn/haar eigen attributen. Maar dat is
tegelijkertijd ook een nadeel: de gebruiker moet dat wel zelf actief
doen. Dat vergt enige inspanning, en ook enig begrip van hoe het werkt
en wat er precies gedaan moet worden.

Uw identiteit is een kostbaar bezit waar u ook in de digitale wereld
zeer zorgvuldig mee om moet gaan. Dat moeten we met z'n allen nog
leren. Met IRMA wordt duidelijk waar welke attributen van u voor
nodig zijn. U moet die attributen eerst in uw telefoon zetten voordat
u ze kunt gebruiken. En als attributen verlopen zijn moet u ze
verversen. En als u uw telefoon vervangt, moet u uw attributen
weer opnieuw ophalen voordat u weer online kunt inloggen.  Dat is
allemaal "gedoe" dat hoort bij een zorgvuldige omgang met uw
digitale identiteit.  IRMA geeft u zelf regie en helpt u erbij om
net zo zorgvuldig in de online wereld met u IRMA app om te gaan als
u in de offline wereld met uw paspoort omgaat.

Dit zijn (mogelijk) nadelen voor gebruikers. Een "systeem" nadeel van
IRMA is dat er niet op de traditionele manier geld aan te verdienen
is: IRMA gebruikers kunnen niet door attribuut uitgevers of
geprofileerd worden, en er zijn ook geen centrale partijen die voor
iedere authenticatie een prijs kunnen vragen. Voor gebruikers is dat
misschien juist weer een voordeel.

Echter, met het IRMA ecosysteem is wel degelijk economisch
levensvatbaar. Het uitgeven en controleren van attributen kan een
commerciële dienst zijn, die door derde partijen tegen betaling
uitgevoerd wordt. Ook kan voor de uitgifte van speciale attributen,
bijvoorbeeld voor een bepaalde beroepsgroep, geld gevraagd worden van
de IRMA gebruiker. Mogelijk zal de stichting Privacy by Design om de
eigen activiteiten mogelijk te maken in de toekomst ook een prijs
vragen, bijvoorbeeld per gebruiker een euro per jaar, voor een basis
set attributen.



[To the top](#top)

### <a name="meedoen"></a>9. Hoe kan ik meedoen of bijdragen?

IRMA is een systeem dat van onderaf opgebouwd wordt en niet van
bovenaf opgelegd. IRMA zal zich moeten bewijzen via overtuigende
toepassingen. Daar wordt nu door verschillende partijen aan gewerkt.

Hecht u aan zorgvuldige privacy-vriendelijke omgang met uw klanten,
gebruikers of patiënten, en heb je een goed idee voor een
toepassing van IRMA, bijvoorbeeld bij u in de webwinkel of binnen
uw organisatie, neem dan [contact](/contact) op met de stichting
Privacy by Design. Wat de stichting kan doen is bijvoorbeeld:

* adviseren bij de organisatie van attributen voor de beoogde
  toepassing;
* adviseren bij het gebruik van de open source software van de stichting;
* zonodig uitbreiden van deze software voor een optimale inzet bij deze
  toepassing; deze uitbreidingen zullen dan in principe ook als open
  source software voor anderen beschikbaar zijn.

De stichting zal voor dergelijke ondersteuning een nader te bepalen
financiële bijdrage verwachten, om de eigen activiteiten in stand
te houden. De stichting is een non-profit organisatie, zonder
commerciële doelstelling.

Ook als u geen concrete toepassing voor ogen hebt, maar wilt bijdragen
aan het IRMA gedachtengoed, door uw inzet of door een financiële
bijdrage, staan wij open voor [contact](/contact).

[To the top](#top)

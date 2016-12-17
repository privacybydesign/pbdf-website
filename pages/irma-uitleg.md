---
layout: page
title: IRMA in detail
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
permalink: /irma-uitleg
---

Op deze pagina worden de idee&euml;n achter het IRMA systeem
beschreven en ook hoe het systeem werkt en is opgezet. De volgende
onderwerpen komen achtereenvolgens aan de orde.

 1. [Waar gaat IRMA eigenlijk over?](#onderwerp)
 2. [Waarom zou je attributen willen gebruiken in plaats van identiteiten?](#waarom)
 3. [Hoe kom ik aan attributen en hoe gebruik ik ze?](#hoe)
 4. [Wat zit er bij IRMA onder de motorkap?](#motorkap)
 5. Hoe is IRMA opgezet? Wat is de onderliggende architectuur?
 6. Wie zit er achter IRMA?
 7. Hoe kan ik meedoen of bijdragen?

Deze vragen zullen hieronder een voor een beantwoord worden.

### <a name="onderwerp"></a>1. Waar gaat IRMA eigenlijk over?

Wanneer je een fles whiskey koopt moet je bewijzen dat je boven de 18
bent. Je hoeft niet te vertellen wie je bent. Enkel deze persoonlijke
eigenschap, dat je boven de 18 bent, is genoeg voor de whiskey
aankoop. Zulke persoonlijke eigenschappen worden attributen genoemd.

IRMA is de naam voor een systeem dat precies dit doet. IRMA staat
voor: I Reveal My Attributes. IRMA stelt je in staat om bepaalde
attributen van je zelf wel te laten ("boven de 18"), maar ook om
andere attributen juist niet te laten zien (je naam of
paspoortnummer). IRMA beschermt daarmee je privacy. Deze
privacy-bescherming zit ingebakken in het systeem, en wordt daarom ook
*privacy by design* genoemd. In de meeste recente nationale en
Europese wetgeving wordt privacy by design vereist voor nieuwe
ICT-systemen.

Naast intrinsieke privacy-bescherming biedt IRMA ook bescherming tegen
identiteitsfraude: als je bankrekeningnummer of geboortedatum niet
genoemd wordt, kan het ook niet misbruikt worden.

Hieronder staat een lijstje attributen die nuttig kunnen zijn,
bijvoorbeeld bij een webwinkel, bij de overheid, op een webforum, bij
een bank, enz.

* Ik ben een student (of een oudere)
* Ik ben boven de 12 (of 16, of 18, of 21, of 65)
* Ik ben onder de 12 (of ...)
* Mijn nationaliteit is ...
* Mijn geslacht is ...
* Mijn banknummer is ...
* Mijn huisadres is ...
* Mijn voor/achter-naam is ...
* Mijn burger service nummer (BSN) is ...
* Mijn verzekersnummer is ...
* Mijn email adres is ...
* Mijn mobiele nummer is ...
* Mijn klantenkaart van bedrijf X is brons / zilver / goed
* Mijn treinabonnement is eerste / tweede klas
* etc. etc.

Sommige van deze attributen zijn uniek-bepalend, zoals je BSN: er
hoort een unieke persoon bij. Maar sommige andere attributen kunnen
annoniem gebruikt worden, zonder dat daarbij bekend wordt om wie het
precies gaat. Deze niet-identificerende attributen gelden voor
meerdere mensen.

Attributen vormen een natuurlijke manier om bepaalde aspecten van
jezelf te verbergen en anderen juist te laten zien. Er zijn heel veel
scenario's waarin attributen precies de informatie die nodig zijn voor
een transactie.

* Als je mee wil doen met een online chat-box voor minderjarigen, moet
  je aantonen dat je jonger bent dan 15, bijvoorbeeld. Of als je mee
  wil doen in een online discussie groep van mensen met een bepaalde
  gevoelige ziekte, kan deze ziekte een attribuut zijn dat anoniem
  toegang geeft tot de groep.
* Wanneer je een gewelddadige game/video/boek online wil kopen moet je
  bewijzen dat je boven de 16 bent, of misschien zelfs boven de 18.
* Als je het "student" attribuut hebt kun je bijvoorbeeld korting
  krijgen bij de kapper; en als je het "gehandicapt" attribuut van een
  bepaalde soort hebt, heb je recht op speciaal vervoer.
* Als je online iets wil kopen moet je je bankrekeningnummer tonen
  voor de betaling, en je adres voor de bezorging. Eventuele korting
  kun je krijgen via een lidmaatschapsattribuut van de webwinkel.

Kortom: IRMA gaat over attribuut-gebaseerde authenticatie: je bewijst
niet zozeer *wie* je bent, maar *wat* je bent. Dat is heel natuurlijk
en intu&iuml;tief. Als je een arts in het ziekenhuis bezoekt wil je
diens naam misschien weten voor de communicatie, maar een veel
belangrijker attribuut is dat de betreffende persoon daadwerkelijk
arts is. In de niet-digitale wereld vertrouwen we erg op de contekst:
de persoon draagt een witte jas en ontvangt je in een werkkamer in een
ziekenhuis. Dat geeft vertrouwen. Maar in de online wereld ontbreekt
een dergelijke contekst (of is die makkelijk te vervalsen) en moeten
we het soort attributen als in IRMA gebruiken voor betrouwbare omgang.



### <a name="waarom"></a>2. Waarom zou je attributen willen gebruiken in plaats van identiteiten?

Kortweg: attributen beschermen je en stellen je in staat om veel
dingen te doen.

Via een uniek persoonsnummer, zoals een paspoort nummer of een burger
service nummer (BSN), kunnen mensen in veel verschillende situaties
herkend worden en kunnen al hun handelingen in die situaties aan
elkaar gekoppeld worden. Dit heeft veel voordelen, bijvoorbeeld bij
publieke dienstverlening. Maar het kan ook serieuze nadelen hebben,
vooral wanneer dat unieke persoonsnummer door een ander misbruikt
wordt.  Dit heet identiteitsfraude, en is een van de grootste plagen
van het digitale tijdperk.

Wanneer je in plaats van unieke persoonsnummers anonieme attributen
gebruikt voor een transactie, dan speelt je identiteit helemaal geen
rol en kan daarom ook niet gestolen worden. In die zin bieden
attributen bescherming.

Het gebruik van attributen in plaatsvan identiteiten heeft nog
meer voordelen.

* Het is privacy-vriendelijk vanwege *data-minimalisatie*. Alleen die
  attributen die relevant en noodzakelijk zijn voor een transactie
  hoeven onthuld te worden.
* Het voorkomt het onderling koppelen van verschillende transacties,
  zolang daar geen uniek-identificerende attributen voor nodig
  zijn. Daarmee wordt openlijk of stiekem profileren tegengegaan, en
  alles wat daarmee samenhangt als prijsdifferentiatie (de prijs die
  aan jou genoemd wordt hangt af van je profiel).
* Het is flexibel en past in veel verschillende situaties.
* Het geeft de gebruiker werkelijke controle en zicht op wie welke
  gegevens vraagt!

In veel digitaliseringsprojecten in de afgelopen decennia zijn
attributen uit het dagelijkse leven vervangen door vaste digitale
identiteiten. Een voorbeeld is de OV-chipkaart. Traditioneel voldeed
een papieren kaartje voor de bus of trein. Daarmee kon je anoniem
reizen, zonder dat je verschillende reizen onderling gekoppeld konden
worden. Tegenwoordig moet je je identiteit onthullen om te reizen via
het unieke nummer van een OV-chipkaart. Via zulke kaarten kunnen al je
reizen bijgehouden en gekoppeld worden, gebruikt worden voor marketing
doeleinden, en mogelijk openbaar worden door een hack of door
slordigheid. Anonieme OV-chipkaarten bieden weinig bescherming, omdat
bij herstel van een fout of geld-teruggave van een verlopen kaart je
toch je identiteit moet onthullen.

Attribuut-gebaseerde systemen brengen de traditionele bescherming en
flexibiliteit voor een deel weer terug. Daarnaast bieden ze
bescherming tegen de eventuele nare gevolgen van totale anonimiteit,
omdat je kunt vereisen dat deelnemers toch iets van zichzelf
onthullen, bijvoorbeeld dat ze vrouw zijn of onder de 12, in
discussiegroepen speciaal voor vrouwen of voor kinderen.


### <a name="hoe"></a>3. Hoe kom ik aan attributen en hoe gebruik ik ze?

Jouw persoonlijke attributen worden opgeslagen in de IRMA app op je
eigen telefoon (of tablet). De app heeft een eigen PIN die nodig is
voor het gebruik. Natuurlijk is het goed als je telefoon een eigen
inlog patroon of code heeft. Maar daarbovenop heeft de IRMA app nog
weer een eigen PIN, net zo als de verschillende apps voor mobiel
bankieren een eigen PIN hebben.

Attributen die voor jou gelden kun je downloaden in je IRMA app op je
telefoon. Dat kan via het web, bijvoorbeeld door het scannen van een
QR-code, maar dat kan ook ter plekke, bijvoorbeeld aan een balie. De
organisatie die attributen uitgeeft heet een *attribuut issuer* of
gewoon een *issuer*. Er zouden verschillende issuers kunnen zijn,
zoals:

* de nationale overheid, of een gemeente, voor attributen als: naam,
  adres, geboortedatum, BSN, rijbevoegdheid, categorie van inkomen,
  etc.
* banken en verzekeringsmaatschappijen, voor attributen als: bank- en
  verzekeringsnummers, soort van verzekering, etc.
* internet service providers, telecom operators, voor:
  mail/IP-adressen, en telefoonnummers
* de Facebook's / Google's / Apple's van deze wereld, voor login
  gegevens
* grote of kleine webshops, voor eigen klantenkaarten met bijbehorende
  status, coupons, etc.
* bedrijven en andere organisaties, voor attributen ten behoeve van
  verfijnde rol-gebaseerde toegangscontrole
* ziekenhuizen en andere gezondheidsinstellingen, voor regulering van
  toegang niet alleen voor het eigen personeel, maar ook voor
  pati&euml;nten
* etc.

Op dit moment wordt IRMA helaas nog niet zo breed geaccepteerd en
ondersteund dat al deze partijen zulke attributen uitgeven. Maar
sommigen van hen kijken wel serieus naar de mogelijkheden.

Als je een attribuut wil ontvangen van zo'n issuer moet je je eerst op
een of andere wijze authenticeren (bewijzen wie je bent). Vervolgens
kan de issuers bij jou horende attributen in het eigen systeem
opzoeken en aan jou uitgeven.

Als je IRMA app eenmaal een paar attributen heeft kun je die gaan
gebruiken voor transacties. In zulke transacties zal een andere partij
(denk aan een webshop) bijvoorbeeld vragen wat je adres (attribuut)
is. Nadat je daar in de IRMA app expliciet toestemming gegeven hebt
wordt dit attribuut door de app aan de webshop getoond. Via
cryptografische berekeningen kan de webshop controleren dat het
attribuut echt is (en niet verlopen), en ook dat het echt bij jou
hoort (of eigenlijk: bij jouw telefoon). Deze vragende partij, die
attributen van jou wil zien, wordt ook wel de *verifier* genoemd.

Deze verifiers moeten in de IRMA app duidelijk laten zien om welke
attributen ze vragen. Jij, als gebruiker moet expliciet toestemming
geven voor het vrijgeven van die attributen. Zo zie je steeds
duidelijk wie wat van je wil weten. De IRMA app houdt een log bij
zodat je later nog kunt zien wie wat gevraagd heeft en wat je hebt
laten zien. Als partijen buitenproportioneel veel informatie vragen
voor een simpele transactie kun je daarover ook een klacht indienen,
met die loggegevens in de hand, bij de Autoriteit Persoonsgegevens.

Attributen zijn voorzien van een digitale handtekening van de issuer.
Daarmee kan de verifier de echtheid en de herkomst
controleren. Attributen hebben ook een geldigheidsdatum. Als die
verlopen is moeten attributen door de gebruiker ververst worden, door
opnieuw naar de issuer te gaan. Dat werkt net als bij een paspoort,
identiteitskaart, of rijbewijs: op een goed moment is het verlopen, en
heb je een nieuwe nodig. Het verversen van IRMA attributen is echter
veel makkelijker: dat kan gewoon online.

Dit downloaden en tonen van attributen is een natuurlijke vorm van
modern 'identity management'. Het lijkt een beetje op het beheren
van de verschillende apps op een telefoon of tablet.


### <a name="motorkap"></a>4. Wat zit er bij IRMA onder de motorkap?

Met iets meer technische details zal hier uitgelegd worden waarom IRMA
privacy-vriendelijk en goed-beveiligd is. IRMA is gebaseerd op
niet-triviale cryptografie, voor attribuut-gebaseerde credentials.
Deze credentials zijn containers met daarin een aantal attributen,
voorzien van een geldigheidsdatum en een digitale handtekening. De
onderliggende cryptografie is gebaseerd op
[Idemix](http://www.research.ibm.com/labs/zurich/idemix/) dat vanaf
eind jaren negentig bij IBM in Z&uuml;rich is ontworpen.  De
technologie is *open*. Er is uitgebreid over gepubliceerd in de
wetenschappelijke literatuur. Dit geeft vertrouwen.

IBM stelt een eigen implementatie van Idemix gratis beschikbaar.  De
stichting Privacy by Design heeft een eigen onafhankelijke open source
[implementatie](https://credentials.github.io/) die door iedereen
bekeken en gecontroleerd kan worden. Ook dit geeft vertrouwen, niet
alleen in de juiste werking van het system, maar ook om te kunnen
controleren dat er geen stiekeme achterdeurtjes in zitten. Deze eigen
implementatie is gezamenlijk eigendom van de stichting en de Radboud
Universiteit, waar in eerste instantie deze implementatie ontwikkeld
is.

Zoals gezegd worden attributen in groepjes gecombineerd in een
credentials. Bijvoorbeeld, je kunt een credential hebben met de
volgende attributen.

* nationaliteit
* geboorteplaats
* geboortedatum

Zo'n credential kan bijvoorbeeld uitgegeven worden door de gemeente,
of door de rijksoverheid, via mijnoverheid. Je kunt de verschillende
attributen in zo'n credential los van elkaar, maar ook in
verschillende combinaties tonen. In het voorbeeld kun je laten zien
wat je nationaliteit is, zonder te onthullen waar of wanneer je geboren
bent. In het engels heet dit *selective disclosure*.

De partij die credentials uitgeeft heet een *issuer*. Bij de uitgifte
zet de issuer een zogenaamde *blinde* handtekening. Het resultaat
daarvan is dat de issuer na uitgifte van een credential niet kan
nagaan waar dit credentials gebruikt wordt, zelfs niet als de issuer
samenspant met alle webwinkels. De stichting stelt open source
software beschikbaar voor het vervullen van zo'n issuer rol.

De partij die een of meerdere attributen, uit een of meerdere
credentials, controleert heet een *verifier*. Zo'n verifier
controleert een aantal dingen:

* zijn de attributen nog geldig (niet verlopen)
* klopt de digitale handtekening op de credentials, en daarmee de
  integriteit en de authenticteit van de attributen
* indien er meerdere credentials getoond worden: behoren ze tot
  dezelfde persoon.

Ook voor deze verifier rol heeft de stichting open source gratis
software. Een webwinkel kan daarmee zelf attributen controleren.
Kleinere webwinkels zullen misschien liever die controle misschien
liever aan andere partijen uitbesteden, net zoals ze betalingen vaak
uitbesteden. Dat kan ook, maar is minder goed voor de privacy omdat
deze externe controlerende partijen veel attributen te zien krijgen.

Credentials zijn cryptografisch aan de telefoon, en aan elkaar,
gebonden via een geheime sleutel. Die geheime sleutel is cruciaal voor
de beveiliging en dient goed beschermd opgeslagen te worden.  Dat is
moeilijk om op een telefoon te doen, omdat een telefoon ge-root of
ge-hackt kan worden. Daarom wordt de geheime sleutel bij IRMA voor een
klein, maar cruciaal deel buiten de telefoon opgeslagen op een
zogenaamde *keyserver*. De IRMA PIN code wordt door de keyserver
gecontroleerd. Alleen als die PIN klopt, zal de server meedoen.

Deze geheime sleutel is nodig bij iedere IRMA-handeling, zoals het
uitgeven en tonen van attributen. Zolang mijn sleutel bij mij blijft,
kunnen mijn attributen niet door anderen gebruikt worden. Daarmee
zijn attributen niet overdraagbaar.

(Natuurlijk kan iemand zijn telefoon en PIN aan iemand anders geven.
Dat is natuurlijk erg onverstandig. Daarmee kan die ander zich als
jou voordoen, en allerlei nare dingen in jouw naam doen.)

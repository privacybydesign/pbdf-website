---
layout: page
title: IRMA in detail
header:
  image_fullwidth: header_unsplash_1.jpg
permalink: /irma-uitleg
---

Op deze pagina worden de idee&euml;n achter het IRMA systeem
beschreven en ook hoe het systeem is opgezet. De volgende onderwerpen
komen achtereenvolgens aan de orde.

1 [Waar gaat IRMA eigenlijk over?](#onderwerp)

2 [Waarom zou je attributen willen gebruiken in plaats van identiteiten?](#waarom)

3 [Hoe kom ik aan attributen en hoe gebruik ik ze?](#hoe)

4 Wat zit er bij IRMA onder de motorkap?

5 Hoe is IRMA opgezet? Wat is de onderliggende architectuur?

6 Wie zit er achter IRMA?

7 Hoe kan ik meedoen of bijdragen?

Deze vragen zullen hieronder een voor een beantwoord worden.

### <a name="onderwerp">1. Waar gaat IRMA eigenlijk over?</a>

Wanneer je een fles whiskey koopt moet je bewijzen dat je boven de 18
bent. You hoeft niet te vertellen wie je bent. Enkel deze persoonlijke
eigenschap, dat je boven de 18 bent, is genoeg voor de whiskey
aankoop. Zulke persoonlijke eigenschappen worden attributen genoemd.

IRMA is de naam voor een systeem dat precies dit doet. IRMA staat
voor: I Reveal My Attributes. IRMA stelt je in staat om bepaalde
attributen van je zelf wel te laten ("boven de 18"), maar ook om
andere attributen juist niet te laten zien (je naam of
paspoortnummer). IRMA beschermt daarmee je privacy. Maar IRMA biedt
ook bescherming tegen identiteitsfraude: als je bankrekeningnummer of
geboortedatum niet genoemd wordt, kan het ook niet misbruikt worden.

Hieronder staat een lijstje attributen die nuttig kunnen zijn,
bijvoorbeeld bij een webwinkel, bij de overheid, op een webforum, bij
een bank, enz.

* Ik ben een student (of een oudere)

* Ik ben boven de 12 (of 16, of 18, of 21, of 65)

* Ik ben onder de 12 (of ...)

* Mijn nationaliteit is ...

* Mijn geslacht is mannelijk / vrouwelijk

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

Sommige van deze attributen zijn uniek-bepalend: er hoort een unieke
persoon bij. Maar sommige andere attributen kunnen annoniem gebruikt
worden, zonder dat daarbij bekend wordt om wie het precies gaat. Deze
niet-identificerende attributen gelden voor meerdere mensen.

Attributen vormen een natuurlijke manier om bepaalde aspecten van
jezelf te verbergen en anderen juist te laten zien. Er zijn heel veel
scenario's waarin attributen precies de informatie die nodig zijn voor
een transactie.

* Als je mee wil doen met een online chat-box voor minderjarigen, moet
  je aantonen dat je jonger bent dan 15, bijvoorbeeld.

* Wanneer je een gewelddadige game/video/boek online wil kopen moet je
  bewijzen dat je boven de 16 bent, of misschien zelfs boven de 18.

* Als je het "student" attribuut hebt kun je bijvoorbeeld korting krijgen bij de kapper; en als je het "gehandicapt" heb je recht op speciaal vervoer.

* Als je online iets wil kopen moet je je bankrekeningnummer tonen
  voor de betaling, en je adres voor de bezorging. Eventuele korting
  kun je krijgen via een lidmaatschapsattribuut van de webwinkel.

Kortom: IRMA gaat over attribuut-gebaseerde authenticatie: je bewijst
niet zozeer *wie* je bent, maar *wat* je bent.

### <a name="waarom">2. Waarom zou je attributen willen gebruiken in plaats van identiteiten?</a>

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
  zijn. Daarmee wordt openlijk of stiekem profileren tegengegaan.

* Het is flexibel en past in veel verschillende situaties.

* Het geeft de gebruiker werkelijke controle!

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

Attribuut-gebaseerde systemen brengen de bescherming en flexibiliteit
van traditionele systemen terug.


### <a name="hoe">3. Hoe kom ik aan attributen en hoe gebruik ik ze?</a>

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
gewoon een *issuer*. Er kunnen verschillende issuers zijn, zoals:

* de nationale overheid, of een gemeente

* banken en verzekeringsmaatschappijen

* internet service providers, telecom operators

* de Facebook's / Google's / Apple's van deze wereld

* grote of kleine webshops, mogelijk met een eigen klantenkaart (als attribuut)

* etc.

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
veel makkelijker: dat doe je typisch online.

Attributes may expire after some time, or become no longer true (for instance “under 18” may not hold at some stage). Therefor attributes implicitly contain a validity date. Hence you may have to refresh or renew your attributes from time to time. You simply do this by returning to the original Issuer and downloading new/fresh attributes.

This process of downloading and revealing your attributes becomes a new activity in what may be called “personal identity management”. It is a bit similar to maintaining and using personal contacts, or apps.

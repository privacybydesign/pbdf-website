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

<a name="top"></a> Op deze pagina worden de ideeën achter het
IRMA systeem beschreven en wordt ook uiteengezet hoe het systeem werkt
en is opgezet. De volgende onderwerpen komen achtereenvolgens aan bod.

 1. [Waar gaat IRMA eigenlijk over?](#onderwerp)
 2. [Waarom zou u attributen willen gebruiken in plaats van identiteiten?](#waarom)
 3. [Hoe kom ik aan attributen en hoe gebruik ik ze?](#hoe)
 4. [Hoe verschilt IRMA van andere authenticatie systemen als idensys en iDIN?](#architectuur)
 5. [Wat zit er bij IRMA onder de motorkap?](#motorkap)
 6. [Wat zijn attribuut-gebaseerde handtekeningen?](#signature)
 7. [Wat zijn de nadelen van IRMA?](#nadelen)
 8. [Hoe kan ik meedoen of bijdragen?](#meedoen)

Deze vragen zullen hieronder een voor een beantwoord worden.

### <a name="onderwerp"></a>1. Waar gaat IRMA eigenlijk over?

Wanneer u een fles whisky koopt moet u volgens de wet bewijzen dat
u ouder dan 18 bent. U hoeft echter niet te vertellen wie u
bent. Enkel deze persoonlijke eigenschap, dat u ouder dan 18 bent, is
genoeg voor de whisky aankoop. Zulke persoonlijke eigenschappen worden
attributen genoemd.

IRMA is de naam voor een systeem dat precies dit doet. IRMA staat
voor: I Reveal My Attributes. IRMA stelt u in staat om online, via uw
mobiele telefoon, bepaalde attributen van u zelf wel te laten zien
("ouder dan 18"), maar ook om andere attributen juist niet te laten
zien (uw naam of telefoonnummer). IRMA beschermt daarmee uw
privacy. Deze privacy-bescherming zit ingebakken in het systeem, en
wordt daarom ook *privacy by design* genoemd. In de meeste recente
nationale en Europese wetgeving wordt privacy by design vereist voor
nieuwe ICT-systemen.

Naast intrinsieke privacy-bescherming biedt IRMA ook bescherming tegen
identiteitsfraude: als uw bankrekeningnummer of geboortedatum niet
genoemd worden, kunnen ze ook niet misbruikt worden.

Hieronder staat een lijstje attributen die nuttig kunnen zijn,
bijvoorbeeld bij een webwinkel, bij de overheid, op een webforum, bij
een bank, enz.

* Ik ben een student (of een gepensioneerde)
* Ik ben ouder dan 12 (of 16, of 18, of 21, of 65)
* Ik ben jonger dan 12 (of ...)
* Mijn nationaliteit is ...
* Mijn geslacht is ...
* Mijn banknummer is ...
* Mijn huisadres is ...
* Mijn voor/achternaam is ...
* Mijn burgerservicenummer (BSN) is ...
* Mijn verzekeringsnummer is ...
* Mijn email adres is ...
* Mijn mobiele nummer is ...
* Mijn klantenkaart van bedrijf X heeft status brons / zilver / goud
* Mijn treinabonnement is eerste / tweede klas
* etc. etc.

Sommige van deze attributen zijn uniek-bepalend, zoals uw BSN: er
hoort een unieke persoon bij. Maar sommige andere attributen kunnen
anoniem gebruikt worden, zonder dat daarbij bekend wordt om wie het
precies gaat. Deze niet-identificerende attributen gelden voor
meerdere mensen.

Attributen vormen een natuurlijke manier om bepaalde aspecten van
uzelf te verbergen en anderen juist te laten zien. Er zijn heel veel
scenario's waarin attributen precies die informatie leveren die nodig
zijn voor een transactie.

* Als u mee wil doen met een online chat-box voor minderjarigen, moet
  u aantonen dat u jonger bent dan 15, bijvoorbeeld. Of als u mee
  wil doen in een online discussie groep van mensen met een bepaalde
  gevoelige ziekte, kan deze ziekte een attribuut zijn dat anoniem
  toegang geeft tot de groep.
* Wanneer u een gewelddadige game/video/boek online wil kopen moet u
  bewijzen dat u ouder dan 16 bent, of misschien zelfs ouder dan 18.
* Als u het "student" attribuut heeft kunt u bijvoorbeeld korting
  krijgen bij de kapper; en als u het "gehandicapt" attribuut van een
  bepaalde soort heeft, hebt u recht op speciaal vervoer.
* Als u online iets wil kopen moet u uw adres voor de bezorging.
  Eventuele korting kunt u krijgen via een lidmaatschapsattribuut
  van de webwinkel. En eventueel moet u een leeftijdsattribuut laten
  zien als uw aankoop niet voor minderjarigen is. (We nemen even aan
  dat betaling via iDeal gaat, waarvoor de webwinkel geen
  bankrekeningnummer nodig heeft.)

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

[Naar boven](#top)

### <a name="waarom"></a>2. Waarom zou u attributen willen gebruiken in plaats van identiteiten?

Kortweg: attributen beschermen u en stellen u in staat om veel dingen
te doen.

Via een uniek persoonsnummer, zoals een paspoort nummer of een burger
service nummer (BSN), kunnen mensen in veel verschillende situaties
herkend worden en kunnen al hun handelingen in die situaties aan
elkaar gekoppeld worden. Dit heeft veel voordelen, bijvoorbeeld bij
publieke dienstverlening. Maar het kan ook serieuze nadelen hebben,
vooral wanneer dat unieke persoonsnummer door een ander misbruikt
wordt.  Dit heet identiteitsfraude, en is een van de grootste plagen
van het digitale tijdperk.

Wanneer u in plaats van unieke persoonsnummers anonieme attributen
gebruikt voor een transactie, dan speelt uw identiteit helemaal geen
rol en kan daarom ook niet gestolen worden. In die zin bieden
attributen bescherming.

Het gebruik van attributen in plaats van identiteiten heeft nog meer
voordelen.

* Het is privacy-vriendelijk vanwege *data-minimalisatie*. Alleen die
  attributen die relevant en noodzakelijk zijn voor een transactie
  hoeven onthuld te worden.
* Het voorkomt het onderling koppelen van verschillende transacties,
  zolang daar geen uniek-identificerende attributen voor nodig
  zijn. Daarmee wordt openlijk of stiekem profileren tegengegaan, en
  alles wat daarmee samenhangt, zoals prijsdifferentiatie (de prijs die
  u moet betalen hangt af van het profiel dat van u opgebouwd is).
* Het is flexibel en past in veel verschillende situaties.
* Het geeft de gebruiker, in ieder geval bij IRMA, werkelijke controle
  en zicht op wie welke gegevens vraagt!

In veel digitaliseringsprojecten in de afgelopen tientallen jaren zijn
attributen uit het dagelijkse leven vervangen door vaste digitale
identiteiten. Een voorbeeld is de OV-chipkaart. Traditioneel voldeed
een papieren kaartje voor de bus of trein. Daarmee kon je anoniem
reizen, zonder dat centraal vastgelegd werd waarheen u zoal reist en
zonder dat al uw verschillende reizen onderling gekoppeld konden
worden. Nu moet u uw identiteit onthullen om te reizen via het unieke
nummer van een OV-chipkaart. Via zulke kaarten kunnen al uw reizen
bijgehouden en gekoppeld worden, gebruikt worden voor marketing
doeleinden, en mogelijk openbaar worden door een hack of door
slordigheid. Anonieme OV-chipkaarten bieden weinig bescherming, omdat
bij herstel van een fout of geld-teruggave van een verlopen kaart u
toch uw identiteit moet onthullen. Daarmee wordt er een koppeling
gelegd tussen u en al uw eerdere reizen, waarvan u dacht dat ze
anoniem waren.

Attribuut-gebaseerde systemen brengen de traditionele bescherming en
flexibiliteit voor een deel weer terug. Daarnaast bieden ze
bescherming tegen de eventuele nare gevolgen van totale anonimiteit,
omdat u kunt eisen dat deelnemers toch iets van zichzelf onthullen,
bijvoorbeeld dat ze vrouw zijn of onder de 12, in discussiegroepen
speciaal voor vrouwen of voor kinderen.

[Naar boven](#top)

### <a name="hoe"></a>3. Hoe kom ik aan attributen en hoe gebruik ik ze?

In het IRMA eco-systeem worden uw persoonlijke attributen opgeslagen
in de IRMA app op uw eigen telefoon (of tablet). De app heeft een
eigen PIN die nodig is voor het gebruik. Die PIN moet er voor zorgen
dat niemand anders uw attributen in de app kan gebruiken, en zich
daarmee als u voor kan doen. Natuurlijk is het goed als uw telefoon
een eigen inlog patroon of code heeft. Maar daarbovenop heeft de IRMA
app nog weer een eigen PIN, net zo als de verschillende apps voor
mobiel bankieren een eigen PIN hebben.

Attributen die voor u gelden kun je downloaden in uw IRMA app op uw
telefoon. Dat kan via het [web](/uitgifte), bijvoorbeeld door het
scannen van een QR-code, maar dat kan ook ter plekke, bijvoorbeeld aan
een balie. De organisatie die attributen uitgeeft heet een *attribuut
uitgever* of gewoon een *uitgever* (in het engels: *issuer*). Er
zouden verschillende attribuut uitgevers kunnen zijn, zoals:

* de nationale overheid, of een gemeente, voor attributen als: naam,
  adres, geboortedatum, BSN, rijbevoegdheid, categorie van inkomen,
  etc.
* banken en verzekeringsmaatschappijen, voor attributen als: bank- en
  verzekeringsnummers, soort van verzekering, etc.
* internet service providers en telecom operators, voor:
  email-adressen, telefoonnummers en IP-nummers
* de Facebook's / Google's / Apple's van deze wereld, voor login
  gegevens
* grote of kleine webshops, voor eigen klantenkaarten met bijbehorende
  status, coupons, etc.
* bedrijven en andere organisaties, voor attributen ten behoeve van
  verfijnde rol-gebaseerde toegangscontrole
* ziekenhuizen en andere gezondheidsinstellingen, voor regulering van
  toegang niet alleen voor het eigen personeel, maar ook voor
  patiënten
* militaire organisaties, voor al hun verschillende rangen,
  compartimentalisaties, en leden van special forces van wie
  identificerende gegevens niet onthuld worden
* etc.

Op dit moment wordt IRMA helaas nog niet zo breed geaccepteerd en
ondersteund dat al deze partijen zulke attributen ook daadwerkelijk
uitgeven. Maar sommigen van hen kijken wel serieus naar de
mogelijkheden.

Als u als IRMA gebruiker een attribuut wilt ontvangen van zo'n
uitgever moet u zich eerst op een of andere wijze authenticeren
(bewijzen wie u bent). Vervolgens kan de uitgever bij u horende
attributen in het eigen systeem opzoeken en aan jouw IRMA app geven,
voorzien van een digitale handtekening. Concreet: om de attributen van
uw bank in uw IRMA app te krijgen moet u eerst inloggen bij uw bank.

Als uw IRMA app eenmaal een paar attributen heeft kunt u die gaan
gebruiken voor transacties. In zulke transacties zal een andere partij
(denk aan een webshop) bijvoorbeeld vragen wat uw adres (attribuut)
is. Nadat u daar in de IRMA app expliciet toestemming gegeven heeft
wordt dit attribuut door de app aan de webshop getoond. Via
cryptografische berekeningen kan de webshop controleren dat het
attribuut echt is (en niet verlopen), en ook dat het echt bij u
hoort (of eigenlijk: bij uw telefoon). Deze vragende partij, die
attributen van u wil zien, wordt ook wel de *controleur* genoemd.

Deze controleurs moeten in de IRMA app duidelijk laten zien om welke
attributen ze vragen. U, als gebruiker moet expliciet toestemming
geven voor het vrijgeven van die attributen. Zo ziet u steeds
duidelijk wie wat van u wil weten. De IRMA app houdt een log bij zodat
u later nog kunt zien welke controleur wat gevraagd heeft en wat u
heeft laten zien. Als er controleurs zijn die buitenproportioneel veel
informatie vragen voor een simpele transactie kunt u daarover ook een
klacht indienen, met die IRMA loggegevens in de hand, bijvoorbeeld bij
de Autoriteit Persoonsgegevens.

Attributen zijn voorzien van een digitale handtekening van de
uitgever.  Daarmee kan de attribuut controleur de echtheid en de
herkomst controleren. Attributen hebben ook een geldigheidsdatum. Als
die verlopen is moeten attributen door de gebruiker ververst worden,
door opnieuw naar de uitgever te gaan. Dat werkt net als bij een
paspoort, identiteitskaart, of rijbewijs: op een goed moment is het
verlopen, en heeft u een nieuwe nodig. Het verversen van IRMA
attributen is echter veel makkelijker: dat kan gewoon online.

De onderstaande drie plaatjes geven een schematisch overzicht, eerst
van het downloaden van attributen bij een uitgever, en
vervolgens van het gebruik bij verschillende webwinkels.
<hr>
<p align="center"><img src="../images/Transactions_IRMA_voorbereiding.png" alt="IRMA uitgever" style="width: 55%; height: 55%"/></p>
<hr>
<p align="center"><img src="../images/Transactions_IRMA_eerste_gebruik.png" alt="IRMA gebruik" style="width: 50%; height: 50%"/></p>
<hr>
<p align="center"><img src="../images/Transactions_IRMA_enzovoort.png" alt="IRMA gebruik" style="width: 50%; height: 50%"/></p>
<hr>

Dit downloaden en tonen van attributen is een natuurlijke vorm van
modern 'identity management'. Dit soort "regie op gegevens" of
"personal data management" lijkt een beetje op het installeren,
beheren en verwijderen van de verschillende apps op een telefoon of
tablet.

[Naar boven](#top)

### <a name="architectuur"></a>4. Hoe verschilt IRMA van andere authenticatie systemen als idensys en iDIN?

IRMA is wezenlijk verschillend van andere identity management systemen
zoals [idensys](https://www.idensys.nl/) of
[iDIN](http://www.idin.nl).  IRMA heeft een *decentrale*
architectuur. Uw attributen zijn alleen bij u op de telefoon
opgeslagen, en niet centraal op de computer van een of andere
"identity broker". Wanneer u wilt bewijzen dat u ouder dan 18 bent
tegenover een webshop doet u dat met IRMA rechtstreeks met die
webshop, zonder tussenkomst van een "makelaar" of een "broker" of wie
dan ook die hier niks mee te maken heeft. Door deze decentrale
architectuur van IRMA kan dus niet door derde partijen bijgehouden
worden:

* welke attributen u heeft
* waar u die gebruikt
* wanneer u die gebruikt.

Op deze manier biedt IRMA optimale privacy-bescherming, by design.

Ter vergelijking: als u het systeem iDIN van de banken gebruikt voor
authenticatie kan uw bank in principe zien of en wanneer u inlogt bij
een slijter of bij een psychiatrische kliniek. De banken
[beweren](https://www.idin.nl/consumenten) dat ze die informatie niet
voor andere doeleinden zullen gebruiken, bijvoorbeeld bij beslissingen
of u wel of niet een hypotheek krijgt. De decentrale architectuur van
IRMA zorgt ervoor dat dit soort lastige vraagstukken helemaal niet
optreden.

Bij [idensys](https://www.idensys.nl/) spelen dezelfde privacy
problemen als bij iDIN: u moet eerst een inlogmiddel kopen bij een
[leverancier](https://www.idensys.nl/inloggen-met-idensys/inlogmiddel-aanvragen/leveranciers-inlogmiddelen)
en u kunt daarna alleen maar via die leverancier online inloggen. Die
leverancier komt dus ook precies te weten wanneer u waar inlogt.

Het IRMA systeem heeft niet zulke "privacy hotspots". IRMA vereist wel
dat er enige coördinatie is over hoe attributen en credentials
georganiseerd worden en welke (publieke) cryptografische sleutels waar
voor nodig zijn. Deze coördinerende rol wordt vervuld door de
stichting Privacy by Design. De stichting kan echter op geen enkele
manier zien wie welke attributen waar gebruikt.

Het verschil tussen een decentrale (IRMA) en centrale (niet-IRMA)
opzet wordt hieronder nog eens beschreven.
<p align="center"><img src="../images/Transactions_all_lowres.png" alt="overzicht" style="width: 100%; height: 100%"/></p>

Duidelijk is dat in de niet-IRMA opzet de uitgever van attributen een
"privacy hotspot" is die bij alle transacties een vinger in de pap
heeft. Met IRMA toont u zelf uw eigen attributen, net zo als u zelf
uw eigen paspoort kunt tonen, zonder bemoeienis van iemand anders.
Dat is een heel fundamenteel verschil.

Uit de niet-IRMA plaatjes blijkt ook dat een kwaadaardige uitgever in
principe kan doen alsof hij u is, zonder dat u dat tegen kunt
houden. U hebt in deze opzet geen volledige controle over het gebruik
van uw gegevens.

De stichting monopoliseert niet. Het IRMA systeem is open (source) en
gratis beschikbaar en in principe voor iedereen te gebruiken. Ook
andere partijen kunnen de coördinerende rol van de stichting
vervullen.

De openheid van IRMA is belangrijk voor brede acceptatie. Er is geen
sprake van commerciële "lock-in" en ook niet van afgedwongen
vertrouwen. Iedereen kan en mag zien hoe IRMA werkt.

Het IRMA systeem sluit commerciële verdienmodellen zeker niet
uit.  Maar deze commerciële activiteiten moeten *bovenop* een
open infrastructuur plaatsvinden, en niet daarbinnen. De
internetprotocollen als TCP en IP zijn ook open, en vormen ook de
basis voor commerciële activiteiten die gebruik maken van de open
internet infrastructuur.

IRMA en idensys/iDIN kunnen goed naast elkaar bestaan. IRMA is het
best te gebruiken voor toepassingen waar privacy een (grote) rol
speelt, of waar je meer attributen nodig hebt dan de paar basis
attributen die door idensys/iDIN geleverd kunnen worden. IRMA kan ook
goed met "tijdelijke" attributen omgaan, zoals bijvoorbeeld een
toegangskaartje voor een concert dat u online koopt. Zo'n kaartje kunt
u dan als attribuut downloaden, bij de ingangscontrole van het concert
tonen, en daarna uit uw telefoon verwijderen.


[Naar boven](#top)

### <a name="motorkap"></a>5. Wat zit er bij IRMA onder de motorkap?

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

[Naar boven](#top)

### <a name="signature"></a>6. Wat zijn attribuut-gebaseerde handtekeningen?

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


[Naar boven](#top)


### <a name="nadelen"></a>7. Wat zijn de nadelen van IRMA?

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



[Naar boven](#top)

### <a name="meedoen"></a>8. Hoe kan ik meedoen of bijdragen?

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

[Naar boven](#top)

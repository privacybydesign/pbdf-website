---
layout: page
title: Van start met de IRMA app
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
permalink: /irma-begin/
---
Deze pagina bevat twee onderdelen:

 1. [Wat je moet doen om met IRMA van start te gaan](#vanstart)
 2. [Een uitleg van wat er op de achtergrond gebeurt](#achtergrond)

Het tweede punt is helemaal niet nodig voor het eerste; het geeft
alleen aanvullende achtergrond informatie voor mensen die meer van
IRMA willen begrijpen.

### <a name="vanstart"></a>1. Wat je moet doen om met IRMA van start te gaan.

Hieronder wordt in vier stappen verteld wat je moet doen om de IRMA
app te kunnen gebruiken. Deze stappen zijn: installatie, registratie,
personalisatie, en (eerste) gebruik. Ga hier even rustig voor zitten.
Deze stappen kosten een klein beetje tijd en aandacht. Je gaat nu een
persoonlijke elektronische identiteit van jezelf maken die je nog lang
kunt gebruiken. Dit lijkt een beetje op het verkrijgen van een
paspoort.  Maar zo'n paspoort kost heel veel meer moeite, bijvoorbeeld
omdat je ervoor naar het gemeentehuis moet gaan. Net als een paspoort
is het ook IRMA echt persoonlijk: het is niet de bedoeling dat iemand
anders er gebruik van kan maken.

#### 1. Installatie

De IRMA app is beschikbaar in de [Android Play
store](https://play.google.com/store/apps/details?id=org.irmacard.cardemu).
Download en installeer deze app.

(De IRMA app is tot nu alleen maar beschikbaar voor Android telefoons
en tablets; aan een iOS versie voor iPhones en iPads wordt nog
gewerkt.)

#### 2. Registratie

Open de IRMA app. Als je dit voor de eerste keer doet, wordt je
gevraagd om twee dingen in te typen:

 * je email adres
 * een PIN code van 5 cijfers

Het email adres wordt gebruikt om contact met je te houden over jouw
gebruik van IRMA. Het adres wordt niet met anderen gedeeld. Je zal
maar heel af en toe een berichtje op dit adres krijgen. Gebruik wel
een adres dat echt van jou is en dat je nog lang zult gebruiken. Je
krijgt direct een eerste mailtje op dit adres met een link voor de
bevestiging. Hiermee wordt gecontroleerd of het adres wel echt van jou
is.

Dit email adres kun je later eventueel nog veranderen.

Denk even goed na voordat je de PIN code kiest. Je zult deze code
regelmatig nodig hebben bij het gebruik van IRMA. Deze code garandeert
dat jij echt degene bent die IRMA gebruikt. Als je de code ergens
opschrijft, doe dat dan zorgvuldig op een speciale plaats (of manier)
zodat anderen er niet snel bij kunnen.

Het veranderen van de PIN code kan wel, maar is moeilijk en vereist
extra registratie stappen. Als je die stappen niet zet en je raakt je
PIN kwijt, dan moet je je opnieuw voor IRMA registreren en gaan al je
tot dan toe verzamelde attributen verloren.

#### 3. Personalisatie

In deze derde stap kun je de eerste eigen attributen in je IRMA app
zetten. Het eerste attribuut is het email adres dat je opgegeven hebt
in de registratie stap. Vervolgens biedt de IRMA app je verschillende
mogelijkheden om nog meer attributen op te nemen in de app. Dit
lijstje mogelijkheden ligt niet vast en zal groeien naarmate meer
partijen aan IRMA meedoen.

 * iDIN: inloggen met je bank middelen. Hiermee kun je je naam, adres,
   woonplaats, en geboortedatum attributen in je IRMA app zetten. Deze
   gegevens komen van je eigen bank. Dit is beschikbaar voor iedereen
   met een persoonlijke (niet-gedeelde) bankrekening in Nederland, zie
   [iDIN](https://www.idin.nl).
 * Surfconext: inloggen met je hoger onderwijs identiteit. Deze is in
   principe beschikbaar voor studenten en medewerkers van instellingen
   voor onderwijs en onderzoek in Nederland die aangesloten zijn op
   [Surfconext](https://www.surfconext.nl). Je eigen instelling moet
   IRMA toegang wel expliciet goedkeuren. Via Surfconext kunnen
   "onderwijs attributen" in je IRMA app gezet worden.
 * ...


#### 4. Eerste gebruik

Op dit moment kun je het tonen van attributen uitproberen op de
volgende eigen [test](??) pagina van de stichting. Daar wordt je om je
email adres gevraagd en kun je via de IRMA app het adres tonen dat je
(zojuist) bij registratie opgegeven hebt. Een webwinkel zou dit
attribuut op een zelfde manier aan je kunnen vragen.

Op de website van de [*keyshare* server](??) van de stichting Privacy by Design
kun je een log inzien van recente transacties die je IRMA app heeft uitgevoerd.
Je logt in op deze server door je email adres attribuut te tonen. Ook kun je
hier je IRMA app blokkeren wanneer bijvoorbeeld je telefoon is gestolen.
De attributen in je IRMA app zijn dan onbruikbaar, zelfs als de dief je PIN
zou weten, totdat je je IRMA app weer deblokeert. Je kunt ook je registratie
helemaal ongedaan maken. Jouw gegevens worden dan verwijderd uit de server,
en je attributen zijn dan permanent onbruikbaar.

De IRMA app zal iedere keer dat je attributen ontvangt, toont, of gebruikt
om een attribuut-gebaseerde handtekening te maken om je PIN vragen.
Alleen als de correcte PIN ingevoerd wordt kun je je attributen gebruiken.
Wanneer drie keer een foute PIN ingevoerd wordt, wordt je IRMA app automatisch
geblokkeerd. Voordat je je attributen dan weer kunt gebruiken moet je eerst
inloggen op de *keyshare* server en daar je app deblokkeren.

### <a name="achtergrond"></a>2. Uitleg van wat er op de achtergrond gebeurt.

De tekst hieronder gaat dieper in op wat er onder de motorkap gebeurt
wanneer je jezelf via de IRMA app registreert. Deze achtergrond
informatie is niet nodig voor het daadwerkelijke gebruik van IRMA,
maar is bedoeld voor mensen die technisch geinteresseerd zijn en
willen weten hoe de zaken opgezet zijn en hoe beveiliging en privacy
bescherming in IRMA georganiseerd zijn.

Een eerste uitgangspunt is dat de IRMA app strikt persoonlijk is en
niet makkelijk door een ander misbruikt moet kunnen worden. Dit
gebeurt via een persoonlijke PIN code. Natuurlijk kun je je telefoon
met eigen attributen in een IRMA app tezamen met de PIN aan iemand
anders geven.  Dat is net zo onverstandig als je bankpas met PIN aan
een ander geven.  Daar is geen beveiligingsmechanisme tegen
opgewassen.

We gaan er dus van uit dat IRMA gebruikers hun PIN geheim houden. De
vraag is dan: waar is de PIN opgeslagen? Hetzelfde geldt voor de
geheime persoonlijke cryptografische sleutel die nodig is om de
IRMA app voor jou te laten werken.

De IRMA implementatie gebruikt een "truuk", waarbij zulke cruciale
geheime informatie verdeeld wordt tussen de app en een server van de
stichting, de zogenaamde *keyshare server*. De app en de server moeten
heel precies samenwerken om IRMA te laten werken. Ze hebben daar ieder
alleen niet genoeg informatie voor: ze moeten samenwerken en hun
geheimen bij elkaar leggen.

De server kan zich in zijn eentje dus nooit als jou voordoen: daar is
jouw app op jouw telefoon voor nodig. Wel kun je op de server zien
wanneer en hoe vaak jouw IRMA app gebruikt is (maar niet waar, en met
welke attributen). Als je telefoon gestolen is, of als je denkt dat er
iets niet klopt, kun je het gebruik van de IRMA app stil leggen via de
server: je kunt de server vertellen niet meer mee te doen, waardoor
de IRMA app op de telefoon het niet meer doet.

Kortom: de *keyshare* server biedt jou extra bescherming en controle
mogelijkheden, maar kan zelf niks alleen doen -- behalve blokkeren. De
stichting Privacy by Design beheert een *keyshare* server om het
gebruik van IRMA mogelijk te maken. Andere partijen kunnen in
principe ook een *keyshare* server draaien.

De *keyshare* server speelt ook een beschermende rol bij het gebruik
van je PIN. Het is in het algemeen onverstandig als een PIN in een app
opgeslagen wordt, omdat die eruit gehaald zou kunnen worden als een
telefoon gehackt wordt.  De IRMA app slaat de PIN dus niet op, maar
wel een willekeurig groot getal dat een *nonce* genoemd wordt. De
*keyshare* server weet ook jouw PIN niet, maar krijgt bij registratie
de hash waarde *hash( PIN | nonce )*.  Hieruit is de PIN niet af te
leiden.

Wanneer je op je app inlogt met je PIN, berekent de app dit (grote)
getal *hash( PIN | nonce )*, stuurt deze hash waarde naar de server,
en verwijdert de PIN uit het eigen geheugen. Als de hash waarde klopt,
zijn de app en de server onderling gekoppeld en is de inlog geslaagd.
Een succesvolle aanvaller kan eventueel wel de nonce uit je app halen,
maar heeft daar niet zo veel aan. Het enige wat de aanvaller kan doen
is alle 100.000 mogelijkheden van je PIN uitproberen, en als bij
iedere poging *X* het getal *hash( X | nonce )* naar de server
sturen. De server ziet dan dat zoiets geprobeerd wordt en sluit het
account tot nader orde. In dat geval krijgt de eigenaar via het
registratie email adres een waarschuwing.

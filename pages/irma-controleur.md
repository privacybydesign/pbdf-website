---
layout: page
title: Gebruikers laten inloggen op mijn webpagina met IRMA
meta_title: IRMA controleur
teaser: Ik heb een webpagina waarop ik mijn klanten wil laten inloggen. Hoe kan dat met IRMA? Wat moet ik daar voor doen? En waar zitten de kosten? 
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
permalink: /irma-controleur/
language: nl
translations:
  en: /irma-verifier
---

<a name="top"></a> Stel u heeft een eigen webpagina, bijvoorbeeld van
een webwinkel of van een dienstaanbieder, en u wilt iets van uw
gebruikers weten voordat ze bij u binnenkomen. Dit "iets" kan bestaan
uit een emailadres of een (mobiel) telefoonnummer, of een huisadres,
of een minimum leeftijd, of een klantnummer. Zulke persoonlijke
eigenschappen worden attributen genoemd. IRMA is een middel waarmee
gebruikers op betrouwbare wijze aan u kunnen bewijzen wat die
persoonlijke attributen zijn.

De stichting Privacy by Design heeft IRMA software ontwikkeld waarmee
u zulke attributen kunt controleren. Deze software is open source en
gratis beschikbaar. In principe is het integreren van de gratis IRMA
(verificatie) software in uw eigen webpagina het enige wat u hoeft te
doen om IRMA te kunnen gebruiken.

In de praktijk komt er iets meer bij kijken. Hieronder wordt een
aantal onderwerp besproken die specifiek gericht zijn op het
controleren van IRMA attributen. Algemene uitleg over
IRMA staat [elders](/irma-uitleg).

 1. [Welke attributen kan ik controleren van mijn gebruikers?](#welkeattributen)
 2. [Hoe zet ik IRMA op mijn webpagina?](#software)
 3. [Kan ik ook zelf attributen uitgeven aan mijn klanten?](#uitgeven)
 4. [Hoeveel kost het gebruik van IRMA?](#kosten)
 5. [Welk betrouwbaarheidsniveau biedt IRMA?](#niveau)
 6. [Is de stichting gecertificeerd? Welke garanties worden geboden?](#certificatie)

Deze vragen zullen hieronder een voor een beantwoord worden.

### <a name="welkeattributen"></a>1. Welke attributen kan ik controleren van mijn gebruikers?

In principe kunt u zelf kiezen welke attributen u wilt controleren om
een gebruiker te authenticeren.  Een praktische voorwaarde is dat
gebruikers de attributen die u wil controleren wel zelf ergens kunnen
krijgen. De stichting Privacy by Design geeft gebruikers de
mogelijkheid om na registratie een aantal attributen in hun IRMA app
te laden. Die kunt u vervolgens controleren.

Het is de verwachting dat dit aanbod van attributen in de toekomst zal
groeien. Ook andere partijen dan de stichting kunnen attributen
uitgeven. Misschien u zelf wel, zie [hieronder](#uitgeven).

In de huidige beginfase zal het vooral gaan om simpele attributen als
naam, emailadres, telefoonnummer, huisadres, leeftijdsgrenzen (boven
de 16, of 18, of 65), student. Dit kan al heel nuttig zijn in
verschillende situaties, bijvoorbeeld om bepaalde groepen gebruikers
(studenten, ouderen) korting te kunnen geven -- en zo aan u te
binden. Maar ook om zekerheid te krijgen over een afleveradres.

Als u een attribuut wil controleren dat een bepaalde gebruiker niet
heeft -- of dat verlopen is -- kunt u de gebruiker doorverwijzen naar
een webpagina waar dat attribuut te verkrijgen is. Na het ophalen van
dat attribuut kan de gebruiker alsnog bij u inloggen.

U heeft de mogelijkheid om allerlei attributen te vragen. Maar let op:
uw klanten moeten er bij het inloggen expliciet mee akkoord gaan om u
die attributen te laten zien. Als u te veel, niet-relevante of
niet-noodzakelijke, attributen vraagt schrikt u (potentiële) klanten
af. Een belangrijk idee achter IRMA is dat bij het inloggen alleen om
de strikt noodzakelijke attributen gevraagd wordt. Privacywetten eisen
*data minimalistie* en *doelbinding*, waarbij u alleen die gegevens
van uw klanten mag verwerken die strikt noodzakelijk zijn voor de
dienst die u biedt.

[Naar boven](#top)

### <a name="software"></a>2. Hoe zet ik IRMA op mijn webpagina?

Alle software voor het controleren van IRMA attributen is open source
en gratis voor iedereen [beschikbaar](https://credentials.github.io/).
Er zijn verschillende mogelijkheden om daar gebruik van te maken.

 * Als u zelf handig bent met ICT, of zulke mensen hebt in uw
   organisatie, kunt u de software zelf op eigen computers installeren
   en in uw webpagina integreren.

 * Als uw webpagina door een extern bedrijf gemaakt en beheerd wordt
   kunt u dat bedrijf vragen deze IRMA integratie voor u te doen.

 * Mogelijk komen er binnenkort commerciële partijen die het
   controleren van IRMA attributen als dienst aan gaan bieden.

 * In het bijzonder zullen misschien bestaande *Payment Service
   Providers* deze attribuut-controle diensten gaan aanbieden, samen
   met hun bestaande betalingsverwerkingen.

De stichting Privacy by Design zal zelf geen attribuut-controle
diensten aanbieden. De stichting richt zich op het beheer van de IRMA
infrastructuur, en op het uitgeven van een basisset van attributen.
De stichting kan in de huidige beginfase wel advies geven, maar zal
daarvoor kosten in rekening brengen. Voor meer informatie kunt u
[contact](/contact) opnemen.

Kortom, IRMA is in principe gratis te gebruiken, als u tenminste alles
zelf wil doen.


[Naar boven](#top)

### <a name="uitgeven"></a>3. Kan ik ook zelf attributen uitgeven aan mijn klanten?

Stel u wil uw klanten eigen attributen geven, horend bij uw eigen
organisatie, bijvoorbeeld in de vorm van een lidmaatschapsnummer, of
van een bepaalde loyalty status, zoals brons, zilver, goud, platina,
enz. Dit is mogelijk, maar vraagt enige voorbereiding.

De stichting Privacy by Design beheert de IRMA infrastructuur. Een
belangrijk onderdeel daarvan is het register van mogelijke
attributen. Dit register moet op eenduidige, transparante manier
vastliggen, zodat iedere gebruiker de betekenis van de verschillende
attributen kent. Nieuwe attributen moeten hierin opgenomen
worden. Daarvoor is [contact](/contact) met de stichting
noodzakelijk. Voor (voortgezette) registratie van nieuwe attributen
zal de stichting kosten in rekening brengen.

Is dit eenmaal geregeld, dan zijn er verschillende mogelijkheden om
daadwerkelijk attributen uit te geven. Daarbij moeten attributen aan
gebruikers toegekend worden, voorzien van een digitale handtekening.
Ook hiervoor is open source software gratis beschikbaar. Er zijn
weer verschillende mogelijkheden.

 * U kunt dit zelf doen, indien u voldoende ICT-kennis in huis heeft.

 * U kunt een overeenkomst met de stichting Privacy by Design sluiten,
   waarbij de stichting de nieuwe attributen uitgeeft -- net zoals de
   stichting nu al een aantal attributen uitgeeft.

 * Mogelijk ontstaan er dienstverleners die deze uitgifte van
   attributen op commerciële basis voor anderen verrichten.


[Naar boven](#top)


### <a name="kosten"></a>4. Hoeveel kost het gebruik van IRMA?

Vooralsnog is het gebruik van IRMA gratis, zowel voor gebruikers als
voor controleurs (zoals webwinkels). Wel zijn er natuurlijk kosten
gemoeid met het aanpassen en onderhouden van de eigen webpagina's om
IRMA te kunnen gebruiken. Die kosten zijn afhankelijk van wie het werk
(op welke wijze) doet.

De stichting Privacy by Design heeft geen winstoogmerk. Wel is het
belangrijk voor grootschalig gebruik van IRMA dat de stichting over
stabiele inkomsten kan beschikken. Zoals hierboven beschreven zijn er
verschillende kosten die de stichting in rekening brengt (advies,
uitgifte van attributen, aanpassing van de software). Daarnaast is de
stichting afhankelijk van subsidies en ondersteuning van derden.

[Naar boven](#top)


### <a name="niveau"></a>5. Welk betrouwbaarheidsniveau biedt IRMA?

Binnen het vakgebied *identity management* worden verschillende
betrouwbaarheidsniveaus van authenticatie onderscheiden, zoals "laag",
"midden", "substantieel" en "hoog". Binnen IRMA is het lastig om zulke
niveaus aan te brengen omdat ze van veel factoren afhangen, zoals
bijvoorbeeld het manier van authenticatie voorafgaand aan uitgifte.
Wat is bijvoorbeeld het betrouwbaarheidsniveau van een email attribuut
dat via een bevestigingslink toegekend is?

Om deze reden hanteert IRMA niet zulke betrouwbaarheidsniveaus. Iedere
controleur (webpagina) kan zelf bepalen welke attributen hij wel of
niet accepteert. Een controleur kan bijvoorbeeld wel een "ouder dan
18" attribuut accepteren dat door de stichting is uitgegeven, maar
niet een "ouder dan 18" attribuut dat door zeg Facebook uitgegeven is.

[Naar boven](#top)

### <a name="certificatie"></a>6. Is de stichting gecertificeerd? Welke garanties worden geboden?

De stichting Privacy by Design is *niet* gecertificeerd, bijvoorbeeld
volgens de ISO 27010 norm. Daar is de stichting nog te klein voor (en
niet kapitaalkrachtig genoeg). Het is wel de bedoeling dat de
stichting op enig moment in de toekomst, bij uitgebreider gebruik van
IRMA, gecertificeerd zal worden.

Op dit moment biedt de stichting haar operationele diensten gratis,
als "best effort" aan. De stichting biedt geen garanties en accepteert
in dit stadium geen aansprakelijkheid voor zaken die mogelijk misgaan
bij het gebruik van IRMA. De stichting probeert gerapporteerde
problemen zo snel mogelijk te verhelpen. De verantwoordelijkheid voor
het gebruik van IRMA ligt geheel bij de gebruiker (de drager van
attributen in de IRMA app), bij de controleur van attributen en bij de
eventuele uitgever van eigen attributen (niet zijnde de stichting).

[Naar boven](#top)

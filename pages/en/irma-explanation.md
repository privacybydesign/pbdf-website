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
---

<a name="top"></a> This page explains the ideas behind the IRMA
system.  It also explains how the system works and has been
designed. The following topics will be discussed.

 1. [What is IRMA all about?](#topic)
 2. [Why would you wish to use attributes instead of identities?](#why)
 3. [How do I obtain and use attributes?](#how)
 4. [How does IRMA differ from other authentication systems?](#architecture)
 5. [How does IRMA work under the hood?](#hood)
 6. [Which values does the IRMA technology embody?](#values)
 7. [What are attribute-based signatures?](#signature)
 8. [What are IRMA's disadvantages?](#disadvantages)
 9. [How can I participate or contribute?](#contribute)

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

Apart from instrinsic privacy-protection, IRMA also protects against
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


### <a name="architecture"></a>4. How does IRMA differ from other authentication systems?

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
identity management system: they can not only build up and sell
profiles of all users --- who logs in where and when with which data
--- but they can also charge the relying party for each authentication
action, precisely because they are in the middle, and all
communication goes through their systems.

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
is a *privacy hotspot* who facilitates and sees all
transactions. Moreover, in the centralised architecture a (malicious)
issuer can completely take over your identity and impersonate you. You
have no way to stop this, or even notice it --- until possibly later
when you are confronted with the consequences. In the decentralised
IRMA set-up you have genuine control over the usage of your own
attributes: you directly disclose your own attributes yourself, every
time only after explicit consent, without (unnecessary) interference
of third parties.  This is similar to the way you can disclose your
(physical) passport yourself, without dependence on others.

In the IRMA system there are no such *privacy hotspots*. At a
meta-level, IRMA does involve some level of coordination about how
attributes and credentials are organised and which cryptographic
(public) keys are needed at which stage. This coordinating role is
fulfilled by the Privacy by Design foundation. But: the foundation can
not see at all which attributes are used where.

The Privacy by Design foundation does not monopolise IRMA and its
technology. The software is open source and is freely available, for
everyone to use. Also other parties can play the coordinating and/or
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
of trust in central storage among users. IRMA can also handle
"temporary" attributes, like an entry ticket for a concert, containing
the name, date and location of the concert. In principle, you can buy
such a ticket online and download it as attribute to your IRMA app. At
the entrance of the concert you can disclose the ticket for
verification, and subsequently delete it from your phone. (Such
tickets are strictly personal non-transferrable, because they are
cryptographically connected to your own personal IRMA app.)

A subtle point is wheter IRMA outperforms centralised architectures
since such architectures intrinsically have a single-point-of-failure;
if it goes down all authentication is disabled. In fact, IRMA also
involves a small central *keyshare* component, as will be explained in
more detail [next](#hood), so that users can inspect and disable their
usage, if needed. This central component plays a role in each
attribute disclosure and issuance. Hence it is a
single-point-of-failure too.


[To the top](#top)


### <a name="hood"></a>5. How does IRMA work under the hood?

This section overlaps to some extent with the
[explanations](/irma-start) for getting started with IRMA, especially
its last part about [registration](/irma-start/#hood).

Technical details of IRMA will be given below, explaining why IRMA
works in a privacy-friendly and secure manner. IRMA is based on
non-trivial cryptography for attribute-based credentials. These
credentials are containers for attributes, equipped with an expiry
date and a digital signature, produced by the issuer.  The underlying
cryptography is based on
[Idemix](http://www.research.ibm.com/labs/zurich/idemix/), which has
been developed since the late nineties at IBM Zürich. The technology
is *open* and has been published in the scientific literature. This
contributes to confidence.

IBM has made its only implementation of Idemix publicly available,
free of charge. The Privacy by Design foundation has developed its
own, different, independent, open source [IRMA
implementation](https://credentials.github.io/). The rights on this
IRMA implementation are jointly in the hands of the foundation and
Radboud University --- where the initial parts of the implementation
were developed.

As mentioned, individual IRMA attributes are combined in a credential.
For instance, you can have a credential containing the following
attributes.

* nationality
* place of birth
* date of birth.

Such a credential may for instance be issued by the (local or
national) authorities. You, as user, can decide, per transaction, to
disclose any subset of these attributes. In the above example, you can
for instance disclose your nationality, without revealing where or
when you were born. This is *selective disclosure* property is the
basis of IRMA's privacy by design.

The party that offers such credentials according to the IRMA protocols
is called an *issuer*. During the issuing process, the issuer puts
a so called *blind* digital signature on the credential. This has
two important consequences.

1. By checking this signature, verifiers can check the origin and
   integrity of the credential. The latter means that they can check
   that no-one has tampered with the (contents of the) credential.
2. By the *blindness* of the signature, issuers do not see the
   ultimate form of the signed credential, and hence can not trace its
   usage, even if the issuer colludes with verifiers. This property is
   called *issuer unlinkability*.

The Privacy by Design foundation has freely available open source
[software](https://credentials.github.io/) for issuing credentials.

The party that checks one or more attributes, from one or more
credentials, is called a *verifier* (or sometimes also *relying
party*). Such a verifier checks a number of things:

* whether the attributes are still valid (not expired)?
* is the digital signature valid, so that the origin (authenticity)
  and integrity of the credential is guaranteed?
* do the attributes come from an issuer that the verifier trusts
  sufficiently? For instance, a verifier may trust a name attribute if
  it has been issued by national authorities, but not when it has been
  issued by Google, say.
* when attributes are disclosed from different credentials: do they
  belong to the same person?

The Privacy by Design foundation has freely available open source
[software](https://credentials.github.io/) also for this verifier
role.  It allows a webshop, or other organisation, to verify
attributes from its customers, see the [more detailed
explanations](/irma-verifier) elsewhere. Small webshops may wish to
outsource such attribute verifications to third parties, just like
they often outsource payment processing. This is possible, but is not
ideal for privacy, since these external verifiers see many
attributes. Such a third party may offer IRMA attribute verification
as a commercial service.

Credentials are cryptographically bound to a mobile phone, and to each
other, via a personal secret cryptographic key. This private key is
crucial for the security of the IRMA app; it must be stored securily.
Such secure local storage is difficult on a mobile phone, since the
device may be rooted or hacked. That is why a small but crucial part
of this private key is stored outside the phone on a so-called
*keyshare-server* that is operated by the Privacy by Design
foundation. The IRMA PIN code is checked by the keyshare server, see
the [more detailed explanations](/irma-start/#hood) elsewhere.  Only
when the PIN checks out, will the server participate with its own
small part of the secret personal key, and can attributes be
disclosed. The keyshare sever will not see the attributes themselves,
nor to whom they are disclosed.

This entire secret personal cryptographic key, and thus the
cooperation of the keyshare server, is necessary for each IRMA
operation, such as receiving and disclosing of attributes. As long as
my key stays under my control, my attributes cannot be used by
others. Thus, my attributes cannot be transferred to other user IRMA
users --- unless I somehow also transfer my secret key.


[To the top](#top)


### <a name="values"></a>5. Which values does the IRMA technology embody?

Authentication requirements, and information flows, reflect the power
relations in society.  In general, the more powerful parties impose
authentication requirements and mechanisms on the less powerful
parties. The Privacy by Design foundation is well aware of these
societally important issues and aims to use value-laden design in
offering IRMA as a transparant open ecosystem for proportional and
contextual authentication that empowers, instead of weakens,
users. This context-dependence is related to [Helen
Nissenbaum](http://www.nyu.edu/projects/nissenbaum/)'s interpretation
of privacy as contextuele integrity.

IRMA works via freely available open source software. Everyone can
inspect and judge how it works. This contributes to confidence, not
only in the proper functioning of the IRMA system, but also in order
to check that there are no hidden backdoors in the system.  Such
transparancy is essential for broad voluntary usage and acceptance of
sensitive ICT-infrastructure, like for authentication. With IRMA there
is no commerical lock-in, and there is no extorted trust. Even if the
foundation somehow goes down, the IRMA software will still be there
and can be maintained and continued by others.

Thus, IRMA is not about plundering or deceiving users, or about
surreptitiously steering them commercially or politically, but about
encountering them transparantly, with dignity, respecting their
autonomy.

IRMA is based on properties of individuals (attributes) whose source
is explicitly visible, namely in the form of the issuer who commits
itself via digitial signatures to the validity of these attributes.
IRMA is thus about "objective" properties and qualifications of people,
where the objectivity lies in the verifiable origin of attributes.
In this way IRMA distinguishes itself from "subjective" reputation-based
systems, in which qualifications can be manipulated relatively
easilty and their origin is seldomly transparent.

IRMA does not exclude commercial activities surrounding
authentication. But these commercial activities work best *on top of*
an open basic infrastructure, and not in its core.  Internet protocols
like TCP and IP are also open, and form the basis for the succes of
the internet, together with all the commercial transactions that run
on top of TCP/IP.


[To the top](#top)


### <a name="signature"></a>7. What are attribute-based signatures?

IRMA is primarily a system for attribute-based authentication: with
IRMA you can selectively disclose attributes about yourself. But IRMA
offers more, namely attribute-based digital signatures. This is still
in an experimental phase.

With a *traditional* "wet" signature a signer agrees to the content of
a signed document. Such a traditional signature typically includes
the name of the signer, the date/time of signing, and the signer's
handwritten "scribble".

A *digital* signature is an addition that is attached to a digital
document that can be generated exclusively with the personal
(cryptographic) key of the signer. This personal *private* key is
strongly bound to an individual via a certificate that contains the
associated public key. Digital signatures that satisfy certain
requirements have a legal status.

A big disadvantage of both tranditional and current digital signatures
is that they give very little information about who precisely signs,
in which capacity.

An attribute-based signature is a special digital signature in wich
the attachment to the document securely contains a number of
attributes of the signer. These attributes are visible to everyone who
checks the signature. In this way you can see for instance that a
written account of ilness has actually been signed by a medical
doctor, via the "medical doctor" attribute, possibly combined with the
signer's medical specialisation. Another example is a request from a
citizen to the authorities, say about some permit, which is signed
with the citizen's own national registration number included as
attribute. In this way the authorities recognise that the request
really comes from a particular citizen. Also payment orders can be
realised via attribute-based signatures, by including the bank account
number of the signer as attribute in the signature.

Attribute-based signatures are supported by the IRMA software, but for
the time being only in experimental form. This form still has to
crystallise into applications. Attribute-based signatures form a novel
concept with unprecented application possiblities.

[To the top](#top)


### <a name="disadvantages"></a>8. What are IRMA's disadvantages?

The most important advantage of IRMA is: the user maintains and fully
controls his/her own attributes. But this is at the same time a
disadvantage: an IRMA user will have to do this actively.  This
requires some effort, and also some level of understanding how IRMA
works and what has to be done.

Your identity is a very valuable asset, which you have to handle with
care in the digital world. This is something we still have to learn
collectively. With IRMA it becomes transparent which of your
attributes are requested where. You first have to load those
attributes into the IRMA app on your mobile phone. And when these
attributes expire, you will have to renew them. And when you replace
your phone itself, you will have to reload all your attributes into
(the IRMA app on) your new device. All of this is a "hassle", which is
part of careful dealing with your digital identity. IRMA puts you in
control and helps you to handle your digital identity with the same
care that you have for your passport.

These are (possible) disadvantages for users. A "system" disadvantage
is that the traditional intermediary way of making money does not work
with IRMA: users cannot be profiled by attribute issuers, and there
are no third parties that have to be payed for each authentication
session, see [above](#architecture). For IRMA users this may actually
be an advantage.

However, the IRMA ecosystem is economically viable. Issuance and
verification of attributes may form a commercial service, which can be
performed by third parties. Also, the Privacy by Design foundation may
issue certain specialised credentials for a fee. Possibly, in order
to maintain its activities in the long-term future, the foundation may
start charging IRMA users, for instance a couple of Euros per year,
for a basic set of attributes.


[To the top](#top)

### <a name="contribute"></a>9. How can I participate or contribute?

IRMA is an ecosystem that is being built up from below, and is not
imposed from above. IRMA will have to prove itself, via convincing
applications. Several parties are currently working on this.

Do you value careful, privacy-friendly interaction with your
customers, and do you have a good idea for an IRMA application,
for instance in your webshop or within your organisation, do
[contact](/contact-en) the Privacy by Design foundation.
For instance, the foundation can:

* advice about the organisation of attributes for the intended application;
* advice about the usage of the open source software of the foundation;
* possibly extend this software for optimal use within your
  application; such extensions will in principle also be open source
  and be available for others.

The foundation may aks a to-be-determined financial contribution for
such advice, in order to maintain its own activities. The foundation
is a not-for-profit organisation, without commercial targets.

Even if you do not have a concrete application in mind, but wish to
contribute to the IRMA development, via your efforts or via a
financial contribution, do [get in touch](/contact-en).

[To the top](#top)

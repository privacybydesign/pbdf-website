---
layout: page
title: Letting users log in on my website using IRMA
meta_title: IRMA verifier
teaser: I operate a webpage where I would like my customers to log in. How can I do that with IRMA? What are the costs?
header:
  image_fullwidth: header_unsplash_1.jpg
  title: Privacy by Design Foundation
permalink: /irma-verifier/
language: en
translations:
  nl: /irma-controleur
---

<a name="top"></a>Suppose you have your own website, for instance of a
webshop or of a service provider, and you would like to know something
more about your users. This "something" can be an email address or a
(mobile) phone number, or a home address, or a minimum age, or a
membership number. IRMA provides a mechanism that allows users to
prove to you in a reliable manner what these personal attributes are.

The Privacy by Design foundation has developed IRMA software that
allows you to verify such attributes. This software is open source and
is freely available. In principle, the only thing that you have to do
to start using IRMA is to integrate this software into your own
webpage.

In practice, a bit more is required. Below, several topics are
discussed which are directly relevant for verification of IRMA
attributes. General explanations about how IRMA works can be found
[elsewhere](/irma-explanation).

 1. [Which attributes of my users can I verify?](#whichattributen)
 2. [How do I intergrate IRMA software in my webpage?](#software)
 3. [Can I also issue attributes myself to my customers?](#issue)
 4. [What are the costs of using IRMA?](#costs)
 5. [What level of certainty does IRMA provide?](#level)
 6. [Is the foundation certified? Which guarantees exist?](#certification)

Below, these questions will be answered one by one.

### <a name="whichattributen"></a>1. Which attributes of my users can I verify?

In principle you can choose yourself which attributes you wish to
verify in order to authenticate a user. A practical requirement is
that users must be able to somehow obtain the attributes that you want
to verify. The Privacy by Design Foundation offers IRMA users, after
registration, the possibility to load a number of attributes into
their IRMA app --- see the [issuance](/issuance)
webpage. Subsequently, you can verify these attributes.

It is expected that the range of attributes will grow in the future.
Other parties than the foundation can issue attributes as well.
Maybe you yourself, see [below](#issue).

In the current initial phase, only relatively simple, general
attributes are available, like name, email address, phone number, home
address, age limits (below 16, or 18, or 65), or student. This can
already be very useful in many situations, for instance in order to
give discounts to special groups of users (students, the elderly), and
bind them to you in this manner. But this can also be useful to obtain
certainty about an address for delivery.

In case you would like to verify an attribute that a particular user
does not possess --- or that has expired --- you can redirect this
user to a website where the attribute is available. After loading the
relevant attribute, the user can authenticate at your website.

It is up to you to ask for all sorts of attributes from your users.
But please be careful: upon loging into your website with IRMA, your
customers must explicitly agree to reveal these attributes to you.
When you ask too many, non-relevant or non-neccessary, attributes, you
may scare away (potential) customers. An important idea underlying
IRMA is that only strictly necessary attributes should be requested at
login. European privacy laws require *data minimalisation* and
*purpose binding*, so that you are allowed to process only those
personal data of your customers that are strictly necessary for the
service that you offer.

[To the top](#top)

### <a name="software"></a>2. How do I intergrate IRMA software in my webpage?

All software for verification of IRMA attributes is open source and
freely [available](https://credentials.github.io/) to everyone. There
are several ways to deploy this software.

 * If you have ICT skills yourself, or have people with such skills in
   your organisation, you can install the software on your own
   computers and integrate it in your webpages.

 * If your website has been built and is operated by an external
   company, you can ask this company to do the integration for you.

 * Possibly, commerical parties will emerge that will offer
   verification of IRMA attributes as a service.

 * In particular, existing *Payment Service Providers* may start
   offering such attribute verification services, together with their
   existing payment processing services.

The Privacy by Design foundation will not offer attribute verification
services. The foundation focuses on operating the IRMA infrastructure
and on issuing a basic set of attributes. In the current initial phase
the foundation can offer advice, but it will not do this
free-of-charge. For more information, feel free to [get in
touch](/contact-en).

To summarise: IRMA can be used without any costs, at least if you do
everything yourself.

The video below provides a tutorial for integrating IRMA attribute
verification in your website. For more information, see the
[technical documentation](/documentation).

<div class="flex-video widescreen vimeo" style="display: block;">
  <iframe src="https://www.youtube-nocookie.com/embed/5aYQ2N7KR3c" frameborder="0" allowfullscreen></iframe>
</div>

[To the top](#top)

### <a name="issue"></a>3. Can I also issue attributes myself to my customers?

Suppose you wish to give customers your own attributes, belonging to
your own organisation, such as membership numbers or specific loyalty
statuses, like bronze, silver, gold, platinum, etc. This is possible,
but requires some preparation.

The Privacy by Design foundation runs the IRMA infrastructure. An
important part of this work is keeping a register of all possible
attributes. This register must provider transparancy and clarity,
so that each user knows the meanings of the various attributes.
New attributes must become part of this register. It requires
[contact](/contact-en) with the foundation. The foundation will
charge for (continued) registration of new attributes.

Once this has been organised, there are several ways to actually issue
attributes to your customers. This involves providing these attributes
with a digital signature. For this purpose as well open source software
is freely available. There are several options.

 * You can do this yourself, in case you possess sufficient
   ICT-expertise.

 * You can have a deal with the Privacy by Design foundation, whereby
   the foundation does the issuing of new attributes for you --- just
   like it already now [issues](/issuance) several attributes.

 * Possibly, service providers will emerge who issue IRMA attributes
   for others on a commercial basis.

[To the top](#top)


### <a name="costs"></a>4. What are the costs of using IRMA?

For the time being the usage of IRMA is free of charge, both for users
and for verifiers (like webshops). Of course you will have your own
costs for setting up and maintaining your own webpages in which IRMA
is integrated. Those costs depend on who does the actual work, in
which manner, see [above](#software).

The Privacy by Design foundation is a non-profit
organisation. However, if it comes to large scale usage of IRMA, it is
important that the foundation has a stable financial position in order
to maintain the IRMA infrastructure. As described above, the
foundation does ask money for certain activities (advice, issuing of
attributes, software adaptations). In addition, the foundation depends
on subsidies and support of third parties.

[To the top](#top)


### <a name="level"></a>5. What level of certainty does IRMA provide?

Within the area of *identity management* different assurance levels
for authentication are distinguished, such as "low", "substantial",
"high". Often such levels are assigned to specific authentication
means (such as a chipcard).  Within the IRMA ecosystem assurance
levels can be assigned to attributes, or, to be more preciese, to
credentials (sets of attributes). The assurance level of such a
credential is determined by the manner of authentication that preceeds
attribute issuance. The level is for instance *low* for an email
attribute that has been issued via a confirmation link sent to a
user-provided email address. The level *substantial* could be assigned
to an attribute that is issed after e-banking authentication. And the
level *high* could be used for attributes that are issued (on the
spot) only after face-2-face authentication at a counter.

Because there are many ways to issue IRMA attributes, the IRMA
platform does not standardly use such levels of assurance. Every
verifier can determine itself which attributes it does or does not
accept. A verifier can, for instance, accept an "older than 18"
attribute if it has been issued by the foundation, but not if it has
been issued by, say, Facebook.

Experiments are being carried out with issuance of IRMA attributes
for specific applications that require higher assurance levels.



[To the top](#top)


### <a name="certification"></a>6. Is the foundation certified? Which guarantees exist?

The Privacy by Design foundation is *not* certified, for instance,
according to the ISO 27010 norm. At this stage the foundation is too
small for this --- and insufficiently wealthy. The foundation intends,
at some time in the future when IRMA is being used more extensively,
to obtain such certification.

At this stage the foundation offers its operational services for free,
as "best effort". The foundation offers no guarantees and accepts at
this stage no liability for matters that possibly go wrong in IRMA
usage. The foundation tries to solve (reported) problems as soon as
possible. The responsability for IRMA usage lies entirely with the
user (the carrier or IRMA attributes), with the verifier of
attributes, and with the issuer of attributes (if any), not being the
foundation itself.

[To the top](#top)

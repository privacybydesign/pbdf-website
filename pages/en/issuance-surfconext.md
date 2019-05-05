---
layout: page
header:
  image_fullwidth: header_poly2.png
  title: Issuance of SURFconext attributes
permalink: /issuance-surfconext/
language: en
translations:
  nl: /uitgifte-surfconext
---

Via [SURFconext](https://www.surfconext.nl) students and staff members
of educational institutes in the Netherlands can log into several
online services. The Privacy by Design foundation is one such service,
and can thus obtain attributes about someone who logs in, namely:

 * given name
 * family name
 * email address
 * institution
 * staff/student
 * local registration number.

These personal attributes are obtained from the institution of the
user.  The correctness of the attributes is the institution's
responsibility. The foundation does not check them.


The foundation receives, after permission of the user, these
attributes and signs them digitally, using its own private key, and
puts them in the IRMA app of the user. There they appear as a
**surfconext credential**, containing the above attributes. The
foundation subsequently removes these attributes from its own
systems. The foundation does not keep a log of issuance: it does not
record which attributes it issues to whom at what time.

The validity period of this surfconext credential is *three months*.
This relatively short time is required, so that people who
finish their studies, stop working, or leave their (educational)
institution in some other way, only have a short time period
in which they can use these credentials. After expiration of the
credential, users have to obtain a new (fresh) credential.

At this stage this attribute issuance is available only for students
and staff members of a limited number of institutions in higher
education in the Netherlands. Are you studying or working at such an
institution but does your institution not occur in the list at the <a
href="/uitgifte/surfnet?action=login">SURFconext
issuance page</a>? This means that your institution has not "switched
on" the connection to the foundation <a
href="https://privacybydesign.foundation/en">Privacy by Design</a>.
In that case you cannot receive attributes via SURFconext.  The best
thing that you can do is to contact locally at your institution the
people responsible for computer support (in particular: identity
management) and ask them to send an email to the address
<tt>support'at'surfconext.nl</tt>, with the simple request: <em>Please
give the Privacy by Design foundation access as Service Provider to
our institution</em> (in Dutch: <em>AUB de stichting Privacy by Design
voor onze instelling toelaten als Service Provider</em>).


[Back](/issuance) to attribute issuance.


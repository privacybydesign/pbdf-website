---
layout: page
header:
  image_fullwidth: header_poly2.png
  title: IRMA audit
meta_title: IRMA audit
permalink: /reviews/irmago-gabi-audit-reaction/
language: en
---

This is a point-by-point reaction to the most important issues in the [irmago](https://github.com/privacybydesign/irmago) and [gabi](https://github.com/privacybydesign/gabi) code repositories, as identified in the [notes of the code audit](/reviews/irmago-gabi-audit) of these repositories, performed by Stef Marsiske and Jonathan Levin of [Radically Open Security](https://radicallyopensecurity.com/).

All of the fixes mentioned below are included in version [v0.5.0-rc.4](https://github.com/privacybydesign/irmago/releases/tag/v0.5.0-rc.4) and above of irmago.

## irmago

* *the “authentication” protocol that sends over a hashed pin, allows for a MiTM attacker to apply a pass-the-hash attack*

  Indeed the salted hashed PIN would be susceptible to replay attacks. In the long term, we plan to find and implement a better authentication mechanism. In the meantime the risk posed by this issue is limited, as one would have to obtain the salted hashed PIN by either MitM a TLS connection, which is deemed to be difficult, or by (1) exploiting the phone to gain access to the salt and (2) somehow obtain the user's PIN. If this exploit gives the attacker root privileges then all bets are off anyway, as then the attacker can always do whatever the IRMA app can do, regardless of any of our defense mechanisms; if not, then even though the attacker might now have the salted hashed PIN, he can only do something with it if he also gains access to the attributes stored in the IRMA app.

* *Timestamp on server is not checked for validity, so attacker can force an update to an old, broken scheme*

  Fixed in [`e628663`](https://github.com/privacybydesign/irmago/commit/e628663).

* *ioutil.ReadAll() can lead to DOS if a slow connection blocks the function return or if the server is flooded with traffic*

  Fixed in [`b119ecd`](https://github.com/privacybydesign/irmago/commit/b119ecd).

* *`func EnsureDirectoryExists()` Doesn’t actually check that path is a directory. Could be a file*

  Fixed in [`a8092ec5`](https://github.com/privacybydesign/irmago/commit/a8092ec5).

* *`func Copy()` uses ioutil.ReadAll() and is not used*

  This function has been removed in [`b82a032`](https://github.com/privacybydesign/irmago/commit/b82a032).

* *`func ReadKey()`: if path is a link to a pipe or /dev/zero then this would encounter some problems*

  Fixed in [`69f004e9`](https://github.com/privacybydesign/irmago/commit/69f004e9).

* *`func (transport *HTTPTransport) GetSignedFile()`: potentially dangerous function that can write anywhere without checks or logging*

  Fixed in [`4851b81d`](https://github.com/privacybydesign/irmago/commit/4851b81d).

* *`func (conf *Configuration) readTlsConf()` should only allow safe TLS cipher suites*

  Fixed in [`bbf15f2`](https://github.com/privacybydesign/irmago/commit/bbf15f2).

* *`func (f *fileStorage) load()` accepts nonregular files*

  Fixed in [`7592122b`](https://github.com/privacybydesign/irmago/commit/7592122b).

* *Secret key is only protected by file system access rights of the db*

  The secret key as well as the rest of the IRMA app storage are indeed not encrypted by the IRMA app - but since both Android and iOS encrypt the entire filesystem except in very old versions, the storage is actually almost always still encrypted. Combined with access permission rights, nothing except the IRMA app can access the storage if the phone has not been exploited. If it has and the attacker has gained root privileges, then all bets are off anyway as then the attacker can always do whatever the IRMA app can do to access the storage, regardless of any of our defense mechanisms. Since we can thus only defend against attackers that do not manage to gain root privileges on the phone, there is relatively little to be gained by implementing an additional encryption layer in the IRMA app on top of that of the OS. Nevertheless, we are planning to do so in the near future.

* *`irma scheme issuer genkeypair`: Default key length is 1024*

  Set to 2048 in [`d04a7ab`](https://github.com/privacybydesign/irmago/commit/d04a7ab).

* *`irma scheme keygen`: The P-256 curve is not a safe curve according to https://safecurves.cr.yp.to/*

  We will switch to a curve deemed safe by https://safecurves.cr.yp.to in a future update. In the meantime, as far as we are aware there is no evidence of any backdoor or other problem with the NIST P-256 curve.

* *IRMA server: default auth-method should not be “none”, since generally better to opt-in to insecurity than opt-out*

  In the latest versions of the IRMA server and app, the app will refuse to perform sessions with IRMA servers not running with [`--production` mode](https://irma.app/docs/irma-server/#production-mode) enabled, unless [developer mode](https://irma.app/docs/irma-app/#developer-mode) is turned on in the app. Since normal users will not have this enabled this will force IRMA server admins to enable `--production`, which makes the server switch to safer defaults for some of its configuration options, including `--no-auth`.

* *`func (c AttributeCon) Satisfy()`: ... we can make Satisfy return true, which should really be false*

  The calling function ignores the incorrect boolean if `err != nil` so this did not result in incorrect behaviour. Nevertheless this was fixed in [`fb15984`](https://github.com/privacybydesign/irmago/commit/fb15984).

## gabi

* *ip addresses of clients can expose usage statistics of users*

  This is indeed an issue unfortunately inherent to communicating over the internet, although when on mobile networks generally many smartphones will share a single IPv4 address behind which they communicate with the internet. We have experimented with integrating [Tor](https://www.torproject.org/) in the IRMA app, but currently this does not yet seem feasible. As soon as it becomes feasible, we will integrate it. As an aside, the IRMA server never emits IP addresses of IRMA apps in its logs or output, regardless of its configuration (although of course e.g. a proxy in front of it might).

* *sensitive memory is not sanitized or protected from being swapped to disk*

  We will implement <https://github.com/awnumar/memguard> as suggested to protect sensitive memory. In the meantime, note that an attacker would have to gain direct access to the machine having sensitive memory in order to attempt to read said memory. On smartphones this is infeasible except through exploits, and then previously mentioned caveats apply. The IRMA server keeps issuer private keys in memory as short as is possible in Go without memguard, so it will only end up in the swap file if the swap was made at the right time. Note that the swap memory should only be accessible to the root user, who can always just read the private key from disk even if we prevent it from being swapped. In any case, server admins can disable the swap or decrease swappiness, as well as prevent unauthorized parties from accessing the machine by applying appropriate security measures, and keeping all software up to date.

* *public keys are world writeable* and *private key is world read/write*

  Fixed in [`fc1c26ee`](https://github.com/privacybydesign/gabi/commit/fc1c26ee).

* *[low] weak timing side channel due to Exp*

  The Go runtime provides no constant-time operations on big integers. Until recently neither did any third party library that we are aware of, so preventing side channels altogether was infeasible. Recently such a library appeared at <https://github.com/coyim/constbn>. It still has to be investigated if this library is suitable and can be used in IRMA, but if so then we will. In the meantime the severity of this is rated as low, as side channels are generally difficult to exploit.

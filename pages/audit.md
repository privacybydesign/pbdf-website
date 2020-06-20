---
layout: page-fullwidth
header:
  image_fullwidth: header_poly2.png
  title: IRMA audit
meta_title: IRMA audit
permalink: /reviews/irmago-gabi-audit/
language: en
---

These are the notes of a code audit on the [irmago](https://github.com/privacybydesign/irmago) and [gabi](https://github.com/privacybydesign/gabi) code repositories, performed by Stef Marsiske and Jonathan Levin of [Radically Open Security](https://radicallyopensecurity.com/).

An accompanying point-by-point reaction to the most important issues may be found [here](/reviews/irmago-gabi-audit-reaction).

<a id="org53ba4ba"></a>

# gabi


<a id="org12cbc49"></a>

## primary objective


<a id="orgf8f1c46"></a>

### Requirements for Attribute based credentials (ABCs) (from Alpar thesis, 2015, pg 78)

1.  (S1) Authenticity.

    The content of an ABC signed by the issuer cannot be modified

2.  (S2) Unforgeability

    prevents a malicious third party to forge a valid ABC.

3.  (S3) Non-repudiation

    prevents the issuer to deny that the credential’s signature was produced by him.

4.  (S4) Non-transferability

    prevents the user to transfer her ABC to another user of the system.

5.  (P1) Offline issuer.

    The issuer of a credential is not involved in the verification protocol.

6.  (P2) Issuer unlinkability

    prevents an issuer to trace his credentials. More precisely, an
    adversary (e.g. a colluding set of issuers and verifiers) cannot
    decide if an issuing protocol and a verification protocol belong to
    the same credential.

7.  (P3) Multi-show unlinkability.

    Verifiers cannot trace the activities of a user. More precisely,
    seeing two verification protocols, no adversary (e.g. a colluding set
    of verifiers and issuers) can distinguish the cases whether those
    protocols were performed using the same credential or not.

8.  (P4) Selective disclosure.

    Any subset of attributes from a credential can be revealed and proven
    independently.

9.  (P5) Minimal information.

    During verification protocols no other information is revealed to the
    verifier beyond the disclosed attributes, the credential names and the
    corresponding issuers.


<a id="org6700bb9"></a>

### Keyshare server requirements go here

Keyshare properties are out of scope for this review, but should be looked at and maybe
formalized in future work.

1.  (KS1) Confidentiality

    Keyshare server does not leak its own contribution to the prover's secret key.

2.  (KS2) Availability

    Keyshare server must respond to prover requests during issuance and proving


<a id="org8faa544"></a>

### information leakage

1.  traditional side-channels (timing, chache)

2.  implement specific (ip address, mac address, etc)

3.  leaking to storage/ram

4.  invalid params (1,0,modulus,etc)


<a id="org30bc0df"></a>

## 2ndary objective

1.  least privilege separation

2.  tcb minimization

3.  code execution


<a id="orgae2fadc"></a>

## git hash

ce779395f4c98898f21f8c49f71f4b3353995127


<a id="org883461b"></a>

## files


<a id="org9908524"></a>

### test files (ignored)

1.  ./gabi/randomprime\_test.go

2.  ./gabi/big/int\_test.go

3.  ./gabi/safeprime/safeprime\_test.go

4.  ./gabi/gabi\_test.go


<a id="orga0e641d"></a>

### todo

1.  Compile list of literature on:

    1.  TODO CL signatures
    
        1.  An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation <https://eprint.iacr.org/2001/019.pdf>
        
            This is the original paper from Camenisch and Lysyanskaya
    
    2.  TODO Schnorr protocol/proofs
    
        1.  On the Security of the Schnorr Signature Scheme and DSAagainst Related-Key Attacks <https://eprint.iacr.org/2015/1135.pdf>
    
    3.  TODO RSA attacks
    
    4.  TODO Pedersen Commitments


<a id="org20bcc48"></a>

### done

1.  ./gabi/keys.go

    1.  DONE func findMatch(safeprimes []\*big.Int, param \*SystemParameters, p \*big.Int,
    
        n, pMod8, qMod8 \*big.Int,) \*big.Int {
        
        1.  Why must p != q mod 8? I don't see this in the IRMA lit.
    
    2.  DONE func (privk \*PrivateKey) WriteToFile(filename string, forceOverwrite bool) (int64, error) {
    
        finding: writes privkey to file, permissions are not set at all, or to 0666 which is very lax.
    
    3.  DONE xml unmarshal
    
        looks fun: <https://golang.org/pkg/encoding/xml/#Unmarshal>
        possibly also million laughs entity explosion or an xxe attack?
        nope: <https://stackoverflow.com/questions/28662417/go-xml-error-invalid-charac
	ter-entity>
    
    4.  DONE func NewPrivateKeyFromFile(filename string) (\*PrivateKey, error) {
    
        finding? no sanity checks on loaded keys, can be totally bogus, non-safe primes, etc
    
    5.  DONE func NewPrivateKeyFromXML(xmlInput string) (\*PrivateKey, error) {
    
        see gosec issue re Open()
    
    6.  DONE func GenerateKeyPair(param \*SystemParameters, numAttributes int, counter uint, expiryDate time.Time) (\*PrivateKey, \*PublicKey, error) {
    
        1.  invokes mathUtil.go/legendreSymbol
        
        2.  uses Exp &#x2013; not constant time
        
        3.  L438 doesn't check if RandomBigInt returns error before doing comparisons
        
            -   There is no error that can occur
    
    7.  DONE no sanity checks in
    
        func (bl \*Bases) UnmarshalXML(d \*xml.Decoder, start xml.StartElement) error {
        func (el \*EpochLength) UnmarshalXML(d \*xml.Decoder, start xml.StartElement) error {

2.  ./gabi/proofs.go

    1.  DONE func (p \*ProofD) reconstructZ(pk \*PublicKey) \*big.Int {
    
        2014\_phd\_thesis:60 alg 5.14 (without the hash/comparison) - and quite differently (mixed up order) some parts, check why!
        why does it do this:  A^{2^{l\_e - 1}}
        how does this work?
    
    2.  DONE func (p \*ProofU) MergeProofP(proofP \*ProofP, pk \*PublicKey) {
    
        implements keysharing, see keysharing.png
    
    3.  DONE func () correctResponseSizes(pk \*PublicKey) bool {
    
        allows for negative values, but they are on the exponent/commit
        values which are evaluated using modpow which handles negative
        ints.
    
    4.  DONE func (p \*ProofU) Verify(pk \*PublicKey, context, nonce \*big.Int) bool {
    
        more or less implement alg 5.7 from page 56 of 2014\_phd\_thesis
        
        lower in the callstack there is a non-const comparison of two hashes, check this. due to the nonce used seems to be harmless
        
        it's difficult to follow since it is so split up, thus below a merged version of these function(callgraph)
        merging some functions
        
            func (p *ProofU) VerifyWithChallenge(pk *PublicKey, reconstructedChallenge *big.Int) bool {}
            func (p *ProofU) correctResponseSizes(pk *PublicKey) bool {}
        
            func (p *ProofU) Verify(pk *PublicKey, context, nonce *big.Int) bool {
                // verify if p.VPrimeResponse is within bounds of ~ ±2^(LvPrimeCommit)-1
                // from func (p *ProofU) correctResponseSizes(pk *PublicKey) bool {}
            	maximum := new(big.Int).Lsh(bigONE, pk.Params.LvPrimeCommit+1)
            	maximum.Sub(maximum, bigONE)
            	minimum := new(big.Int).Neg(maximum)
            
                // from func (p *ProofU) VerifyWithChallenge(pk *PublicKey, reconstructedChallenge *big.Int) bool {}
            	return (p.VPrimeResponse.Cmp(minimum) >= 0 && p.VPrimeResponse.Cmp(maximum) <= 0) &&
            	    // createChallenge returns a hash, so this compares two hashes, which must be equal
            	    // p.C should be the hash in the proof
            	    // this comparison is not constant time!
            	    p.C.Cmp(createChallenge(context, nonce, {p.U, p.reconstructUcommit(pk)}, false)) == 0
            }
    
    5.  DONE func (p \*ProofU) reconstructUcommit(pk \*PublicKey) \*big.Int {     :black:
    
        lines 1-4: 2014\_phd\_thesis p56, alg 5.7 (without the comparison)
            reconstructs Ucommit, U\_commit = U^{-C} \* S^{VPrimeResponse} \* R\_0^{SResponse}
        does some Exp with public values, so doesn't have to be const time.
    
    6.  DONE func (p \*ProofS) Verify(pk \*PublicKey, signature \*CLSignature, context, nonce \*big.Int) bool {     :black:
    
        2014\_phd\_thesis:58, alg 5.10
        does some Exp and some == on hashes, but all inputs are public values and/or randomized
    
    7.  DONE func (p \*ProofD) Verify(pk \*PublicKey, context, nonce1 \*big.Int, issig bool) bool {     :black:
    
        more or less implements alg 5.14 from page 60 of 2014\_phd\_thesis
        
        lower in the callstack there is a non-const comparison of two hashes, check this. due to the nonce used seems to be harmless
        
        it's difficult to follow since it is so split up, thus below a merged version of these function(callgraph)
        merging the callstack:
        
            func (p *ProofD) ChallengeContribution(pk *PublicKey) []*big.Int {
            func (p *ProofD) VerifyWithChallenge(pk *PublicKey, reconstructedChallenge *big.Int) bool {
            func (p *ProofD) correctResponseSizes(pk *PublicKey) bool {
        
            func (p *ProofD) Verify(pk *PublicKey, context, nonce1 *big.Int, issig bool) bool {
                // from func (p *ProofD) correctResponseSizes(pk *PublicKey) bool {
                // checks that Ar and Er falls within valid range
            	// Check range on the AResponses
            	maximum := new(big.Int).Lsh(bigONE, pk.Params.LmCommit+1)
            	maximum.Sub(maximum, bigONE)
            	minimum := new(big.Int).Neg(maximum)
            	for _, aResponse := range p.AResponses {
            		if aResponse.Cmp(minimum) < 0 || aResponse.Cmp(maximum) > 0 {
            			return false
            		}
            	}
            
            	// Check range EResponse
            	maximum.Lsh(bigONE, pk.Params.LeCommit+1)
            	maximum.Sub(maximum, bigONE)
            	minimum.Neg(maximum)
            
            	if p.EResponse.Cmp(minimum) < 0 || p.EResponse.Cmp(maximum) > 0 {
            		return false
            	}
            
                p.correctResponseSizes(pk) && p.C.Cmp(createChallenge(context, nonce1, []*big.Int{p.A, p.reconstructZ(pk)}, issig)) == 0
            }

3.  ./gabi/credential.go

    1.  DONE func (ic \*Credential) CreateDisclosureProof(disclosedAttributes []int, context, nonce1 \*big.Int) \*ProofD {     :red:
    
        implements alg 5.13 from 2014\_phd\_thesis:59
        i don't get this (74) line though
        
            ePrime := new(big.Int).Sub(randSig.E, new(big.Int).Lsh(bigONE, ic.Pk.Params.Le-1))
        
        the same also happens in CreateProof()
    
    2.  DONE func (ic \*Credential) CreateDisclosureProofBuilder(disclosedAttributes []int) \*DisclosureProofBuilder {
    
        DisclosureProofBuilder.z := 1 - is multiplied by the kss later in MergeProofPCommitment()
        but what is z? is it not from the issuers public key? why is it 1-then?
        is this the same Z that is being reconstructed in proofs.go:reconstructZ()
        in Commit() you actually commit to the secret, using:
        
            d.z.Mul(d.z, Ae).Mul(d.z, Sv).Mod(d.z, d.pk.N)
    
    3.  DONE func (d \*DisclosureProofBuilder) MergeProofPCommitment(commitment \*ProofPCommitment) {
    
        says: TODO: Eventually replace skRandomizer with an array
        why need an array for the keyshare server? wanna have more than one keyshare server?
    
    4.  DONE func (d \*DisclosureProofBuilder) CreateProof(challenge \*big.Int) Proof {
    
        seems to implement lines 9-12 of alg 5.13 from
        2014\_phd\_thesis:59 why is this separate from the prev fn
        Commit() - to make it possible as an interactive and
        non-interactive version, depending if you do the fiat-shamir or
        not.  starts with the strange (seen elsewhere too):
        
            ePrime := new(big.Int).Sub(d.randomizedSignature.E, new(big.Int).Lsh(bigONE, d.pk.Params.Le-1))
    
    5.  DONE func (d \*DisclosureProofBuilder) Commit(skRandomizer \*big.Int) []\*big.Int {
    
        implements lines 2-7 of alg 5.13 from 2014\_phd\_thesis:59
        also very similar to reconstructZ() from proofs.go:159
        why is this separate from the next fn CreateProof()? - to make it possible (non)-interactive
        where is the hash? - depends if this is interactive/non-interactive

4.  ./gabi/safeprime/safeprime\_stub.go

5.  ./gabi/doc.go

6.  ./gabi/sysparams.go

7.  gosec (<https://github.com/securego/gosec>) results

    found 3 false positives, and 2 valid issues, which are listed in the Findings section.
    
        % GOPATH=~/.go ~/.go/bin/gosec github.com/privacybydesign/gabi
        [gosec] 2020/02/11 20:56:23 including rules: default
        [gosec] 2020/02/11 20:56:23 excluding rules: default
        2020/02/11 20:56:23 directory github.com/privacybydesign/gabi doesn't exist, checking if is a package on $GOPATH
        2020/02/11 20:56:23 located github.com/privacybydesign/gabi in /home/s/.go/src/github.com/privacybydesign/gabi
        [gosec] 2020/02/11 20:56:23 Searching directory: /home/s/.go/src/github.com/privacybydesign/gabi
        [gosec] 2020/02/11 20:56:24 Checking package: command-line-arguments
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/builder.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/clsignature.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/credential.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/doc.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/issuer.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/keys.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/mathutil.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/prooflist.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/proofs.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/randomprime.go
        [gosec] 2020/02/11 20:56:24 Checking file: /home/s/.go/src/github.com/privacybydesign/gabi/sysparams.go
        Results:
        
        
        [/home/s/.go/src/github.com/privacybydesign/gabi/keys.go:65] - G304: Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
          > os.Open(filename)
        
        
        [/home/s/.go/src/github.com/privacybydesign/gabi/keys.go:116] - G302: Expect file permissions to be 0600 or less (Confidence: HIGH, Severity: MEDIUM)
          > os.OpenFile(filename, os.O_RDWR|os.O_CREATE|os.O_EXCL, 0666)
        
        
        [/home/s/.go/src/github.com/privacybydesign/gabi/keys.go:263] - G304: Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
          > os.Open(filename)
        
        
        [/home/s/.go/src/github.com/privacybydesign/gabi/keys.go:315] - G302: Expect file permissions to be 0600 or less (Confidence: HIGH, Severity: MEDIUM)
          > os.OpenFile(filename, os.O_RDWR|os.O_CREATE|os.O_EXCL, 0666)
        
        
        [/home/s/.go/src/github.com/privacybydesign/gabi/builder.go:149] - G104: Errors unhandled. (Confidence: HIGH, Severity: LOW)
          > h.Write(input)
        
        
        Summary:
           Files: 11
           Lines: 1791
           Nosec: 0
          Issues: 5

8.  staticcheck (<https://staticcheck.io/>) results

    only false positives or grammar nazism.
    
        % GOPATH=~/.go ~/.go/bin/staticcheck github.com/privacybydesign/gabi
        -: could not analyze dependency github.com/privacybydesign/gabi [github.com/privacybydesign/gabi.test] of github.com/privacybydesign/gabi.test (compile)
        -: could not analyze dependency github.com/stretchr/testify/assert of github.com/privacybydesign/gabi [github.com/privacybydesign/gabi.test]:
        	/home/s/.go/src/github.com/privacybydesign/gabi/gabi_test.go:15:2: cannot find package "github.com/stretchr/testify/assert" in any of:
        	/usr/lib/go/src/github.com/stretchr/testify/assert (from $GOROOT)
        	/home/s/.go/src/github.com/stretchr/testify/assert (from $GOPATH) (compile)
        /home/s/.go/src/github.com/privacybydesign/gabi/builder.go:52:10: error strings should not be capitalized (ST1005)
        /home/s/.go/src/github.com/privacybydesign/gabi/builder.go:111:44: error strings should not end with punctuation or a newline (ST1005)
        /home/s/.go/src/github.com/privacybydesign/gabi/builder.go:114:35: error strings should not be capitalized (ST1005)
        /home/s/.go/src/github.com/privacybydesign/gabi/builder.go:114:35: error strings should not end with punctuation or a newline (ST1005)
        /home/s/.go/src/github.com/privacybydesign/gabi/keys.go:252:15: error strings should not be capitalized (ST1005)
        /home/s/.go/src/github.com/privacybydesign/gabi/prooflist.go:31:21: error strings should not be capitalized (ST1005)
        /home/s/.go/src/github.com/privacybydesign/gabi/prooflist.go:38:10: assigning the result of this type assertion to a variable (switch proof := proof.(type)) could eliminate type assertions in switch cases
        (S1034)
        	/home/s/.go/src/github.com/privacybydesign/gabi/prooflist.go:41:12: could eliminate this type assertion
        /home/s/.go/src/github.com/privacybydesign/gabi/prooflist.go:134:15: error strings should not be capitalized (ST1005)

9.  ./gabi/issuer.go

    1.  red
    
        1.  func (i \*Issuer) IssueSignature(U \*big.Int, attributes []\*big.Int, nonce2 \*big.Int) (\*IssueSignatureMessage, error) {
        
            1.  Need to check that proofs are verified wherever this is called
            
            2.  uses signCommitmentandattributes from clsignature.go
        
        2.  func (i \*Issuer) signCommitmentAndAttributes(U \*big.Int, attributes []\*big.Int) (\*CLSignature, error) {
        
            1.  also uses signCommitmentandattributes from clsignature.go
        
        3.  func randomElementMultiplicativeGroup(modulus \*big.Int) \*big.Int {
        
            1.  used in ZK proof of e. If there are side channels can we recover e?
            
                Uses GCD, which is timing sensitive. Called during the ZK
                proof of the CL signature to get secret commitment value eCommit.
                
                However, since it runs a non-deterministic number of times in
                a loop, and the values are always random, we have a sample
                size of 1 for timing attacks.
                
                Timing side channel is not an issue in this case.
            
            2.  why are r and t declared differently when they seem to do be the same type?
        
        4.  func (i \*Issuer) proveSignature(signature \*CLSignature, nonce2 \*big.Int) \*ProofS {
        
            The function conflates many timing-sensitive operations, so
            there is probably too much noise to do timing side
            channels. However, since the calculation of d, p'\* q' are
            always the same, if an attacker can run these in isolation/in
            large samples, they can reduce the noise/signal ratio.
            
            1.  L63 mul of P and Q timing side-channel?
            
            2.  is XGCD side-channel sensitive?
            
            3.  big.Int.EXP used on ecommit (L67)

10. ./gabi/mathutil.go

    1.  DONE func legendreSymbol(a, p \*big.Int) int {
    
        1.  "Probably needs more checking?".
        
            Adapted from:
            <https://programmingpraxis.com/2012/05/01/legendres-symbol/>
            Found the same algorithm implemented in Lua on wikipedia at
            <https://en.wikipedia.org/wiki/Jacobi_symbol> Seems to be the RS
            k-ary Jacobi Symbol Algorithm on pg 5 of
            <https://pdfs.semanticscholar.org/f73a/2f4af7391fcc4e33a0264d96690f781150fa.pdf>
    
    2.  DONE modinverse
    
        // This function was taken from Go's RSA implementation
        func modInverse(a, n \*big.Int) (ia \*big.Int, ok bool) {
        This diverges from the go version but is functionally equivalent.
    
    3.  DONE modpow
    
        func modPow(x, y, m \*big.Int) \*big.Int {
        timing sensitive. not const-time.
    
    4.  DONE func representToBases(bases, exps []\*big.Int, modulus \*big.Int, maxMessageLength uint) \*big.Int {     :red:
    
        1.  Weak side channel from use of big.Int.Exp() for calculation of attribute commitment.
        
        2.  exponents are not hashed unless their bitlength > maxmessagelength
        
            Can we make short exponents/attributes? i.e. can be 0/1?

11. ./gabi/randomprime.go

    1.  red
    
        1.  func randomPrimeInRange(rand io.Reader, start, length uint) (p \*big.Int, err error) {
        
            1.  Cool fact:
            
                ProbablyPrime can return true after 40 iterations for crafted composites

12. ./gabi/clsignature.go

    1.  red
    
        1.  DONE func (s \*CLSignature) Randomize(pk \*PublicKey) \*CLSignature     :red:
        
            Algorithm 5.12 from Vuller thesis.
            
            1.  Different random e is used for every issuance, but e is constant under randomization.
            
                Does this break multi-use unlinkability?
                
                1.  e and v/v' should never be revealed to verifier. Hidden by ZK proof in 5.13 (Vuller).
        
        2.  DONE func SignMessageBlock(sk \*PrivateKey, pk \*PublicKey, ms []\*big.Int) (\*CLSignature, error)     :red:
        
            Wrapper for SignMessageBlock
            
            1.  DONE Check that this is called correctly
            
                Not called from anywhere in gabi or irmago.
        
        3.  INPROGRESS func signMessageBlockAndCommitment(sk \*PrivateKey, pk \*PublicKey, U \*big.Int, ms []\*big.Int) (\*CLSignature, error)     :red:
        
            Algorithm 5.8 from Vuller
            
            1.  DONE d (L45) is not sanitized:
            
                can future prover recover d and therefore sign fraudulent credentials?
            
            2.  DONE big.Int.Exp used (L46):
            
                open to timing attacks?
                    */ TODO: this is probably open to side channel attacks, maybe use a
                    /* safe (raw) RSA signature?
            
            3.  INPROGRESS Signatures are homomorphic?
            
                Does this lead to any attacks?
    
    2.  black
    
        1.  func (s \*CLSignature) Verify(pk \*PublicKey, ms []\*big.Int) bool
        
            1.  Follows alg 5.4 of Vuller thesis (p54).

13. ./gabi/safeprime/safeprime.go

    1.  DONE func Generate(bitsize int, stop chan struct{}) (\*big.Int, error) {     :red:
    
        */ (See <https://www.ijipbangalore.org/abstracts_2(1)>/p5.pdf and
        /* <https://groups.google.com/group/sci.crypt/msg/34c4abf63568a8eb>)
    
    2.  DONE func ProbablySafePrime(x \*big.Int, n int) bool {     :red:
    
        1.  duplicate call of ProbablyPrime on q
        
            This calls ProbablyPrime on q, but in Generate, ProbablyPrime
            is called on q before ProbablySafePrime is called on 2q+1

14. POC for Mul and GCD timing side channels

15. ./gabi/builder.go

    1.  DONE func commitmentToSecret(pk \*PublicKey, secret \*big.Int) (vPrime, U \*big.Int) {     :red:
    
        -   2014\_phd\_thesis:55 alg 5.5
        -   v' = ramdom(LvPrime), U = S^v' \* R[0]^m[0] mod n
        -   does an Exp with secret! timing side chan? check call stack depth,
        -   exp with v' adds unique noise on each invocation.
        -   looks very much like Commit() from this module, but that is
        -   bound to a builder already, and this function is only used in
            the "constructor" \`NewCredentialBuilder\`
    
    2.  DONE func (b \*CredentialBuilder) ConstructCredential(msg \*IssueSignatureMessage, attributes []\*big.Int) (\*Credential, error) {     :red:
    
        calls proof.verify (alg 5.10 from 2014\_phd\_thesis:58)
        implements among others 2014\_phd\_thesis:58 alg 5.11
        then calls verify on clsig which Follows alg 5.4 of Vuller thesis (p54).
        finally returns the credential (pk, sig, attributes)
    
    3.  DONE func (pl \*ProofList) UnmarshalJSON(bytes []byte) error {     :black:
    
        unmarshalls proofs U|D
        only checks if the object unmarshalled has an A or U member variable, but does not check any of the other values needed in these structs.
        also does not do any sanity checks on the values of these.
    
    4.  DONE func hashCommit(values []\*big.Int, issig bool) \*big.Int {
    
        more or less ~ big.int(hash(asn1(values)))
        this is line 6 of alg 5.6 in 2014\_phd\_thesis:56
        and it is called from proveCommitment
    
    5.  DONE func (b \*CredentialBuilder) proveCommitment(U, nonce1 \*big.Int) \*ProofU {     :black:
    
        implements 2014\_phd\_thesis:56 alg 5.6 (during issuance generate
        from the prover a proof of correctness for U. for the issuer)
        uses issuers pubkey as bases for exponents, the exponents are
        random. so not constant-time sensitive.  called from
        CommitToSecretAndProve()
    
    6.  DONE func (b \*CredentialBuilder) MergeProofPCommitment(commitment \*ProofPCommitment) {     :black:
    
        keyshare feature
    
    7.  DONE func (b \*CredentialBuilder) Commit(skRandomizer \*big.Int) []\*big.Int {
    
        implements 1st part of 2014\_phd\_thesis:55 alg 5.6 and might be
        used in combination with CreateProof for the interactive version
        of this alg it's a bit confusing that it does:
        
            b.uCommit.Mul(b.uCommit, sv).Mul(b.uCommit, r0s).Mod(b.uCommit, b.pk.N)
        
        might be cleaner to write seperately, our understanding is it does
        
            uCommit = ((uCommit * sv) * r0s) mod N
        
        called from:
        
            prooflist.go
            16:     Commit(skRandomizer *big.Int) []*big.Int
            123:            commitmentValues = append(commitmentValues, pb.Commit(skCommitment)...)
            
            credential.go
            136:func (d *DisclosureProofBuilder) Commit(skRandomizer *big.Int) []*big.Int {
    
    8.  DONE func (b \*CredentialBuilder) CreateProof(challenge \*big.Int) Proof {
    
        implements lines 8-11 in 2014\_phd\_thesis:56 alg 5.6 alg 5.6
        seems fully implemented in func (b \*CredentialBuilder)
        proveCommitment(U, nonce1 \*big.Int) \*ProofU {
        
        -   why this redundancy? is this the interactive version,, which
            explains also why this + Commit() implement this but without
            the hash
        
            b.uCommit.Mul(b.uCommit, sv).Mul(b.uCommit, r0s).Mod(b.uCommit, b.pk.N)
        
        b.uCommit is initialized to 1. check if this is also somewhere else set before calling this function.


<a id="orgfea2150"></a>

## findings


<a id="org1bfe9be"></a>

### [med] ip addresses of clients can expose usage statistics of users

yes, and also introduces an online requirement which brings as a consequence a DoS vector


<a id="org5ba1e98"></a>

### [high] sensitive memory is not sanitized or protected from being swapped to disk

recommendation use <https://spacetime.dev/memory-security-go>


<a id="org50efccd"></a>

### [med] public keys are world writeable

   In file keys.go:315 in the function \`func (pubk \*PublicKey) WriteToFile(filename string, forceOverwrite bool) (int64, error)\`
the key is stored using:

    os.OpenFile(filename, os.O_RDWR|os.O_CREATE|os.O_EXCL, 0666)

Although the file should be publicly readable, it should not be
possible to corrupt/modify by unauthorized parties having access to
the system.

Recommendation use 0644 instead.


<a id="org4bd5437"></a>

### [high] private key is world read/write

in ./gabi/keys.go \`func (privk \*PrivateKey) WriteToFile()\` writes privkey to file, permissions are not set at all, or to 0666 which is very lax.


<a id="org43ae632"></a>

### [low] weak timing side channel due to Exp

1.  possible timing side channel in proof signature

    gabi/issuer.go proveSignature()
    
    The function conflates many timing-sensitive operations, so there
    is probably too much noise to do timing side channels. However,
    since the calculation of d, p'\* q' are always the same, if an
    attacker can run these in isolation/in large samples, they can
    reduce the noise/signal ratio.

2.  gabi/mathutil.go representToBases()

3.  gabi/mathutil.go modpow()

4.  gabi/clsignature.go SignMessageBlock()

    lots of noise added from random values at beginning of function.
    At end p' and q' are multiplied and d is computed, making signature forgeries possible.
    But sample size of 1 for computing d, but many possibles samples for computing p' and q'
    q' and p' might not be necessary if q'p' is stored instead in the private key

5.  gabi/keys.go func GenerateKeyPair()


<a id="org7607c95"></a>

### [med] corrupt private keys loading

1.  gabi/keys.go NewPrivateKeyFrom&#x2026;()

    does not do any sanity checks, loaded keys can be bogus, non-safeprimes, composites, etc.


<a id="orgbc75dde"></a>

## code smells


<a id="org31d9775"></a>

### ./gabi/safeprime/safeprime.go

1.  DONE func ProbablySafePrime(x \*big.Int, n int) bool {     :red:

    1.  duplicate call of ProbablyPrime on q
    
        This calls ProbablyPrime on q, but in Generate, ProbablyPrime
        is called on q before ProbablySafePrime is called on 2q+1


<a id="orgb24d4c7"></a>

### ./gabi/builder.go

1.  func UnmarshalJson()

    -   Doesn't do any sanity checks on proof values, but this just means the proofs may fail

2.  func (b \*CredentialBuilder) Commit()

    implements 1st part of 2014\_phd\_thesis:55 alg 5.6 and might be
    used in combination with CreateProof for the interactive version
    of this alg it's a bit confusing that it does:
    
        b.uCommit.Mul(b.uCommit, sv).Mul(b.uCommit, r0s).Mod(b.uCommit, b.pk.N)
    
    might be cleaner to write seperately, our understanding is it does
    
        uCommit = ((uCommit * sv) * r0s) mod N


<a id="orgd8a28a9"></a>

### ./gabi/keys.go

1.  NewPrivateKeyFromFile redundant with NewPrivateKeyFromXML


<a id="org1030ed6"></a>

## open questions


<a id="org5bb9d5d"></a>

### ./gabi/issuer.go

1.  func randomElementMultiplicativeGroup(modulus \*big.Int) \*big.Int {

    1.  why are r and t declared differently when they seem to do be the same type?


<a id="org3c28858"></a>

### ./gabi/big/int.go

The assertion that only positive integers are supported is confusing in L18

1.  TODO func (i \*Int) UnmarshalXML(d \*xml.Decoder, start xml.StartElement) error {

    marshalXML only does positive ints, what happens if we feed it a negative marshaled int.
    Doesn't seem to be used anywhere. Ask for clarification.

2.  DONE func (i \*Int) MarshalXML(e \*xml.Encoder, start xml.StartElement) error {

    says only works for positive ints. what happens for negative ints?
    Marshalling isn't so interesting, so we don't care :)

3.  DONE func (i \*Int) UnmarshalJSON(b []byte) error {

    allows to unmarshal negative ints


<a id="org0c7b056"></a>

### ./gabi/clsignature.go

1.  INPROGRESS func signMessageBlockAndCommitment(sk \*PrivateKey, pk \*PublicKey, U \*big.Int, ms []\*big.Int) (\*CLSignature, error)     :red:

    Algorithm 5.8 from Vuller
    
    1.  INPROGRESS Signatures are homomorphic?
    
        Does this lead to any attacks?


<a id="org6d0de05"></a>

### ./gabi/credential.go

1.  CreateDisclosureProof()     :red:

    implements alg 5.13 from 2014\_phd\_thesis:59
    i don't get this (74) line though
    
        ePrime := new(big.Int).Sub(randSig.E, new(big.Int).Lsh(bigONE, ic.Pk.Params.Le-1))
    
    the same also happens in CreateProof() see below
    
    1.  Answer:
    
        -   Comes from proof of knowledge about e. Optimmization. e is >
            than some LB. Subtract LB and do PK on smaller value. Then
            re-add later

2.  CreateProof()

    seems to implement lines 9-12 of alg 5.13 from
    2014\_phd\_thesis:59
    starts with the strange (seen elsewhere too):
    
        ePrime := new(big.Int).Sub(d.randomizedSignature.E, new(big.Int).Lsh(bigONE, d.pk.Params.Le-1))

3.  CreateDisclosureProofBuilder()

    DisclosureProofBuilder.z := 1 - is multiplied by the kss later
    in MergeProofPCommitment() but what is z? is it not from the
    issuers public key?  is this the same Z that is being
    reconstructed in proofs.go:reconstructZ() in Commit() you
    actually commit to the secret, using:
    
        d.z.Mul(d.z, Ae).Mul(d.z, Sv).Mod(d.z, d.pk.N)

4.  MergeProofPCommitment()

    says: TODO: Eventually replace skRandomizer with an array
    why need an array for the keyshare server? wanna have more than one keyshare server?


<a id="orgf87f841"></a>

### ./gabi/proofs.go

1.  reconstructZ()

    2014\_phd\_thesis:60 alg 5.14 (without the hash/comparison) - and quite differently (mixed up order) some parts, why?
    why does it do this:  A^{2^{l\_e - 1}}
    how does this work?


<a id="org498145e"></a>

### ./gabi/prooflist.go

1.  Verify()

    why is there a limit on keyshareservers
    and why does the verifier care about the keyshare servers, should that not be transparent to the verifier?


<a id="org64c8c86"></a>

### ./gabi/keys.go

1.  findMatch()

    Why must p != q mod 8? I don't see this in the IRMA lit.
    
    1.  Required for ZK proof from issuer to prove that modulus is product of two safeprimes


<a id="orgb49f938"></a>

# notes


<a id="org151fd14"></a>

## Keys


<a id="org7be3353"></a>

### does S of public key have order p' \* q'?


<a id="orgedd51f2"></a>

# useful links

<https://github.com/trailofbits/on-edge>
<https://blog.trailofbits.com/2019/11/07/attacking-go-vr-ttps/>
<https://godoc.org/golang.org/x/tools/go/analysis>
<https://github.com/securego/gosec>
<https://staticcheck.io/>


<a id="org9c66d24"></a>

# prime order multiplicative group

n should be a safe prime : n = 2p+1 - where n and p are primes
g should be any random number that satisfies g^((p-1)/2) == -1 mod p
<https://math.stackexchange.com/questions/23832/example-for-cyclic-groups-and-selecting-a-generator>
<https://crypto.stackexchange.com/questions/22716/generation-of-a-cyclic-group-of-prime-order>


<a id="orgf9b12f5"></a>

# quadratic residues

<https://crypto.stanford.edu/pbc/notes/numbertheory/qr.html>
<https://brilliant.org/wiki/quadratic-residues/>
<http://mathworld.wolfram.com/QuadraticResidue.html>
<https://en.wikipedia.org/wiki/Quadratic_residue>


<a id="org20d6951"></a>

# questions


<a id="orgbcc30a6"></a>

## p52 what does R (base) for each message mean?


<a id="org71a1977"></a>

### Answer:

The bases are random generators of QRn used here as in the generalized Pederson commitment scheme. So given a fixed generator R in QRn, R1,&#x2026;,Rj are simply R^{x1},&#x2026;,R^{xj} for some secret set {x1,&#x2026;,xj}. The secret set {xi}i is the secret key of the issuer, so the Ri's constitue part of the issuer's publickey (Alpar thesis pg 75).


<a id="org96829f1"></a>

## p53: actual signature generation process is similar to the rsa sig scheme - bleichenbacher / coppersmith / cryptonite talk


<a id="org4a1c5df"></a>

## what about range proofs? they're not in the smart card, but >65 changes with time passing&#x2026; need reissuance?


<a id="orgd627d7f"></a>

## Unlinkability:

J's current understanding is that the protocol itself provides
unlinkability under the assumption that the disclosed attributes
themselves do not make users traceable (see first sentence of Alpar
3.3.5). Does this assumption hold IRL? (note: this might differ from
the actual IRMA implementation. Still need to check)


<a id="org6d01a78"></a>

### Elaboration:

Need to distinguish kinds of information: 1) Attributes disclosed within the protocol, 2) External information such as IP addresses. The question above was referring to 1). IRMA makes no guarantees about 2).


<a id="orga8dacfa"></a>

# Camenisch–Lysyankaya blind sigs


<a id="org8c8db79"></a>

## issuing


<a id="orga5651b1"></a>

### blind commit - aggregate messages into U with blinding value v\` -> (U,v')


<a id="org6ffc823"></a>

### proof for correctness of U


<a id="org8fe91a5"></a>

### verify proof of correctness of U


<a id="org74c47ef"></a>

### blind sign -> (A,e,v'')


<a id="org96c57d6"></a>

### proof for correctness of A


<a id="org4c4b068"></a>

### verify proof of correctness of A


<a id="org5368184"></a>

### finalize signature -> (A, e, v)


<a id="org2ac8d14"></a>

## proving


<a id="orga8e86be"></a>

### randomize sig -> (A', e, v')


<a id="orgfb17a0f"></a>

### proof of knowledge of sig


<a id="org33ecee6"></a>

### verify proof


<a id="org573f57b"></a>

## keyshare server

sk is split in two parts, user + keyshare server
sk is only used in proofs, and never constructed
during issuance to enforce the usage of a keyshare server, the issuer gets the two seperate proofs and combines them. the proof of the keyshare server is signed by the keyshare server and verified by the issuer.
during prooving the app combines the proof of the keyshare server with its own proof for sk, and thus creates a proof for ks\_u+sk\_kss
see picture 2


<a id="org862bd1d"></a>

## groups

normally you do t = c\*s + w mod p. but p the group order the secret key of the issuer
c and s are 256 bits, and w is (2\*256)+128 bits, so it drowns out the values of c and s and does not need a modulo

W,Ri, A, S eleme QRn - n = pq , p = 2p'+1, q = 2q'+1

order of the exponents of W,Ri,A,S is p'\*q'

e is a random prime, v is a random, how big should they be?


<a id="org52f17bd"></a>

# irmago

<https://irma.app/docs/>

first attr is always the sk
2nd attr is always the metadata attribute which is always disclosed and contains the credentialtype (e.g. pbdf.gemeente.personalData) and issuance and expiration.


<a id="orgdc821f6"></a>

## Verifier needs

-   Offer different combinations of attributes for user to verify
-   verify that the disclosed attributes are indeed matching the requirements


<a id="orgc26c6e8"></a>

## Client

-   irmaclient.go
-   Must be able to determine if it contains the attributes required by the verifier


<a id="org3145e02"></a>

### session.go

-   Contains interface for the app and session logic


<a id="org1c2ab46"></a>

### storage.go

-   Handles attribute loading and storage


<a id="orgc6877d0"></a>

## Server

-   Contains core component in internal/servercore used by all server components
    -   Server/irmaserver/main.go wraps the above files


<a id="org896bcf9"></a>

## git hash

36ab84c97ac789aa4df4a03fbf7ea66fe6ab341e


<a id="orgdbfa34c"></a>

## deps


<a id="org98b1014"></a>

### <https://github.com/sirupsen/logrus>


<a id="org91625b6"></a>

## files


<a id="orgce0aae4"></a>

### tests

1.  ./server/api\_test.go

2.  ./server/requestorserver/conf\_test.go

3.  ./server/requestorserver/auth\_test.go

4.  ./internal/test/testdata.go

5.  ./internal/sessiontest/manual\_session\_test.go

6.  ./internal/sessiontest/server\_test.go

7.  ./internal/sessiontest/session\_test.go

8.  ./internal/sessiontest/keyshare\_test.go

9.  ./internal/sessiontest/handlers\_test.go

10. ./internal/sessiontest/legacy\_test.go

11. ./internal/sessiontest/logs\_test.go

12. ./internal/sessiontest/main.go

13. ./internal/sessiontest/requestor\_test.go

14. ./internal/sessiontest/main\_test.go

15. ./irmaclient/irmaclient\_legacy\_test.go

16. ./irmaclient/irmaclient\_test.go

17. ./irmaclient/irmaclient\_keyshare\_test.go

18. ./irmago\_test.go


<a id="org73dfdf4"></a>

### pass1


<a id="org808e591"></a>

### todo


<a id="org2ea8d2e"></a>

### done

1.  ./irmago/internal/servercore/api.go

    1.  func (s \*Server) verifyConfiguration(configuration \*server.Configuration) error {
    
        -   Includes Mul of sk.P and sk.Q in L140, but it's hard to see how this is a potential vulnerability
            probably not an issue, since this is done at the start of the server, no adversarial input/timing possible remotely.
            of course if a local attacker is able to cause restarts and do local timing this is still a thing
        -   Sketchy email address check
            maybe use <https://golang.org/pkg/net/mail/#ParseAddress> instead
    
    2.  func (s \*Server) validateRequest(request irma.SessionRequest) error {
    
        -   wraps Validate from requests.go
    
    3.  func (s \*Server) handleProtocolMessage(

2.  ./irmago/internal/servercore/handle.go

    -   Implements state machine, wrapping gabi functions.
    -   Can we fuzz this?
    -   How do we get into StatusInitialized? - it is initialized to this value in newSession
    
    1.  func (session \*session) handleGetRequest(min, max \*irma.ProtocolVersion) (irma.SessionRequest, \*irma.RemoteError) {
    
        StatusInitialized -> StatusConnected
    
    2.  func (session \*session) handlePostSignature(signature \*irma.SignedMessage) (\*irma.ProofStatus, \*irma.RemoteError) {
    
        StatusConnected -> StatusDone
    
    3.  func (session \*session) handlePostDisclosure(disclosure \*irma.Disclosure) (\*irma.ProofStatus, \*irma.RemoteError) {
    
        StatusConnected -> StatusDone
    
    4.  func (session \*session) handlePostCommitments(commitments \*irma.IssueCommitmentMessage) ([]\*gabi.IssueSignatureMessage, \*irma.RemoteError) {
    
        StatusConnected -> StatusDone

3.  ./irmago/internal/servercore/sessions.go

    1.  func (s \*memorySessionStore) deleteExpired() {
    
        -   Ensure no race conditions
        
        afaics no race conditions

4.  ./irmago/internal/servercore/helpers.go

    1.  func (session \*session) checkCache(message []byte, expectedStatus server.Status) (int, []byte) {
    
        Check if this can be used as a timing oracle
        checkCache uses \`message\` as a key to look up the response. in this fn \`message\` is a fn param, and also in the parent HandleProtocolMessage
        HandleProtocolMessage is called by server/irmaserver/main.go HandlerFunc and only set if the HttpMethod is POST:
        
            if r.Method == http.MethodPost {
            	if message, err = ioutil.ReadAll(r.Body); err != nil {
        
        however in internal/servercore/api.go this code is run:
        
            if method == http.MethodGet {
            	status, output = session.checkCache(message, server.StatusConnected)
        
        checkCache uses message in the following way
        
            if sha256.Sum256(session.responseCache.message) != sha256.Sum256(message) ||
            	session.lastActive.Before(time.Now().Add(-retryTimeLimit)) ||
            	session.status != expectedStatus {
            	return server.JsonResponse(nil, session.fail(server.ErrorUnexpectedRequest, ""))
            }
            return session.responseCache.status, session.responseCache.response
        
        <https://play.golang.org/p/pyUwLwy-u-c>
        
            package main
            
            import (
            	"fmt"
            	"crypto/sha256"
            )
            
            func main() {
            	a := make([]byte,0,16)
            	fmt.Println(sha256.Sum256(nil))
            	fmt.Println(sha256.Sum256(a))
            }
        
        outputs:
        
            [227 176 196 66 152 252 28 20 154 251 244 200 153 111 185 36 39 174 65 228 100 155 147 76 164 149 153 27 120 82 184 85]
            [227 176 196 66 152 252 28 20 154 251 244 200 153 111 185 36 39 174 65 228 100 155 147 76 164 149 153 27 120 82 184 85]
        
        in internal/servercore/api.go you can trigger this by sending a GET request with a valid session id token, and a zerolength noun. what does that mean?
        
        for the other cases of checkCache there is always a message (either disclosure/sign or issuance commitments/proofs) so this message should not be guessable.
    
    2.  fc (s \*Server) validateIssuanceRequest(request \*irma.IssuanceRequest) error {
    
        -   Attributes have expiration dates.
        -   The default is half a year if none is given.
        -   Expired credentials cannot be signed
    
    3.  func (session \*session) getProofP(commitments \*irma.IssueCommitmentMessage, scheme irma.SchemeManagerIdentifier) (\*gabi.ProofP, error) {
    
        -   Uses jwt. Should look into it to make sure it does what it's supposed to.
        
        uses a rsa.PublicKey via an interface{} that is passed to jwt.parseWithClaims() - if strong typesafety applies no problem, otherwise: alarm
        is being called from internal/servercore/handle.go in fn handlePostCommitments() which is called during issuance and is the proof of the keyshare servers part of its half of the secret key.
        this means, even if we can forge a jw token, all we can do is to replace the keyshare servers share with our own, which means during verification this needs to be the same or the verification fails.
    
    4.  var eventHeaders = [][]byte{[]byte("Access-Control-Allow-Origin: \*")}
    
        -   Any origin can send forwarded requests.
    
    5.  func purgeRequest(request irma.RequestorRequest) irma.RequestorRequest {
    
        -   Uses reflection to make copy of requests, maybe breaks type safety or causes other problems
        
        copy only used in logging of requests

5.  ./irmago/credinfo.go

6.  ./irmago/server/irmad/cmd/run.go

7.  ./irmago/server/irmad/cmd/check.go

8.  ./irmago/server/irmac/capi.go

9.  ./irmago/server/errors.go

10. ./irmago/internal/disable\_sigpipe/noop.go

11. ./irmago/irmaclient/doc.go

12. ./irmago/version.go

13. ./irmago/identifiers.go

14. ./irmago/descriptions.go

15. ./irmago/irma\_signature.go

16. ./irmago/server/irmad/cmd/root.go

17. ./irmago/messages.go

18. ./irmago/internal/disable\_sigpipe/disable\_sigpipe.go

19. ./irmago/irmaclient/logs.go

20. ./irmago/irmaclient/credential.go

21. ./irmago/irmaclient/updates.go

22. ./irmago/schemes.go

23. ./irmago/irma/main.go

24. ./irmago/irma/cmd/server.go

25. ./irmago/irma/cmd/scheme.go

26. ./irmago/irma/cmd/download.go

27. ./irmago/irma/cmd/meta.go

28. ./irmago/irma/cmd/session.go

29. ./irmago/irma/cmd/issuer.go

30. ./irmago/irma/cmd/update.go

31. ./irmago/irma/cmd/sign.go

32. ./irmago/irma/cmd/root.go

33. ./irmago/irma/cmd/issuer-keygen.go

34. ./irmago/irma/cmd/verify.go

35. ./irmago/legacy.go

36. DONE what is a static session <https://irma.app/docs/irma-server/#static-irma-qrs>

    -   it seems it can only be towards a verifier
    -   it needs a callback url
    -   it might depend on jwt for authentication - otherwise it leaks
        the callback url, which seems to be sensitive, as it needs to be
        protected by https otherwise

37. irmago/server/api.go func LogFatal(err error) error {

    -   Does triggering fatal errors cause sensitive information to be written to logs on disk?

38. ./irmago/server/requestorserver/server.go

    -   Lots of complexity. Need to come back to this after looking at the rest of the code
    
    1.  func (s \*Server) attachClientEndpoints(router \*chi.Mux) {
    
        -   If apache or nginx server is running in front of the irma
            server, **and** we are able to perform remote file inclusion
            then we can potentially serve malicious static files
    
    2.  func (s \*Server) logHandler(typ string, logResponse, logHeaders, logFrom bool) func(next http.Handler) http.Handler {
    
        -   ReadAll can lead to DOS if a slow connection blocks the
            function return or if the server is flooded with traffic
        -   A timeout is needed and
        -   A size limit is needed
    
    3.  func (s \*Server) handleCreate(w http.ResponseWriter, r \*http.Request) {
    
        -   Again doing a readAll on r.Body. Same issues as in logHandler
    
    4.  func (s \*Server) handleCreate(w http.ResponseWriter, r \*http.Request) {     :pass1:
    
        -   Seems to combine sort of generic session creation with also
            request validation wrt issuance or disclosure requests
        -   The callbackurl is not sanity checked to make sure it isn't an attacker's server
    
    5.  func (s \*Server) handleCreateStatic(w http.ResponseWriter, r \*http.Request) {     :pass1:
    
    6.  func (s \*Server) handleJwtProofs(w http.ResponseWriter, r \*http.Request) {
    
        -   What is the relationship between the token and the claims? Where in the IRMA protocol is this described?
    
    7.  func (s \*Server) StaticFilesHandler() http.Handler {
    
        -   Look into possibility of path traversal

39. ./irmago/irmaclient/handlers.go

    -   Can we DOS users with the pin attempt control?

40. ./irmago/verify.go

    -   Can we create confusing ConDisCons to mess with verification?
    
    1.  func (pl ProofList) Expired(configuration \*Configuration, t \*time.Time) bool {
    
        -   comment above the function: s/is specified/is expired/g
    
    2.  func (d \*Disclosure) extraIndices(condiscon AttributeConDisCon) []\*DisclosedAttributeIndex {
    
        -   L 181. Should this actually raise an error? I don't think it
            should be possible to have a disclosed attribute index greater
            than the length of a condiscon
    
    3.  func ParseApiServerJwt(inputJwt string, signingKey \*rsa.PublicKey) (map[AttributeTypeIdentifier]\*DisclosedAttribute, error) {
    
        has a hardcoded rsa keytype, if you pass it the classical hmac signed jwt will it work? we tried a couple of things:
        <https://play.golang.org/p/2EbkGWVvjiG>
        <https://play.golang.org/p/JrqO6b2mU56>
        <https://play.golang.org/p/uPM07NiFGrL>
        it is non-conclusive if the typesafety, especially
        <https://github.com/dgrijalva/jwt-go/blob/master/hmac.go#L53>
        actually prevents this or not.
        
        to verify this lead, try to get a valid token, feed it to this
        fun to make sure it works then change it to hmac and see if it
        does or not.
        
            package main
            
            import (
              "crypto/rsa"
              "fmt"
            )
            
            type KeyFunc func() interface{}
            
            func checkType(keyFunc KeyFunc) bool {
              key := keyFunc()
              if _, ok := key.([]byte); ok {
            	  fmt.Println("This is bad. rsa Key interpreted as bytes")
            	  return false
              }
              if _, ok := key.(*rsa.PublicKey); ok {
            	  fmt.Println("This is indeed an RSA Public Key. Woohoo!")
            	  return true
              }
              fmt.Println(fmt.Sprintf("nothing detected: %T", key))
              return false
            }
            
            
            
            func main() {
              signingkeyRSA := &rsa.PublicKey{}
              success := checkType(func() interface{} {return signingkeyRSA})
              if success {
            	  fmt.Println("Done!")
              }
            }
        
        This shows that the key type is preserved even though it is returned
        as a generic interface instead of as type \*rsa.PublicKey


<a id="org52d68f7"></a>

## open questions

-   Brinda pg 60 (40), "We use the hash function h2 to compute the
    challenge in the SD Proof. We use two hash functions h1 and h2
    for messages and challenges respectively to separate the domain
    and range of these hash functions"
    
    Is this happening?
    A: The domains are separated between signing and disclosures by the inclusion of the sign boolean in h2.


<a id="org967e5c1"></a>

### ./gabi/keys.go

-   What is the purpose of the counter in the PrivateKey struct?
    A: The counter is a serial number for the keypair to keep track of how many are used.


<a id="org9a93038"></a>

### ./irmago/server/requestorserver/server.go  func (s \*Server) StaticFilesHandler() http.Handler {

-   Is this cutting off "*irma*" from the URL?
-   What happens if my url ends with "*superhappyluckyfunirma*"? Is this documented anywhere?
-   Don't really understand this function. Please explain :D
    A: Automates the integration of irma into websites by handling static files.


<a id="orgf4e1265"></a>

### ./irmago/server/requestorserver/server.go func (s \*Server) handleJwtProofs(w http.ResponseWriter, r \*http.Request) {

-   What is the relationship between the token and the claims?
    Where in the IRMA protocol is this described?

A: With every session there are two tokens: 1 going to
  requestor, 1 going to app. sessiontoken variable used by
  requestor to identify session. Claims are the message being
  signed. Not described in the IRMA docs, but information at
  <https://irma.app/docs/api-irma-server/#get-session-token-result-jwt>


<a id="org67d09c2"></a>

### ./irmago/irmaclient/handlers.go

1.  func (h \*keyshareEnrollmentHandler) RequestIssuancePermission(request \*irma.IssuanceRequest, candidates [][][]\*irma.AttributeIdentifier, ServerName irma.TranslatedString, callback PermissionHandler) {

    -   Unused parameters?
        A: The parameters in the signature are satisfying an interface
    -   Why is this done in a loop?
        A: It's a map and the key to the only value contained in it is unknown

2.  func (h \*keyshareEnrollmentHandler) RequestPin(remainingAttempts int, callback PinHandler) {

    -   Why is callback called when remainingattempts < 0?
        A: We don't know how many attempts remaining until the first request

3.  func (h \*keyshareEnrollmentHandler) Success(result string) {

    -   What is going on here?
        A: Error will be caught and handled


<a id="org4a51b2e"></a>

### ./irmago/irmaclient/client.go

1.  func New(

    -   Why is it the responsibility of the caller that the FS
        protections are correct? This could be easily checked in the
        function, since the exitence of the directory is asserted here
        as well.
    
        there exists a (properly // protected) directory at storagePath!
    
    A: Unix permission should be checked and it is apparently not
    possible from Go to verify directory permissions in iOS

2.  func (client \*Client) RemoveAllCredentials() error {

    -   In remove() the removed attributes are cleared form the
        credentialsCache, but this doesn't happen here. It should.
        A: Finding

3.  func (client \*Client) credCandidates(con irma.AttributeCon) credCandidateSet {

    -   It isn't clear how the comment below is enforced here. The
        AttributeCon isn't by default sorted by credential type, is
        it?
    
        // If one credential type occurs multiple times in the
        // conjunction it is not added twice.
    
    A: This is handled in requests.go

4.  func (client \*Client) ConfigurationUpdated(downloaded \*irma.IrmaIdentifierSet) error {

    -   If new schema deletes more attributes than are added,
        then diff <= 0 and nothing updates on the client side.
        A: Attributes are never deleted in updates, but maybe can be triggered by an attacker.


<a id="orgd680907"></a>

### TLS

-   Is TLS being enforced everywhere it should be?
    A: There should be checks that TLS is enforced always unless for some reason user opts out


<a id="orgd14127f"></a>

### ./irmago/attributes.go

-   Why is the timestamp epoch only resolved to weeks?

A: Unix timestamps resolved to ms would weaken unlinkability as it
  would reduce anonymity

-   Why do the metadata attribute fields lengths not match the
    amount of memory actually consumed by each field? In other
    words why do we need the function setField?

A: Locked in from legacy code

1.  func (al \*AttributeList) EqualsExceptMetadata(ol \*AttributeList) bool {

    -   If this is ever used with hidden attributes then it could
        reveal timing information about secret attributes. Can easily
        be made constant time by completing the entire loop before
        returning, though.

2.  func decodeattribute(attr \*big.int, metadataversion byte) \*string {     :Question:

        	bi := new(big.Int).Set(attr)
        	if metadataVersion >= 3 {
        		if bi.Bit(0) == 0 { // attribute does not exist              // Why is this checking if the attribute is even?
        			return nil
        		}
        		bi.Rsh(bi, 1)
        	}
        	str := string(bi.Bytes())
        	return &str
        }
    
    A: In the new version the first bit indicates presence or absence
    of an attribute, so the value is shifted left and 1 is added


<a id="org685da7f"></a>

### ./irmago/requests.go

this is a scary error message attacking the sanity of average
					   users if they ever get confronted with it:
					   return errors.New("Multiple non-singletons
					   within one inner conjunction are not allowed")

1.  func (c AttributeCon) CredentialTypes() []CredentialTypeIdentifier {

        var result []CredentialTypeIdentifier
        
        for _, attr := range c {
        	typ := attr.Type.CredentialTypeIdentifier()
        	if len(result) == 0 || result[len(result)-1] != typ {
        		result = append(result, typ)
    
    this last condition adds the type only if the previous one is not the
    same, but if we feed it alternating types, then the result will
    contain the same type multiple times. what can we do with this?
    
    the next function \`func (c AttributeCon) Validate() error\` actually
    enforces that the same credentialtypes need to be grouped together.

2.  func (ar \*AttributeRequest) Satisfy(attr AttributeTypeIdentifier, val \*string) bool {

    we tried to evaluate the boolean function here, but with these caveats:
    
    -   this function evaluates ar.NotNull, however it negates it, the
        double negation makes it hard to think about this, thus we renamed
        this attribute to Required.
    -   the we eliminated the type matching condition since this is trivial
    
    we looked at the following variants, and the 1st two we think should
    evaluate to true instead of false, the rest is also listed but only
    for reference.
    
        False == { Required: False, Value: 'xxx'}.Satisfy('12345678')
        False == { Required: False, Value: 'xxx'}.Satisfy(nil)
        
        True == { Required: False, Value: nil}.Satisfy('12345678')
        True == { Required: True, Value: nil}.Satisfy('12345678')
        True  == { Required: False, Value: 'xxx'}.Satisfy('xxx')
        True  == { Required: True, Value: 'xxx'}.Satisfy('xxx')
        False == { Required: True, Value: 'xxx'}.Satisfy('12345678')
        False == { Required: True, Value: 'xxx'}.Satisfy(nil)
        False == { Required: True, Value: nil}.Satisfy(nil)
        True  == { Required: False, Value: nil}.Satisfy(nil)

3.  func (cdc AttributeConDisCon) Validate(conf \*Configuration) error {

    -   The logic here is confusing. Why cannot multiple
        non-singletons be part of a single bottom-level conjunction?
    
    A: Don't want the situation where multiple email addresses
    and/or phone numbers can be passed to an inner conjunction

4.  func parseTimestamp(bts []byte) (\*Timestamp, error) {

    -   Use built-in string parsing tools like <https://golang.org/pkg/strings/#TrimSpace>


<a id="orga2f2dc4"></a>

### ./irmago/verify.go

1.  func (d \*Disclosure) extraIndices(condiscon AttributeConDisCon) []\*DisclosedAttributeIndex {

    -   L 181. Should this actually raise an error? I don't think it
        should be possible to have a disclosed attribute index greater
        than the length of a condiscon


<a id="org825a786"></a>

## findings


<a id="org1407ed4"></a>

### ./irmago/irmaclient/keyshare.go

-   nonce used in HashedPin is not a nonce! It's a salt.
-   the function HashedPin, uses a simple sha256 as a password
    derivation function, which makes offline bruteforce
    pin-recovery attacks extremely cheap if the hash and the nonce
    is known. it is recommended to use a memory/time hard password
    derviation function like argon2i
-   the "authentication" protocol that sends over a hashed pin,
    allows for a MiTM attacker to apply a pass-the-hash attack,
    which allows him to authenticate towards the keyshare server
    without knowing the pin. it is recommended to protect this
    against replay attacks
-   Setting ks.pinCheck = false in L375 unnecessary

1.  func (ks \*keyshareServer) HashedPin(pin string) string {

    -   Better time and memory hard password hashing function, like
        argon2i, especially if hashes are stored locally and
        pass-the-hash applies.

2.  func startKeyshareSession(

    -   Can user bypass entering pin if the check in line 224 is commented out?


<a id="org73da078"></a>

### ./irmago/irmaconfig.go

1.  func (conf \*Configuration) UpdateSchemeManager

    -   Timestamp on server is not checked for validity, so attacker
        can force an update to an old, broken scheme
    -   Timestamp should be signed and somehow bound to the
        index. Even if the timestamp on the server were signed, it's
        possible to replay an old signed timestamp. But at the moment they are not signed.


<a id="org83d16de"></a>

### ./irmago/server/api.go

1.  func LogRequest(typ, method, url, from string, headers http.Header, message []byte)

    -   from field is storing IP address probably? This can potentially deanonymize clients

2.  [/home/i/ros/irma/gabi-audit/irmago/server/api.go:211] - G104 (CWE-703): Errors unhandled. (Confidence: HIGH, Severity: LOW)

    > w.Write([]byte(str)) - // TP - This could potentially return an error and it is not handled

3.  [/home/i/ros/irma/gabi-audit/irmago/server/api.go:204] - G104 (CWE-703): Errors unhandled. (Confidence: HIGH, Severity: LOW)

    > w.Write(bts) - // TP - Same as before


<a id="org6856d08"></a>

### ./irmago/server/requestorserver/server.go func (s \*Server) logHandler(typ string, logResponse, logHeaders, logFrom bool) func(next http.Handler) http.Handler

-   ReadAll can lead to DOS if a slow connection blocks the
    function return or if the server is flooded with traffic
-   A timeout is needed and
-   A size limit is needed


<a id="org4ff1023"></a>

### ./irmago/server/irmaserver/main.go func (s \*Server) HandlerFunc() http.HandlerFunc

in line 123 the server is reading unbounded from the network,
either trickling slowly or very large amounts of data can
exhaust resources. recommendation is to limit the amount of data
read and set a timeout for finishing a request.

    if message, err = ioutil.ReadAll(r.Body); err != nil {


<a id="org89bf6f7"></a>

### ./irmago/internal/fs/fs.go

1.  func EnsureDirectoryExists(path string) error {

    -   Doesn't actually check that path is a directory. Could be a file

2.  func Copy(src, dest string) error {

    -   ioutil.Readall() vulnerable for all reasons as mentioned
    -   Not used anywhere in irmago

3.  func ReadKey(key, path string) ([]byte, error) {

    -   if path is a link to a pipe or /dev/zero then this would encounter some problems


<a id="orgcdf3d97"></a>

### ./irmago/transport.go

1.  func NewHTTPTransport(serverURL string) \*HTTPTransport {

    -   L52 "// TODO fix this"

2.  func (transport \*HTTPTransport) GetSignedFile(url string, dest string, hash ConfigurationFileHash) error {

    -   Can we overwrite protected files like /etc/shadow or .ssh/authorized\_keys?
    -   Doesn't check if we can write to dest
    -   Gadget to write files?
    -   Does no logging


<a id="org82163fc"></a>

### ./irmago/server/requestorserver/conf.go

1.  func (conf \*Configuration) validatePermissionSet()

    validates a permission of '**.**.\*.\*' as correct. but does it make sense?

2.  func (conf \*Configuration) readTlsConf(cert, certfile, key, keyfile string) (\*tls.Config, error) {

    -   Bad curve preferences (mentioned elsewhere)
    -   Supporting weaker cipher suites for no reason
        
        -   tls.TLS\_ECDHE\_RSA\_WITH\_AES\_256\_CBC\_SHA,
            -   tls.TLS\_RSA\_WITH\_AES\_256\_CBC\_SHA,
        
        There's no reason to support these cipher suites, since
        backwards compatibility with older shitty browsers isn't an
        issue for this project.
    
    -   Better to use TLS13 as default, and use curve 25519 and cipher
        suites including chacha/poly1305


<a id="orgd3f3589"></a>

### ./irmago/irmaclient/legacy.go

1.  func (f \*fileStorage) load(dest interface{}, path string) (err error) {

    -   ReadFile in L41 can potentially read a symlink to /dev/zero


<a id="org4cf85dd"></a>

### ./irmago/irmaclient/storage.go

Secret key is only protected by file system access rights of the db
In the file ./irmago/irmaclient/storage.go at line 239, the function
LoadSecretKey() creates and stores the users secret key, besides OS FS
protections nothing else protects this. Considering other systems like
gpg or ssh they at least encrypt these, or even store these in
dedicated tokens, or in the case of signal keys get stored in TPM/SGX.


<a id="org595fa93"></a>

### ./irmago/irma/cmd/genkeypair.go

1.  func init() {

    -   Default key length is 1024, but this is unnecessarily short. 2048 or 4096 would be better.


<a id="org67b66fb"></a>

### ./irmago/irma/cmd/keygen.go

-   The P-256 curve is not a safe curve according to <https://safecurves.cr.yp.to/>
-   Better instead to use ed25519 from crypto library


<a id="orgd964397"></a>

### ./irmago/irma/cmd/request.go

:pick up here next time:

-   line 162

    if len(disclose) != 0 {}

should be

    if len(disclose) != 0 && len(issue) == 0 {}

since if both disclose and issue are not null, you are checking attrs twice unnessarily and overwriting the value of request in the second block.

1.  func startServer(port int) {

    -   This starts a server available for any IP address and does not
        use TLS. If it's local then TLS isn't necessary, but it should
        specify an IP 127.0.0.1, otherwise it should use
        ListenAndServeTLS, right?
    
    A: This is used for testing from the command line. Listening on
      TLS isn't necessary here. Needs to be publicly reachable for
      IRMA app.

2.  func addRequestFlags(flags \*pflag.FlagSet) {

    -   default auth-method should not be "none", since generally
        better to opt-in to insecurity than opt-out.
    
    A: This was a choice made in order to make set-up as simple as
      possible for people who want to experiment. A warning is issued
      whenever auth-method is set to none.


<a id="orga7f6f0c"></a>

### ./irmago/requests.go

1.  func (c AttributeCon) Satisfy(proofs gabi.ProofList, indices []\*DisclosedAttributeIndex, conf \*Configuration) (bool, []\*DisclosedAttribute, error) {

        func (dc AttributeDisCon) Satisfy(proofs gabi.ProofList, indices []*DisclosedAttributeIndex, conf *Configuration) (bool, []*DisclosedAttribute, error) {
        	for _, con := range dc {
        		satisfied, attrs, err := con.Satisfy(proofs, indices, conf)
        		if satisfied || err != nil {
        			return true, attrs, err
    
    the condition should probably "&&" insteadd of "||" since we can construct a response that fails in extractAttribute in
    
        func (c AttributeCon) Satisfy(proofs gabi.ProofList, indices []*DisclosedAttributeIndex, conf *Configuration) (bool, []*DisclosedAttribute, error) {
        ....
        		attr, val, err := extractAttribute(proofs, index, conf)
        		if err != nil {
        			return false, nil, err
        		}
    
    and if we do so, we can make Satisfy return true, which should really be false.


<a id="org6fbc36c"></a>

### ./irmago/irmaconfig.go

1.  QUESTION func (conf \*Configuration) PrivateKey(id IssuerIdentifier) (\*gabi.PrivateKey, error) {

    -   Why are we doing this sorting thing?

2.  func (conf \*Configuration) DeleteSchemeManager(id SchemeManagerIdentifier) error {

    -   Can we perform path traversal to delete whole directories?
    
    enforce that the schememgr id is only alphanumerics
    but seems difficult to trigger

3.  func (conf \*Configuration) CopyManagerFromAssets(scheme SchemeManagerIdentifier) (bool, error) {

    -   Doesn't seem to check if path makes sense. Potential deletion gadget
    
    enforce that the schememgr id is only alphanumerics
    but seems difficult to trigger

4.  QUESTION func DownloadSchemeManager(url string) (\*SchemeManager, error) {

    -   TODO? L683

5.  func (conf \*Configuration) RemoveSchemeManager(id SchemeManagerIdentifier, fromStorage bool) error {

    -   id.String() in L709 not checked. Can we do path traversal?
        enforce id being alphanumeric
    -   Is the !conf.Readonly check correct? If fromStorage is true then a readonly conf can still be deleted
    -   use path.join instead of sprintf

6.  FINDING func (conf \*Configuration) InstallSchemeManager(manager \*SchemeManager, publickey []byte) error {

    -   L745 path is constructed in a unix-specific way. Better to use filepath.Join for portability and cleaner.
    -   If the manager.URL specifies an <http://> scheme then a MITM can
        forge arbitrary attributes to a verifier
    -   calls DownloadSchemeManagerSignature , which doesn't enforce https either
    
    this fn is called by irmaclient/session.go, schemes.go,
    irma/cmd/download.go, and only in schemes.go provides a public
    key, in the other two cases the public key is being downloaded
    and stored over any previously existing public key, which is
    then used to verify the signature on index/index.sig in
    irmaclient this only affects the client, the cmd/download
    however can be done by any party and corrupts those.
    
    1.  irmaclient/session.go
    
        when called by the irmaclient, this happens:
        
            func (session *session) managerSession() {
            	defer session.recoverFromPanic()
            
            	// We have to download the scheme manager description.xml here before installing it,
            	// because we need to show its contents (name, description, website) to the user
            	// when asking installation permission.
            	manager, err := irma.DownloadSchemeManager(session.ServerURL)
        
        just downloads a completely correct scheme mgr, without verifying anything actually
        
            if err != nil {
            	session.Handler.Failure(&irma.SessionError{ErrorType: irma.ErrorConfigurationDownload, Err: err})
            	return
            }
            
            session.Handler.RequestSchemeManagerPermission(manager, func(proceed bool) {
        
        which is presented to the user to grant permission to install this. who of course trusts the correct data
        
            if !proceed {
            	session.Handler.Cancelled() // No need to DELETE session here
            	return
            }
            if err := session.client.Configuration.InstallSchemeManager(manager, nil); err != nil {
        
        here InstallSchemeManager is called, which downloads the same scheme
        mgr again, but also downloads the pubkey (since it's nil), and in this
        second request a MiTM can actually change both the scheme mgr and the
        pubkey and thus install/overwrite any scheme mgr with arbitrary
        content on the client.
        
        managerSession is called by newSchemeSession() which gets its URL from
        a QR code, and newSchemeSession() is called by NewSession()
        
        similar can be triggered from irma/cmd/download but here the URL needs
        to be supplied as a param on the cmd line, but for a MiTM attacker
        this should not be an issue anyway.
        
        scheme mgr key revocation, validity, updates, the whole key lifecycle
        for scheme mgr keys needs to be figured out and developed.  as a first
        fix key pinning (hardcoding the pbdf pubkey) is a fix. and every
        scheme mgr download should be checked against this. maybe signing
        description xml seperately from the index also helps, since you don't
        need to dl the index and all files in it to verify the sig.

7.  func (i SchemeManagerIndex) String() string {

    -   path can contain newline and hex chars, so can insert extra
        paths to unintended files but this is probably a very minor
        issue, since the paths are from a to-be signed scheme mgr.

8.  func (conf \*Configuration) checkUnsignedFiles(name string, index SchemeManagerIndex) error {

    -   fs.WalkDir() expects the caller to check for symlinks/loops,
        but this doesn't happen. Could exhaust memory if symlink
        present.

9.  func (conf \*Configuration) UpdateSchemeManager(id SchemeManagerIdentifier, downloaded \*IrmaIdentifierSet) (err error) { l

    -   we can use the index to create arbitrary files in the
        filesystem for example *etc/passwd or
        /home/<user>*.ssh/authorized\_keys
    -   Timestamp on server is not checked for validity, so attacker
        can force an update to an old, broken scheme
    -   Timestamp should be signed and somehow bound to the
        index. Even if the timestamp on the server were signed, it's
        possible to replay an old signed timestamp. But at the moment they are not sig


<a id="org476fb53"></a>

### ./irmago/timestamp.go

-   Section 3.4 of Brinda's thesis

1.  func TimestampRequest(message string, sigs []\*big.Int, disclosed [][]\*big.Int, new bool, conf \*Configuration) (

    -   From Brinda's thesis, page 50,
    
        Furthermore, we denote the hash functions used in
        the timestamping scheme by h3 and h4. By this, we separate the domains
        and ranges of the hash functions used in timestamping from the hash
        functions h1 and h2 used in the previous sections for computing
        message digests and challenges in the zero-knowledge proofs. The
        timestamping for ABSs in the IRMA system takes place as described
        below and also in Figure 3.4.involved in an ABS (output of CRandomise)
        is denoted by C and the attributes that will be disclosed in the ABS
        by {ai}i∈D. Furthermore, we denote the hash functions used in the
        timestamping scheme by h3 and h4. By this, we separate the domains and
        ranges of the hash functions used in timestamping from the hash
        functions h1 and h2 used in the previous sections for computing
        message digests and challenges in the zero-knowledge proofs. The
        timestamping for ABSs in the IRMA system takes place as described
        below and also in Figure 3.4.
    
    From what we can tell this domain separation does not happen,
    since SHA256 is used without any further salting. You can
    create "separate" functions by salting in a prefix value, as
    is done on page 5 of <https://tools.ietf.org/html/rfc6962#section-2.1>


<a id="org7c33bf2"></a>

## recommendations


<a id="org13cc2e3"></a>

### use strongly-typed keys: []byte for HMAC algorithms and \*rsa.PublicKey for RSA-based algorithms.

in ./irmago/server/requestorserver/auth.go

    type HmacAuthenticator struct {
    	hmackeys      map[string]interface{}
    type PublicKeyAuthenticator struct {
    	publickeys    map[string]interface{}

these two structs use non-typed values in the maps as values for
signing keys, while go-jwt actually supports strongly typed keys for
the auth algorithms.


<a id="orgbca131a"></a>

## gosec <https://github.com/securego/gosec>

    Results:
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/attributes.go]:
    
      > [line 9 : column 2] - could not import github.com/privacybydesign/gabi (invalid package name: "")
    
      > [line 10 : column 2] - could not import github.com/privacybydesign/gabi/big (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/descriptions.go]:
    
      > [line 8 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 9 : column 2] - could not import github.com/privacybydesign/irmago/internal/fs (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/internal/fs/fs.go]:
    
      > [line 12 : column 2] - could not import github.com/pkg/errors (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/internal/servercore/api.go]:
    
      > [line 16 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 17 : column 2] - could not import github.com/jasonlvhit/gocron (invalid package name: "")
    
      > [line 18 : column 2] - could not import github.com/privacybydesign/gabi (invalid package name: "")
    
      > [line 19 : column 2] - could not import github.com/privacybydesign/gabi/big (invalid package name: "")
    
      > [line 20 : column 2] - could not import github.com/privacybydesign/irmago (invalid package name: "")
    
      > [line 20 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 21 : column 2] - could not import github.com/privacybydesign/irmago/internal/fs (invalid package name: "")
    
      > [line 22 : column 2] - could not import github.com/privacybydesign/irmago/server (invalid package name: "")
    
      > [line 23 : column 2] - could not import github.com/sirupsen/logrus (invalid package name: "")
    
      > [line 61 : column 2] - undeclared name: irma
    
      > [line 79 : column 36] - undeclared name: irma
    
      > [line 81 : column 36] - undeclared name: irma
    
      > [line 108 : column 39] - undeclared name: irma
    
      > [line 121 : column 13] - undeclared name: irma
    
      > [line 168 : column 8] - undeclared name: irma
    
      > [line 177 : column 42] - undeclared name: irma
    
      > [line 184 : column 50] - undeclared name: irma
    
      > [line 197 : column 15] - undeclared name: irma
    
      > [line 210 : column 10] - undeclared name: irma
    
      > [line 225 : column 43] - undeclared name: irma
    
      > [line 364 : column 12] - undeclared name: irma
    
      > [line 365 : column 12] - undeclared name: irma
    
      > [line 366 : column 42] - undeclared name: irma
    
      > [line 370 : column 42] - undeclared name: irma
    
      > [line 399 : column 49] - undeclared name: irma
    
      > [line 404 : column 20] - undeclared name: irma
    
      > [line 405 : column 13] - undeclared name: irma
    
      > [line 414 : column 44] - undeclared name: irma
    
      > [line 419 : column 19] - undeclared name: irma
    
      > [line 420 : column 13] - undeclared name: irma
    
      > [line 429 : column 44] - undeclared name: irma
    
      > [line 434 : column 18] - undeclared name: irma
    
      > [line 435 : column 13] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/internal/servercore/handle.go]:
    
      > [line 5 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 25 : column 52] - undeclared name: irma
    
      > [line 25 : column 75] - undeclared name: irma
    
      > [line 25 : column 97] - undeclared name: irma
    
      > [line 58 : column 60] - undeclared name: irma
    
      > [line 62 : column 56] - undeclared name: irma
    
      > [line 62 : column 78] - undeclared name: irma
    
      > [line 62 : column 97] - undeclared name: irma
    
      > [line 69 : column 12] - undeclared name: irma
    
      > [line 76 : column 13] - undeclared name: irma
    
      > [line 85 : column 58] - undeclared name: irma
    
      > [line 85 : column 77] - undeclared name: irma
    
      > [line 85 : column 96] - undeclared name: irma
    
      > [line 92 : column 12] - undeclared name: irma
    
      > [line 98 : column 13] - undeclared name: irma
    
      > [line 107 : column 60] - undeclared name: irma
    
      > [line 107 : column 122] - undeclared name: irma
    
      > [line 121 : column 22] - undeclared name: irma
    
      > [line 128 : column 3] - pubkey declared but not used
    
      > [line 135 : column 15] - undeclared name: irma
    
      > [line 149 : column 13] - undeclared name: irma
    
      > [line 155 : column 35] - undeclared name: irma
    
      > [line 158 : column 35] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/internal/servercore/helpers.go]:
    
      > [line 11 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 11 : column 2] - could not import github.com/dgrijalva/jwt-go (invalid package name: "")
    
      > [line 14 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 17 : column 2] - could not import gopkg.in/antage/eventsource.v1 (invalid package name: "")
    
      > [line 17 : column 2] - "gopkg.in/antage/eventsource.v1" imported but not used
    
      > [line 44 : column 65] - undeclared name: irma
    
      > [line 77 : column 51] - undeclared name: irma
    
      > [line 98 : column 22] - undeclared name: irma
    
      > [line 102 : column 27] - undeclared name: irma
    
      > [line 110 : column 48] - undeclared name: irma
    
      > [line 110 : column 84] - undeclared name: irma
    
      > [line 112 : column 32] - undeclared name: irma
    
      > [line 122 : column 4] - undeclared name: jwt
    
      > [line 125 : column 17] - undeclared name: jwt
    
      > [line 140 : column 39] - undeclared name: eventsource
    
      > [line 146 : column 22] - undeclared name: eventsource
    
      > [line 152 : column 69] - undeclared name: irma
    
      > [line 152 : column 93] - undeclared name: irma
    
      > [line 156 : column 16] - undeclared name: irma
    
      > [line 170 : column 27] - undeclared name: irma
    
      > [line 170 : column 50] - undeclared name: irma
    
      > [line 182 : column 11] - undeclared name: irma
    
      > [line 183 : column 14] - undeclared name: irma
    
      > [line 190 : column 24] - undeclared name: irma
    
      > [line 196 : column 14] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/internal/servercore/sessions.go]:
    
      > [line 10 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 13 : column 2] - "gopkg.in/antage/eventsource.v1" imported but not used
    
      > [line 19 : column 19] - undeclared name: irma
    
      > [line 22 : column 20] - undeclared name: irma
    
      > [line 23 : column 19] - undeclared name: irma
    
      > [line 24 : column 19] - undeclared name: irma
    
      > [line 29 : column 16] - undeclared name: eventsource
    
      > [line 35 : column 16] - undeclared name: irma
    
      > [line 71 : column 23] - undeclared name: irma
    
      > [line 72 : column 23] - undeclared name: irma
    
      > [line 150 : column 36] - undeclared name: irma
    
      > [line 150 : column 57] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/internal/test/testdata.go]:
    
      > [line 15 : column 2] - could not import github.com/privacybydesign/irmago/internal/fs (invalid package name: "")
    
      > [line 16 : column 2] - could not import github.com/stretchr/testify/require (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/download.go]:
    
      > [line 9 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 10 : column 2] - could not import github.com/privacybydesign/irmago (invalid package name: "")
    
      > [line 10 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 11 : column 2] - could not import github.com/privacybydesign/irmago/internal/fs (invalid package name: "")
    
      > [line 12 : column 2] - could not import github.com/privacybydesign/irmago/server (invalid package name: "")
    
      > [line 13 : column 2] - could not import github.com/spf13/cobra (invalid package name: "")
    
      > [line 81 : column 15] - undeclared name: irma
    
      > [line 91 : column 15] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/genkeypair.go]:
    
      > [line 33 : column 2] - could not import github.com/privacybydesign/gabi (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/meta.go]:
    
      > [line 11 : column 2] - could not import github.com/privacybydesign/gabi/big (invalid package name: "")
    
      > [line 12 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 53 : column 15] - undeclared name: irma
    
      > [line 62 : column 10] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/request.go]:
    
      > [line 12 : column 2] - could not import github.com/dgrijalva/jwt-go (invalid package name: "")
    
      > [line 12 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 14 : column 2] - could not import github.com/mdp/qrterminal (invalid package name: "")
    
      > [line 15 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 19 : column 2] - could not import github.com/spf13/pflag (invalid package name: "")
    
      > [line 49 : column 26] - undeclared name: irma
    
      > [line 53 : column 10] - undeclared name: jwt
    
      > [line 62 : column 12] - undeclared name: jwt
    
      > [line 67 : column 12] - undeclared name: jwt
    
      > [line 68 : column 16] - undeclared name: jwt
    
      > [line 75 : column 9] - undeclared name: irma
    
      > [line 78 : column 44] - undeclared name: irma
    
      > [line 78 : column 68] - undeclared name: irma
    
      > [line 83 : column 21] - undeclared name: irma
    
      > [line 107 : column 51] - undeclared name: irma
    
      > [line 127 : column 56] - undeclared name: irma
    
      > [line 127 : column 77] - undeclared name: irma
    
      > [line 161 : column 14] - undeclared name: irma
    
      > [line 167 : column 14] - undeclared name: irma
    
      > [line 168 : column 13] - undeclared name: irma
    
      > [line 177 : column 14] - undeclared name: irma
    
      > [line 178 : column 13] - undeclared name: irma
    
      > [line 191 : column 14] - undeclared name: irma
    
      > [line 192 : column 13] - undeclared name: irma
    
      > [line 200 : column 54] - undeclared name: irma
    
      > [line 200 : column 78] - undeclared name: irma
    
      > [line 201 : column 18] - undeclared name: irma
    
      > [line 209 : column 36] - undeclared name: irma
    
      > [line 223 : column 24] - undeclared name: irma
    
      > [line 224 : column 22] - undeclared name: irma
    
      > [line 232 : column 42] - undeclared name: irma
    
      > [line 232 : column 63] - undeclared name: irma
    
      > [line 233 : column 15] - undeclared name: irma
    
      > [line 235 : column 18] - undeclared name: irma
    
      > [line 238 : column 14] - undeclared name: irma
    
      > [line 261 : column 18] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/server.go]:
    
      > [line 3 : column 14] - could not import github.com/privacybydesign/irmago/server/irmad/cmd (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/session.go]:
    
      > [line 5 : column 11] - could not import github.com/x-cray/logrus-prefixed-formatter (invalid package name: "")
    
      > [line 12 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 14 : column 2] - could not import github.com/privacybydesign/irmago/server/irmaserver (invalid package name: "")
    
      > [line 15 : column 2] - could not import github.com/sirupsen/logrus (invalid package name: "")
    
      > [line 89 : column 10] - undeclared name: irma
    
      > [line 90 : column 14] - undeclared name: irma
    
      > [line 121 : column 10] - undeclared name: irma
    
      > [line 163 : column 44] - undeclared name: irma
    
      > [line 163 : column 99] - undeclared name: irma
    
      > [line 163 : column 109] - undeclared name: irma
    
      > [line 167 : column 15] - undeclared name: irma
    
      > [line 195 : column 80] - undeclared name: irma
    
      > [line 216 : column 37] - undeclared name: irma
    
      > [line 216 : column 61] - undeclared name: irma
    
      > [line 219 : column 2] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/sign.go]:
    
      > [line 20 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 86 : column 12] - undeclared name: irma
    
      > [line 86 : column 54] - undeclared name: irma
    
      > [line 144 : column 78] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/update.go]:
    
      > [line 8 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 60 : column 16] - undeclared name: irma
    
      > [line 64 : column 49] - undeclared name: irma
    
      > [line 68 : column 37] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/verify.go]:
    
      > [line 10 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 66 : column 15] - undeclared name: irma
    
      > [line 71 : column 12] - undeclared name: irma
    
      > [line 91 : column 15] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma/main.go]:
    
      > [line 3 : column 8] - could not import github.com/privacybydesign/irmago/irma/cmd (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irma_signature.go]:
    
      > [line 9 : column 2] - "github.com/bwesterb/go-atum" imported but not used
    
      > [line 9 : column 2] - could not import github.com/bwesterb/go-atum (invalid package name: "")
    
      > [line 25 : column 13] - undeclared name: atum
    
      > [line 54 : column 75] - undeclared name: atum
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/client.go]:
    
      > [line 8 : column 2] - could not import github.com/bwesterb/go-atum (invalid package name: "")
    
      > [line 8 : column 2] - "github.com/bwesterb/go-atum" imported but not used
    
      > [line 9 : column 2] - could not import github.com/getsentry/raven-go (invalid package name: "")
    
      > [line 9 : column 2] - "github.com/getsentry/raven-go" imported but not used
    
      > [line 10 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 11 : column 2] - could not import github.com/privacybydesign/gabi (invalid package name: "")
    
      > [line 12 : column 2] - could not import github.com/privacybydesign/gabi/big (invalid package name: "")
    
      > [line 13 : column 2] - could not import github.com/privacybydesign/irmago (invalid package name: "")
    
      > [line 13 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 14 : column 2] - could not import github.com/privacybydesign/irmago/internal/fs (invalid package name: "")
    
      > [line 44 : column 23] - undeclared name: irma
    
      > [line 44 : column 56] - undeclared name: irma
    
      > [line 45 : column 23] - undeclared name: irma
    
      > [line 46 : column 23] - undeclared name: irma
    
      > [line 56 : column 25] - undeclared name: irma
    
      > [line 76 : column 28] - undeclared name: irma
    
      > [line 77 : column 28] - undeclared name: irma
    
      > [line 81 : column 27] - undeclared name: irma
    
      > [line 82 : column 27] - undeclared name: irma
    
      > [line 83 : column 29] - undeclared name: irma
    
      > [line 84 : column 27] - undeclared name: irma
    
      > [line 93 : column 27] - undeclared name: irma
    
      > [line 103 : column 23] - undeclared name: irma
    
      > [line 133 : column 35] - undeclared name: irma
    
      > [line 134 : column 35] - undeclared name: irma
    
      > [line 135 : column 35] - undeclared name: irma
    
      > [line 135 : column 68] - undeclared name: irma
    
      > [line 140 : column 26] - undeclared name: irma
    
      > [line 194 : column 44] - undeclared name: irma
    
      > [line 195 : column 10] - undeclared name: irma
    
      > [line 195 : column 37] - undeclared name: irma
    
      > [line 213 : column 8] - undeclared name: irma
    
      > [line 214 : column 10] - cred.CredentialType undefined (type *credential has no field or method CredentialType)
    
      > [line 215 : column 13] - cred.CredentialType undefined (type *credential has no field or method CredentialType)
    
      > [line 230 : column 11] - cred.CredentialType undefined (type *credential has no field or method CredentialType)
    
      > [line 275 : column 33] - undeclared name: irma
    
      > [line 284 : column 17] - undeclared name: irma
    
      > [line 284 : column 49] - undeclared name: irma
    
      > [line 297 : column 14] - undeclared name: irma
    
      > [line 318 : column 43] - undeclared name: irma
    
      > [line 331 : column 38] - cred.CredentialType undefined (type *credential has no field or method CredentialType)
    
      > [line 336 : column 17] - undeclared name: irma
    
      > [line 336 : column 49] - undeclared name: irma
    
      > [line 344 : column 26] - undeclared name: irma
    
      > [line 344 : column 59] - undeclared name: irma
    
      > [line 348 : column 12] - undeclared name: irma
    
      > [line 366 : column 32] - undeclared name: irma
    
      > [line 366 : column 66] - undeclared name: irma
    
      > [line 369 : column 18] - undeclared name: irma
    
      > [line 376 : column 32] - undeclared name: irma
    
      > [line 386 : column 37] - undeclared name: irma
    
      > [line 386 : column 94] - undeclared name: irma
    
      > [line 394 : column 55] - undeclared name: irma
    
      > [line 414 : column 41] - undeclared name: irma
    
      > [line 427 : column 37] - undeclared name: irma
    
      > [line 471 : column 42] - undeclared name: irma
    
      > [line 472 : column 22] - undeclared name: irma
    
      > [line 478 : column 12] - undeclared name: irma
    
      > [line 483 : column 19] - undeclared name: irma
    
      > [line 490 : column 28] - undeclared name: irma
    
      > [line 492 : column 52] - undeclared name: irma
    
      > [line 502 : column 56] - undeclared name: irma
    
      > [line 502 : column 80] - undeclared name: irma
    
      > [line 503 : column 18] - undeclared name: irma
    
      > [line 507 : column 23] - undeclared name: irma
    
      > [line 520 : column 42] - undeclared name: irma
    
      > [line 532 : column 39] - undeclared name: irma
    
      > [line 533 : column 29] - undeclared name: irma
    
      > [line 545 : column 41] - undeclared name: irma
    
      > [line 546 : column 18] - undeclared name: irma
    
      > [line 548 : column 20] - undeclared name: irma
    
      > [line 554 : column 39] - undeclared name: irma
    
      > [line 591 : column 48] - undeclared name: irma
    
      > [line 618 : column 53] - undeclared name: irma
    
      > [line 619 : column 20] - undeclared name: irma
    
      > [line 621 : column 27] - undeclared name: irma
    
      > [line 637 : column 8] - undeclared name: irma
    
      > [line 643 : column 48] - undeclared name: irma
    
      > [line 644 : column 20] - undeclared name: irma
    
      > [line 647 : column 30] - undeclared name: irma
    
      > [line 651 : column 26] - undeclared name: irma
    
      > [line 653 : column 27] - undeclared name: irma
    
      > [line 655 : column 28] - undeclared name: irma
    
      > [line 690 : column 45] - undeclared name: irma
    
      > [line 690 : column 76] - undeclared name: irma
    
      > [line 691 : column 27] - undeclared name: irma
    
      > [line 691 : column 60] - undeclared name: atum
    
      > [line 699 : column 3] - cred declared but not used
    
      > [line 706 : column 17] - undeclared name: atum
    
      > [line 717 : column 20] - undeclared name: irma
    
      > [line 727 : column 38] - undeclared name: irma
    
      > [line 727 : column 69] - undeclared name: irma
    
      > [line 727 : column 92] - undeclared name: irma
    
      > [line 727 : column 110] - undeclared name: atum
    
      > [line 734 : column 10] - undeclared name: irma
    
      > [line 748 : column 54] - undeclared name: irma
    
      > [line 748 : column 84] - undeclared name: irma
    
      > [line 749 : column 27] - undeclared name: irma
    
      > [line 761 : column 3] - credBuilder declared but not used
    
      > [line 776 : column 49] - undeclared name: irma
    
      > [line 776 : column 79] - undeclared name: irma
    
      > [line 777 : column 5] - undeclared name: irma
    
      > [line 782 : column 10] - undeclared name: irma
    
      > [line 793 : column 88] - undeclared name: irma
    
      > [line 809 : column 83] - undeclared name: irma
    
      > [line 835 : column 62] - undeclared name: irma
    
      > [line 836 : column 12] - undeclared name: irma
    
      > [line 845 : column 52] - undeclared name: irma
    
      > [line 849 : column 50] - undeclared name: irma
    
      > [line 854 : column 46] - undeclared name: irma
    
      > [line 863 : column 54] - undeclared name: irma
    
      > [line 875 : column 15] - undeclared name: irma
    
      > [line 886 : column 9] - undeclared name: irma
    
      > [line 910 : column 62] - undeclared name: irma
    
      > [line 913 : column 24] - undeclared name: irma
    
      > [line 915 : column 15] - undeclared name: irma
    
      > [line 920 : column 35] - undeclared name: irma
    
      > [line 923 : column 49] - undeclared name: irma
    
      > [line 932 : column 57] - undeclared name: irma
    
      > [line 938 : column 15] - undeclared name: irma
    
      > [line 974 : column 46] - undeclared name: irma
    
      > [line 984 : column 31] - undeclared name: irma
    
      > [line 1012 : column 3] - undeclared name: raven
    
      > [line 1014 : column 3] - undeclared name: raven
    
      > [line 1022 : column 56] - undeclared name: irma
    
      > [line 1053 : column 35] - client.credentialsCache[id][i].Attributes undefined (type *credential has no field or method Attributes)
    
      > [line 1054 : column 36] - client.credentialsCache[id][i].Attributes undefined (type *credential has no field or method Attributes)
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/credential.go]:
    
      > [line 5 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 12 : column 3] - undeclared name: irma
    
      > [line 13 : column 9] - undeclared name: irma
    
      > [line 16 : column 53] - undeclared name: irma
    
      > [line 17 : column 10] - undeclared name: irma
    
      > [line 23 : column 10] - cred.CredentialType undefined (type *credential has no field or method CredentialType)
    
      > [line 29 : column 7] - cred.Pk undefined (type *credential has no field or method Pk)
    
      > [line 29 : column 79] - cred.KeyCounter undefined (type *credential has no field or method KeyCounter)
    
      > [line 36 : column 42] - undeclared name: irma
    
      > [line 38 : column 16] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/handlers.go]:
    
      > [line 5 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 21 : column 72] - undeclared name: irma
    
      > [line 21 : column 112] - undeclared name: irma
    
      > [line 21 : column 149] - undeclared name: irma
    
      > [line 45 : column 50] - undeclared name: irma
    
      > [line 56 : column 57] - undeclared name: irma
    
      > [line 56 : column 77] - undeclared name: irma
    
      > [line 59 : column 76] - undeclared name: irma
    
      > [line 59 : column 118] - undeclared name: irma
    
      > [line 59 : column 155] - undeclared name: irma
    
      > [line 62 : column 73] - undeclared name: irma
    
      > [line 62 : column 114] - undeclared name: irma
    
      > [line 62 : column 151] - undeclared name: irma
    
      > [line 65 : column 77] - undeclared name: irma
    
      > [line 71 : column 61] - undeclared name: irma
    
      > [line 74 : column 74] - undeclared name: irma
    
      > [line 77 : column 71] - undeclared name: irma
    
      > [line 80 : column 71] - undeclared name: irma
    
      > [line 83 : column 66] - undeclared name: irma
    
      > [line 83 : column 98] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/keyshare.go]:
    
      > [line 13 : column 2] - "github.com/bwesterb/go-atum" imported but not used
    
      > [line 14 : column 2] - could not import github.com/dgrijalva/jwt-go (invalid package name: "")
    
      > [line 14 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 18 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 33 : column 26] - undeclared name: irma
    
      > [line 34 : column 39] - undeclared name: irma
    
      > [line 35 : column 36] - undeclared name: irma
    
      > [line 37 : column 25] - undeclared name: irma
    
      > [line 46 : column 19] - undeclared name: irma
    
      > [line 47 : column 20] - undeclared name: irma
    
      > [line 48 : column 23] - undeclared name: irma
    
      > [line 50 : column 23] - undeclared name: irma
    
      > [line 50 : column 53] - undeclared name: irma
    
      > [line 52 : column 20] - undeclared name: atum
    
      > [line 59 : column 26] - undeclared name: irma
    
      > [line 129 : column 48] - undeclared name: irma
    
      > [line 155 : column 10] - undeclared name: irma
    
      > [line 156 : column 8] - undeclared name: irma
    
      > [line 157 : column 22] - undeclared name: irma
    
      > [line 159 : column 13] - undeclared name: atum
    
      > [line 182 : column 25] - undeclared name: irma
    
      > [line 182 : column 55] - undeclared name: irma
    
      > [line 198 : column 16] - undeclared name: irma
    
      > [line 205 : column 17] - undeclared name: jwt
    
      > [line 207 : column 13] - undeclared name: jwt
    
      > [line 210 : column 4] - undeclared name: irma
    
      > [line 211 : column 4] - undeclared name: irma
    
      > [line 218 : column 4] - undeclared name: irma
    
      > [line 219 : column 4] - undeclared name: irma
    
      > [line 232 : column 41] - undeclared name: irma
    
      > [line 233 : column 20] - undeclared name: irma
    
      > [line 283 : column 66] - undeclared name: irma
    
      > [line 305 : column 10] - undeclared name: irma
    
      > [line 307 : column 15] - undeclared name: irma
    
      > [line 323 : column 48] - undeclared name: irma
    
      > [line 343 : column 15] - undeclared name: irma
    
      > [line 350 : column 16] - undeclared name: irma
    
      > [line 410 : column 19] - undeclared name: irma
    
      > [line 431 : column 69] - undeclared name: irma
    
      > [line 455 : column 88] - undeclared name: irma
    
      > [line 459 : column 16] - undeclared name: irma
    
      > [line 464 : column 4] - undeclared name: jwt
    
      > [line 467 : column 17] - undeclared name: jwt
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/legacy.go]:
    
      > [line 6 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 18 : column 17] - undeclared name: irma
    
      > [line 48 : column 48] - undeclared name: irma
    
      > [line 57 : column 44] - undeclared name: irma
    
      > [line 83 : column 50] - undeclared name: irma
    
      > [line 83 : column 83] - undeclared name: irma
    
      > [line 85 : column 13] - undeclared name: irma
    
      > [line 90 : column 18] - undeclared name: irma
    
      > [line 90 : column 51] - undeclared name: irma
    
      > [line 92 : column 32] - undeclared name: irma
    
      > [line 94 : column 10] - undeclared name: irma
    
      > [line 99 : column 18] - undeclared name: irma
    
      > [line 107 : column 56] - undeclared name: irma
    
      > [line 108 : column 19] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/logs.go]:
    
      > [line 7 : column 2] - "github.com/bwesterb/go-atum" imported but not used
    
      > [line 9 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 16 : column 7] - undeclared name: irma
    
      > [line 17 : column 7] - undeclared name: irma
    
      > [line 20 : column 14] - undeclared name: irma
    
      > [line 20 : column 46] - undeclared name: irma
    
      > [line 24 : column 26] - undeclared name: atum
    
      > [line 28 : column 19] - undeclared name: irma
    
      > [line 31 : column 13] - undeclared name: irma
    
      > [line 32 : column 14] - undeclared name: irma
    
      > [line 33 : column 14] - undeclared name: irma
    
      > [line 35 : column 13] - undeclared name: irma
    
      > [line 38 : column 23] - undeclared name: irma
    
      > [line 40 : column 42] - undeclared name: irma
    
      > [line 46 : column 7] - undeclared name: irma
    
      > [line 47 : column 20] - undeclared name: irma
    
      > [line 48 : column 7] - undeclared name: irma
    
      > [line 49 : column 20] - undeclared name: irma
    
      > [line 50 : column 7] - undeclared name: irma
    
      > [line 51 : column 20] - undeclared name: irma
    
      > [line 74 : column 54] - undeclared name: irma
    
      > [line 74 : column 80] - undeclared name: irma
    
      > [line 76 : column 15] - undeclared name: irma
    
      > [line 83 : column 18] - undeclared name: irma
    
      > [line 85 : column 19] - undeclared name: irma
    
      > [line 95 : column 51] - undeclared name: irma
    
      > [line 95 : column 77] - undeclared name: irma
    
      > [line 96 : column 19] - undeclared name: irma
    
      > [line 97 : column 10] - undeclared name: irma
    
      > [line 107 : column 49] - undeclared name: irma
    
      > [line 108 : column 19] - undeclared name: irma
    
      > [line 116 : column 10] - undeclared name: irma
    
      > [line 129 : column 15] - undeclared name: irma
    
      > [line 142 : column 7] - undeclared name: irma
    
      > [line 146 : column 34] - undeclared name: irma
    
      > [line 149 : column 7] - undeclared name: irma
    
      > [line 150 : column 33] - undeclared name: irma
    
      > [line 151 : column 7] - undeclared name: irma
    
      > [line 152 : column 38] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/session.go]:
    
      > [line 11 : column 2] - "github.com/bwesterb/go-atum" imported but not used
    
      > [line 12 : column 2] - "github.com/getsentry/raven-go" imported but not used
    
      > [line 16 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 25 : column 51] - undeclared name: irma
    
      > [line 32 : column 22] - undeclared name: irma
    
      > [line 32 : column 42] - undeclared name: irma
    
      > [line 36 : column 15] - undeclared name: irma
    
      > [line 37 : column 31] - undeclared name: irma
    
      > [line 38 : column 14] - undeclared name: irma
    
      > [line 41 : column 26] - undeclared name: irma
    
      > [line 42 : column 39] - undeclared name: irma
    
      > [line 43 : column 36] - undeclared name: irma
    
      > [line 44 : column 36] - undeclared name: irma
    
      > [line 46 : column 37] - undeclared name: irma
    
      > [line 47 : column 21] - undeclared name: irma
    
      > [line 48 : column 14] - undeclared name: irma
    
      > [line 50 : column 41] - undeclared name: irma
    
      > [line 51 : column 21] - undeclared name: irma
    
      > [line 52 : column 14] - undeclared name: irma
    
      > [line 54 : column 38] - undeclared name: irma
    
      > [line 55 : column 21] - undeclared name: irma
    
      > [line 56 : column 14] - undeclared name: irma
    
      > [line 58 : column 42] - undeclared name: irma
    
      > [line 70 : column 13] - undeclared name: irma
    
      > [line 72 : column 14] - undeclared name: irma
    
      > [line 73 : column 13] - undeclared name: irma
    
      > [line 75 : column 15] - undeclared name: irma
    
      > [line 76 : column 14] - undeclared name: irma
    
      > [line 78 : column 14] - undeclared name: irma
    
      > [line 86 : column 13] - undeclared name: atum
    
      > [line 91 : column 13] - undeclared name: irma
    
      > [line 104 : column 19] - undeclared name: irma
    
      > [line 105 : column 19] - undeclared name: irma
    
      > [line 114 : column 9] - undeclared name: irma
    
      > [line 115 : column 12] - undeclared name: irma
    
      > [line 119 : column 20] - undeclared name: irma
    
      > [line 120 : column 12] - undeclared name: irma
    
      > [line 124 : column 17] - undeclared name: irma
    
      > [line 125 : column 12] - undeclared name: irma
    
      > [line 126 : column 55] - undeclared name: irma
    
      > [line 129 : column 24] - undeclared name: irma
    
      > [line 130 : column 12] - undeclared name: irma
    
      > [line 131 : column 62] - undeclared name: irma
    
      > [line 134 : column 19] - undeclared name: irma
    
      > [line 139 : column 48] - undeclared name: irma
    
      > [line 139 : column 93] - undeclared name: irma
    
      > [line 147 : column 47] - undeclared name: irma
    
      > [line 153 : column 44] - undeclared name: irma
    
      > [line 156 : column 14] - undeclared name: irma
    
      > [line 157 : column 14] - undeclared name: irma
    
      > [line 161 : column 47] - undeclared name: irma
    
      > [line 168 : column 40] - undeclared name: irma
    
      > [line 169 : column 16] - undeclared name: irma
    
      > [line 170 : column 13] - undeclared name: irma
    
      > [line 171 : column 13] - undeclared name: irma
    
      > [line 172 : column 21] - undeclared name: irma
    
      > [line 172 : column 50] - undeclared name: irma
    
      > [line 175 : column 20] - undeclared name: irma
    
      > [line 176 : column 21] - undeclared name: irma
    
      > [line 176 : column 50] - undeclared name: irma
    
      > [line 186 : column 14] - undeclared name: irma
    
      > [line 187 : column 14] - undeclared name: irma
    
      > [line 192 : column 47] - undeclared name: irma
    
      > [line 197 : column 7] - undeclared name: irma
    
      > [line 198 : column 22] - undeclared name: irma
    
      > [line 199 : column 7] - undeclared name: irma
    
      > [line 200 : column 22] - undeclared name: irma
    
      > [line 201 : column 10] - undeclared name: irma
    
      > [line 202 : column 7] - undeclared name: irma
    
      > [line 203 : column 22] - undeclared name: irma
    
      > [line 204 : column 7] - undeclared name: irma
    
      > [line 207 : column 17] - undeclared name: irma
    
      > [line 207 : column 46] - undeclared name: irma
    
      > [line 211 : column 30] - undeclared name: irma
    
      > [line 212 : column 30] - undeclared name: irma
    
      > [line 227 : column 47] - undeclared name: irma
    
      > [line 239 : column 42] - undeclared name: irma
    
      > [line 239 : column 69] - undeclared name: irma
    
      > [line 239 : column 89] - undeclared name: irma
    
      > [line 240 : column 8] - undeclared name: irma
    
      > [line 244 : column 11] - undeclared name: irma
    
      > [line 268 : column 22] - undeclared name: irma
    
      > [line 277 : column 21] - undeclared name: irma
    
      > [line 283 : column 23] - undeclared name: irma
    
      > [line 287 : column 18] - undeclared name: irma
    
      > [line 287 : column 47] - undeclared name: irma
    
      > [line 292 : column 34] - undeclared name: irma
    
      > [line 308 : column 59] - undeclared name: irma
    
      > [line 312 : column 47] - undeclared name: irma
    
      > [line 320 : column 7] - undeclared name: irma
    
      > [line 323 : column 7] - undeclared name: irma
    
      > [line 326 : column 7] - undeclared name: irma
    
      > [line 344 : column 47] - undeclared name: irma
    
      > [line 349 : column 18] - undeclared name: irma
    
      > [line 349 : column 47] - undeclared name: irma
    
      > [line 357 : column 18] - undeclared name: irma
    
      > [line 357 : column 47] - undeclared name: irma
    
      > [line 382 : column 7] - undeclared name: irma
    
      > [line 385 : column 18] - undeclared name: irma
    
      > [line 385 : column 47] - undeclared name: irma
    
      > [line 391 : column 18] - undeclared name: irma
    
      > [line 391 : column 47] - undeclared name: irma
    
      > [line 402 : column 19] - undeclared name: irma
    
      > [line 402 : column 48] - undeclared name: irma
    
      > [line 408 : column 4] - undeclared name: irma
    
      > [line 409 : column 4] - undeclared name: raven
    
      > [line 411 : column 7] - undeclared name: irma
    
      > [line 414 : column 18] - undeclared name: irma
    
      > [line 414 : column 47] - undeclared name: irma
    
      > [line 420 : column 24] - undeclared name: irma
    
      > [line 424 : column 19] - undeclared name: irma
    
      > [line 424 : column 48] - undeclared name: irma
    
      > [line 430 : column 4] - undeclared name: irma
    
      > [line 431 : column 4] - undeclared name: raven
    
      > [line 433 : column 7] - undeclared name: irma
    
      > [line 436 : column 23] - undeclared name: irma
    
      > [line 440 : column 18] - undeclared name: irma
    
      > [line 440 : column 47] - undeclared name: irma
    
      > [line 445 : column 4] - undeclared name: irma
    
      > [line 446 : column 4] - undeclared name: raven
    
      > [line 451 : column 3] - undeclared name: irma
    
      > [line 453 : column 23] - undeclared name: irma
    
      > [line 467 : column 18] - undeclared name: irma
    
      > [line 469 : column 28] - undeclared name: irma
    
      > [line 469 : column 57] - undeclared name: irma
    
      > [line 479 : column 29] - undeclared name: irma
    
      > [line 479 : column 58] - undeclared name: irma
    
      > [line 485 : column 5] - undeclared name: irma
    
      > [line 486 : column 26] - undeclared name: irma
    
      > [line 487 : column 26] - undeclared name: irma
    
      > [line 488 : column 26] - undeclared name: irma
    
      > [line 500 : column 63] - undeclared name: irma
    
      > [line 504 : column 14] - undeclared name: irma
    
      > [line 507 : column 7] - undeclared name: irma
    
      > [line 507 : column 27] - undeclared name: irma
    
      > [line 509 : column 7] - undeclared name: irma
    
      > [line 523 : column 7] - undeclared name: irma
    
      > [line 523 : column 27] - undeclared name: irma
    
      > [line 525 : column 7] - undeclared name: irma
    
      > [line 552 : column 11] - undeclared name: irma
    
      > [line 554 : column 11] - undeclared name: irma
    
      > [line 554 : column 40] - undeclared name: irma
    
      > [line 565 : column 11] - undeclared name: irma
    
      > [line 565 : column 40] - undeclared name: irma
    
      > [line 569 : column 11] - undeclared name: irma
    
      > [line 569 : column 40] - undeclared name: irma
    
      > [line 582 : column 10] - undeclared name: irma
    
      > [line 583 : column 23] - undeclared name: irma
    
      > [line 618 : column 35] - undeclared name: irma
    
      > [line 630 : column 10] - undeclared name: irma
    
      > [line 630 : column 39] - undeclared name: irma
    
      > [line 645 : column 35] - undeclared name: irma
    
      > [line 646 : column 42] - undeclared name: irma
    
      > [line 666 : column 7] - undeclared name: irma
    
      > [line 668 : column 7] - undeclared name: irma
    
      > [line 669 : column 25] - undeclared name: irma
    
      > [line 673 : column 7] - undeclared name: irma
    
      > [line 674 : column 25] - undeclared name: irma
    
      > [line 685 : column 62] - undeclared name: irma
    
      > [line 689 : column 59] - undeclared name: irma
    
      > [line 693 : column 49] - undeclared name: irma
    
      > [line 697 : column 48] - undeclared name: irma
    
      > [line 698 : column 12] - undeclared name: irma
    
      > [line 700 : column 22] - undeclared name: irma
    
      > [line 701 : column 11] - undeclared name: irma
    
      > [line 701 : column 40] - undeclared name: irma
    
      > [line 703 : column 20] - undeclared name: irma
    
      > [line 709 : column 47] - undeclared name: irma
    
      > [line 713 : column 47] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/storage.go]:
    
      > [line 12 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 14 : column 2] - could not import go.etcd.io/bbolt (invalid package name: "")
    
      > [line 24 : column 17] - undeclared name: irma
    
      > [line 69 : column 15] - tx.CreateBucketIfNotExists undefined (type *transaction has no field or method CreateBucketIfNotExists)
    
      > [line 82 : column 15] - tx.CreateBucketIfNotExists undefined (type *transaction has no field or method CreateBucketIfNotExists)
    
      > [line 91 : column 10] - tx.Bucket undefined (type *transaction has no field or method Bucket)
    
      > [line 117 : column 61] - undeclared name: irma
    
      > [line 122 : column 12] - tx.DeleteBucket undefined (type *transaction has no field or method DeleteBucket)
    
      > [line 126 : column 68] - cred.Signature undefined (type *credential has no field or method Signature)
    
      > [line 148 : column 46] - undeclared name: irma
    
      > [line 148 : column 93] - undeclared name: irma
    
      > [line 154 : column 65] - undeclared name: irma
    
      > [line 155 : column 18] - undeclared name: irma
    
      > [line 165 : column 12] - tx.DeleteBucket undefined (type *transaction has no field or method DeleteBucket)
    
      > [line 168 : column 60] - undeclared name: irma
    
      > [line 174 : column 79] - undeclared name: irma
    
      > [line 185 : column 15] - tx.CreateBucketIfNotExists undefined (type *transaction has no field or method CreateBucketIfNotExists)
    
      > [line 226 : column 40] - undeclared name: irma
    
      > [line 258 : column 46] - undeclared name: irma
    
      > [line 258 : column 79] - undeclared name: irma
    
      > [line 259 : column 18] - undeclared name: irma
    
      > [line 259 : column 51] - undeclared name: irma
    
      > [line 266 : column 18] - undeclared name: irma
    
      > [line 268 : column 24] - undeclared name: irma
    
      > [line 276 : column 34] - undeclared name: irma
    
      > [line 285 : column 52] - undeclared name: irma
    
      > [line 286 : column 19] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaclient/updates.go]:
    
      > [line 9 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 16 : column 10] - undeclared name: irma
    
      > [line 178 : column 13] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/irmaconfig.go]:
    
      > [line 33 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 33 : column 2] - could not import github.com/dgrijalva/jwt-go (invalid package name: "")
    
      > [line 35 : column 2] - could not import github.com/jasonlvhit/gocron (invalid package name: "")
    
      > [line 381 : column 90] - undeclared name: jwt
    
      > [line 382 : column 17] - undeclared name: jwt
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/messages.go]:
    
      > [line 12 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 279 : column 14] - i.Proofs undefined (type *IssueCommitmentMessage has no field or method Proofs)
    
      > [line 298 : column 22] - undeclared name: jwt
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/requests.go]:
    
      > [line 11 : column 2] - "github.com/bwesterb/go-atum" imported but not used
    
      > [line 12 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 92 : column 22] - undeclared name: atum
    
      > [line 168 : column 7] - undeclared name: jwt
    
      > [line 200 : column 33] - undeclared name: atum
    
      > [line 607 : column 49] - undeclared name: atum
    
      > [line 611 : column 82] - undeclared name: atum
    
      > [line 836 : column 47] - undeclared name: jwt
    
      > [line 837 : column 9] - undeclared name: jwt
    
      > [line 840 : column 50] - undeclared name: jwt
    
      > [line 841 : column 9] - undeclared name: jwt
    
      > [line 844 : column 48] - undeclared name: jwt
    
      > [line 845 : column 9] - undeclared name: jwt
    
      > [line 891 : column 53] - undeclared name: jwt
    
      > [line 904 : column 57] - undeclared name: jwt
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/server/api.go]:
    
      > [line 17 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 18 : column 2] - could not import github.com/privacybydesign/gabi (invalid package name: "")
    
      > [line 19 : column 2] - could not import github.com/privacybydesign/irmago (invalid package name: "")
    
      > [line 19 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 20 : column 2] - could not import github.com/privacybydesign/irmago/internal/fs (invalid package name: "")
    
      > [line 21 : column 2] - could not import github.com/sirupsen/logrus (invalid package name: "")
    
      > [line 22 : column 11] - could not import github.com/x-cray/logrus-prefixed-formatter (invalid package name: "")
    
      > [line 30 : column 21] - undeclared name: irma
    
      > [line 44 : column 24] - undeclared name: irma
    
      > [line 72 : column 14] - undeclared name: irma
    
      > [line 81 : column 14] - undeclared name: irma
    
      > [line 82 : column 14] - undeclared name: irma
    
      > [line 83 : column 19] - undeclared name: irma
    
      > [line 84 : column 15] - undeclared name: irma
    
      > [line 85 : column 15] - undeclared name: irma
    
      > [line 105 : column 14] - undeclared name: irma
    
      > [line 106 : column 14] - undeclared name: irma
    
      > [line 107 : column 17] - undeclared name: irma
    
      > [line 108 : column 15] - undeclared name: irma
    
      > [line 109 : column 15] - undeclared name: irma
    
      > [line 114 : column 19] - undeclared name: irma
    
      > [line 121 : column 42] - undeclared name: irma
    
      > [line 151 : column 46] - undeclared name: irma
    
      > [line 163 : column 10] - undeclared name: irma
    
      > [line 174 : column 39] - undeclared name: irma
    
      > [line 200 : column 69] - undeclared name: irma
    
      > [line 218 : column 48] - undeclared name: irma
    
      > [line 220 : column 7] - undeclared name: irma
    
      > [line 222 : column 7] - undeclared name: irma
    
      > [line 227 : column 20] - undeclared name: irma
    
      > [line 227 : column 36] - undeclared name: irma
    
      > [line 227 : column 68] - undeclared name: irma
    
      > [line 227 : column 103] - undeclared name: irma
    
      > [line 232 : column 16] - undeclared name: irma
    
      > [line 232 : column 32] - undeclared name: irma
    
      > [line 232 : column 59] - undeclared name: irma
    
      > [line 232 : column 85] - undeclared name: irma
    
      > [line 243 : column 33] - undeclared name: irma
    
      > [line 243 : column 55] - undeclared name: irma
    
      > [line 256 : column 46] - undeclared name: irma
    
      > [line 256 : column 63] - undeclared name: irma
    
      > [line 258 : column 13] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/server/irmac/capi.go]:
    
      > [line 21 : column 8] - could not import C (no metadata for C)
    
      > [line 27 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 28 : column 2] - could not import github.com/privacybydesign/irmago/internal/servercore (invalid package name: "")
    
      > [line 29 : column 2] - could not import github.com/privacybydesign/irmago/server (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/server/irmad/cmd/check.go]:
    
      > [line 6 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 7 : column 2] - could not import github.com/privacybydesign/irmago/server/requestorserver (invalid package name: "")
    
      > [line 8 : column 2] - could not import github.com/spf13/cobra (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/server/irmad/cmd/root.go]:
    
      > [line 11 : column 2] - could not import github.com/mitchellh/mapstructure (invalid package name: "")
    
      > [line 12 : column 7] - could not import github.com/privacybydesign/irmago (invalid package name: "")
    
      > [line 13 : column 2] - could not import github.com/privacybydesign/irmago/server (invalid package name: "")
    
      > [line 15 : column 2] - could not import github.com/sirupsen/logrus (invalid package name: "")
    
      > [line 16 : column 2] - could not import github.com/spf13/cast (invalid package name: "")
    
      > [line 18 : column 2] - could not import github.com/spf13/viper (invalid package name: "")
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/server/irmaserver/main.go]:
    
      > [line 11 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 12 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 12 : column 2] - could not import github.com/privacybydesign/irmago (invalid package name: "")
    
      > [line 13 : column 2] - could not import github.com/privacybydesign/irmago/internal/servercore (invalid package name: "")
    
      > [line 14 : column 2] - could not import github.com/privacybydesign/irmago/server (invalid package name: "")
    
      > [line 61 : column 66] - undeclared name: irma
    
      > [line 64 : column 78] - undeclared name: irma
    
      > [line 84 : column 31] - undeclared name: irma
    
      > [line 87 : column 43] - undeclared name: irma
    
      > [line 132 : column 35] - undeclared name: irma
    
      > [line 141 : column 33] - s.HandleProtocolMessage undefined (type *Server has no field or method HandleProtocolMessage)
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/server/requestorserver/auth.go]:
    
      > [line 8 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 8 : column 2] - could not import github.com/dgrijalva/jwt-go (invalid package name: "")
    
      > [line 9 : column 2] - could not import github.com/go-errors/errors (invalid package name: "")
    
      > [line 10 : column 2] - could not import github.com/privacybydesign/irmago (invalid package name: "")
    
      > [line 10 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 11 : column 2] - could not import github.com/privacybydesign/irmago/internal/fs (invalid package name: "")
    
      > [line 12 : column 2] - could not import github.com/privacybydesign/irmago/server (invalid package name: "")
    
      > [line 30 : column 27] - undeclared name: irma
    
      > [line 30 : column 73] - undeclared name: irma
    
      > [line 60 : column 10] - undeclared name: irma
    
      > [line 60 : column 42] - undeclared name: irma
    
      > [line 77 : column 26] - undeclared name: irma
    
      > [line 77 : column 72] - undeclared name: irma
    
      > [line 78 : column 40] - undeclared name: jwt
    
      > [line 100 : column 10] - undeclared name: irma
    
      > [line 100 : column 42] - undeclared name: irma
    
      > [line 101 : column 40] - undeclared name: jwt
    
      > [line 110 : column 13] - undeclared name: jwt
    
      > [line 121 : column 10] - undeclared name: irma
    
      > [line 121 : column 42] - undeclared name: irma
    
      > [line 149 : column 69] - undeclared name: jwt
    
      > [line 150 : column 21] - undeclared name: jwt
    
      > [line 171 : column 10] - undeclared name: irma
    
      > [line 171 : column 42] - undeclared name: irma
    
      > [line 193 : column 13] - undeclared name: jwt
    
      > [line 194 : column 11] - undeclared name: jwt
    
      > [line 206 : column 20] - undeclared name: irma
    
      > [line 216 : column 23] - undeclared name: jwt
    
      > [line 216 : column 55] - undeclared name: jwt
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/server/requestorserver/conf.go]:
    
      > [line 12 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 14 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 71 : column 28] - undeclared name: irma
    
      > [line 96 : column 64] - undeclared name: irma
    
      > [line 119 : column 69] - undeclared name: irma
    
      > [line 119 : column 95] - undeclared name: irma
    
      > [line 122 : column 7] - undeclared name: irma
    
      > [line 124 : column 7] - undeclared name: irma
    
      > [line 126 : column 7] - undeclared name: irma
    
      > [line 133 : column 41] - undeclared name: irma
    
      > [line 157 : column 8] - conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 158 : column 25] - conf.HavePrivateKeys undefined (type *Configuration has no field or method HavePrivateKeys)
    
      > [line 163 : column 44] - conf.Production undefined (type *Configuration has no field or method Production)
    
      > [line 164 : column 10] - conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 231 : column 10] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 232 : column 30] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 233 : column 9] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 233 : column 20] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 235 : column 30] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 236 : column 9] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 236 : column 20] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 244 : column 8] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 244 : column 88] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 248 : column 30] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 249 : column 10] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 249 : column 34] - conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 255 : column 8] - conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 257 : column 40] - undeclared name: irma
    
      > [line 271 : column 16] - undeclared name: irma
    
      > [line 271 : column 51] - undeclared name: irma
    
      > [line 320 : column 13] - conf.IrmaConfiguration undefined (type *Configuration has no field or method IrmaConfiguration)
    
      > [line 320 : column 46] - undeclared name: irma
    
      > [line 326 : column 11] - undeclared name: irma
    
      > [line 327 : column 13] - conf.IrmaConfiguration undefined (type *Configuration has no field or method IrmaConfiguration)
    
      > [line 333 : column 11] - undeclared name: irma
    
      > [line 334 : column 13] - conf.IrmaConfiguration undefined (type *Configuration has no field or method IrmaConfiguration)
    
      > [line 340 : column 11] - undeclared name: irma
    
      > [line 341 : column 13] - conf.IrmaConfiguration undefined (type *Configuration has no field or method IrmaConfiguration)
    
      > [line 404 : column 28] - undeclared name: jwt
    
      > [line 405 : column 7] - conf.Logger undefined (type *Configuration has no field or method Logger)
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/server/requestorserver/server.go]:
    
      > [line 20 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 21 : column 2] - could not import github.com/go-chi/chi (invalid package name: "")
    
      > [line 22 : column 2] - could not import github.com/go-chi/chi/middleware (invalid package name: "")
    
      > [line 23 : column 2] - could not import github.com/go-chi/cors (invalid package name: "")
    
      > [line 25 : column 2] - "github.com/privacybydesign/irmago" imported but not used
    
      > [line 27 : column 2] - could not import github.com/privacybydesign/irmago/server/irmaserver (invalid package name: "")
    
      > [line 28 : column 2] - could not import github.com/sirupsen/logrus (invalid package name: "")
    
      > [line 41 : column 12] - s.conf.LogJSON undefined (type *Configuration has no field or method LogJSON)
    
      > [line 42 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 45 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 100 : column 9] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 121 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 177 : column 13] - s.conf.Verbose undefined (type *Configuration has no field or method Verbose)
    
      > [line 202 : column 13] - s.conf.Verbose undefined (type *Configuration has no field or method Verbose)
    
      > [line 273 : column 16] - s.conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 274 : column 17] - s.conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 274 : column 33] - s.conf.URL undefined (type *Configuration has no field or method URL)
    
      > [line 275 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 277 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 287 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 297 : column 13] - undeclared name: irma
    
      > [line 298 : column 13] - undeclared name: irma
    
      > [line 300 : column 14] - undeclared name: irma
    
      > [line 315 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 324 : column 25] - undeclared name: irma
    
      > [line 327 : column 11] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 337 : column 11] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 344 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 388 : column 9] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 390 : column 33] - undeclared name: irma
    
      > [line 420 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 434 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 444 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 456 : column 12] - undeclared name: jwt
    
      > [line 460 : column 7] - undeclared name: irma
    
      > [line 462 : column 7] - undeclared name: irma
    
      > [line 464 : column 7] - undeclared name: irma
    
      > [line 481 : column 16] - undeclared name: irma
    
      > [line 493 : column 11] - undeclared name: jwt
    
      > [line 493 : column 29] - undeclared name: jwt
    
      > [line 496 : column 10] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 523 : column 20] - undeclared name: jwt
    
      > [line 531 : column 13] - undeclared name: jwt
    
      > [line 534 : column 4] - undeclared name: jwt
    
      > [line 539 : column 4] - undeclared name: jwt
    
      > [line 545 : column 11] - undeclared name: jwt
    
      > [line 545 : column 29] - undeclared name: jwt
    
      > [line 555 : column 19] - s.conf.Logger undefined (type *Configuration has no field or method Logger)
    
      > [line 580 : column 12] - undeclared name: irma
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/timestamp.go]:
    
      > [line 8 : column 2] - "github.com/bwesterb/go-atum" imported but not used
    
      > [line 17 : column 99] - undeclared name: atum
    
      > [line 22 : column 9] - undeclared name: atum
    
      > [line 23 : column 9] - undeclared name: atum
    
      > [line 23 : column 46] - undeclared name: atum
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/transport.go]:
    
      > [line 18 : column 2] - "github.com/hashicorp/go-retryablehttp" imported but not used
    
      > [line 18 : column 2] - could not import github.com/hashicorp/go-retryablehttp (invalid package name: "")
    
      > [line 19 : column 2] - could not import github.com/sirupsen/logrus (invalid package name: "")
    
      > [line 21 : column 2] - could not import github.com/privacybydesign/irmago/internal/disable_sigpipe (invalid package name: "")
    
      > [line 28 : column 11] - undeclared name: retryablehttp
    
      > [line 70 : column 13] - undeclared name: retryablehttp
    
      > [line 75 : column 17] - undeclared name: retryablehttp
    
      > [line 101 : column 10] - undeclared name: retryablehttp
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/verify.go]:
    
      > [line 7 : column 2] - "github.com/dgrijalva/jwt-go" imported but not used
    
      > [line 52 : column 20] - cannot range over pl (variable of type ProofList)
    
      > [line 93 : column 17] - cannot range over pl (variable of type ProofList)
    
      > [line 108 : column 24] - cannot range over pl (variable of type ProofList)
    
      > [line 136 : column 24] - cannot range over pl (variable of type ProofList)
    
      > [line 364 : column 3] - undeclared name: jwt
    
      > [line 367 : column 12] - undeclared name: jwt
    
      > [line 367 : column 62] - undeclared name: jwt
    
      > [line 371 : column 63] - undeclared name: jwt
    
    
    Golang errors in file: [/home/i/ros/irma/gabi-audit/irmago/version.go]:
    
      > [line 7 : column 8] - could not import github.com/timshannon/bolthold (invalid package name: "")
    
    
    [/home/i/ros/irma/gabi-audit/irmago/server/requestorserver/conf.go:387] - G402 (CWE-295): TLS Bad Cipher Suite: TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA (Confidence: HIGH, Severity: HIGH)
      > tls.TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA - // TP - This is supported in the config
    
    
    [/home/i/ros/irma/gabi-audit/irmago/internal/fs/fs.go:76] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(src) - // FP
    
    
    [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/sign.go:136] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(path) - // FP
    
    
    [/home/i/ros/irma/gabi-audit/irmago/internal/fs/fs.go:161] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(path) - // FP
    
    
    [/home/i/ros/irma/gabi-audit/irmago/internal/fs/fs.go:123] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > os.Open(path) - // FP
    
    
    [/home/i/ros/irma/gabi-audit/irmago/irmaconfig.go:998] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(path) // FP -- Using path to open and verify index file.
    
    
    [/home/i/ros/irma/gabi-audit/irmago/irmaconfig.go:1093] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(filepath.Join(conf.Path, path)) // FP -- Using path to open and compute hash of file to check it is valid and listed in the index
    
    
    [/home/i/ros/irma/gabi-audit/irmago/irmaconfig.go:1125] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(filepath.Join(dir, "index")) // FP - Authenticity of the opened file is check
    
    
    [/home/i/ros/irma/gabi-audit/irmago/irmaconfig.go:1132] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(filepath.Join(dir, "pk.pem")) - // FP - dir is taken from the configuration
    
    
    [/home/i/ros/irma/gabi-audit/irmago/irmaconfig.go:1142] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(filepath.Join(dir, "index.sig")) - // FP - dir is taken from the configuration
    
    
    [/home/i/ros/irma/gabi-audit/irmago/requests.go:713] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(path) - // FP - File read and immediately converted into an integer
    
    
    [/home/i/ros/irma/gabi-audit/irmago/irma/cmd/sign.go:160] - G304 (CWE-22): Potential file inclusion via variable (Confidence: HIGH, Severity: MEDIUM)
      > ioutil.ReadFile(path) - // FP - file is read only to hash its contents
    
    
    [/home/i/ros/irma/gabi-audit/irmago/internal/test/testdata.go:45] - G104 (CWE-703): Errors unhandled. (Confidence: HIGH, Severity: LOW)
      > schemeServer.Close() - // FP - Test
    
    
    [/home/i/ros/irma/gabi-audit/irmago/internal/test/testdata.go:39] - G104 (CWE-703): Errors unhandled. (Confidence: HIGH, Severity: LOW)
      > schemeServer.ListenAndServe() - // FP - Test
    
    
    [/home/i/ros/irma/gabi-audit/irmago/attributes.go:258] - G104 (CWE-703): Errors unhandled. (Confidence: HIGH, Severity: LOW)
      > attr.setExpiryDate(nil) - // FP - setExpiryDate never returns an error even though its signature specifies a returned error
    
    
    [/home/i/ros/irma/gabi-audit/irmago/server/irmac/capi.go:160] - G103 (CWE-242): Use of unsafe calls should be audited (Confidence: HIGH, Severity: LOW)
      > unsafe.Pointer(headers.headerValues) - // Done
    
    
    [/home/i/ros/irma/gabi-audit/irmago/server/irmac/capi.go:159] - G103 (CWE-242): Use of unsafe calls should be audited (Confidence: HIGH, Severity: LOW)
      > unsafe.Pointer(headers.headerKeys) - // Done
    
    
    [/home/i/ros/irma/gabi-audit/irmago/server/api.go:211] - G104 (CWE-703): Errors unhandled. (Confidence: HIGH, Severity: LOW)
      > w.Write([]byte(str)) - // TP - This could potentially return an error and it is not handled
    
    
    [/home/i/ros/irma/gabi-audit/irmago/server/api.go:204] - G104 (CWE-703): Errors unhandled. (Confidence: HIGH, Severity: LOW)
      > w.Write(bts) - // TP - Same as before
    
    
    Summary:
       Files: 57
       Lines: 13681
       Nosec: 0
      Issues: 19


<a id="org4317fc9"></a>

# pcap of session

    POST /session/session/76NmN8EjCzdEctdkWEHH/proofs HTTP/1.1
    Host: 192.168.1.3:48680
    User-Agent: irmago
    Content-Length: 1422
    Content-Type: application/json; charset=UTF-8
    X-Irma-Maxprotocolversion: 2.5
    X-Irma-Minprotocolversion: 2.4
    Accept-Encoding: gzip
    
    {"proofs":[{"c":"rT/+LK6us2Q7Xo+sP9pDIow16K/0+r1uy37aar7Fve0=","A":"UargdbZvMo1pg7NN2J2aFf1PTy/2I39mp8UnE0TUvrnPjcClJph1OdgZ6bvp2yiAbsLQtpOnjCbYAsscCCSplbBPHKo6BFgzZZhmTQXlGInUmL2UKUb+78YsrbHGh/XQDpeEV9KUJLmHi5G4T2bjpHsKA1qn0TvXQLY+CHkWX5eyGti+yAdY6o516LE0UlmZHvEIHApNdcr7WEMj8R2azokssUSIohNQHYyKbeHvi8OnRlJtud4c53Zb+MFuZGYGKMb7H5DxUsB1OOJkBX0EQBtjcVlIUhfD4HZiAwb4ZV5lgWL+1Zra0pgeqLG5HPep0fjDXLcpA73omj1HTPTsCQ==","e_response":"SHBph4JPjTgTLfy40toXAt4ddvdflwBf+jNM3fGTlzJIRCI8wMUD/+4PyJh3iGL6vMFKhfw6N24+vnkm/Vqb","v_response":"BSl++egt1ISmcCSwEvFp2S7JbVxDNu/MSJsxgnIbPkn6k5Sd2km2GPXbIklrtAElDqItBamu2moYH47TKC0af3hpubAAazT6R59mdSNtPLgovFoM/LEKkATNIU5DHDmu28MtCS1e89KuxzY96wUitC8pQshMptIASdxxh9g+c6zhih14KP/qlcTDlk8/sxucApywav8SvOCAqM0THeVYanHr2xsSL6Dpdqivs/t5v1hTP2hv1cSku5kz65oaSl1fnmNzCr5SzZG99Bmn54FYk0k+la8CuvE0e+cBqnXZC3hd6RmM6tgddtIAep+5/DS+YSqnucEjDeStA8oY6myPD7uyMhqULq4xARXMHViDl4aoJoqd5WH3lC18w5+tQNMeTYfiio47mXdKs7obK7+qSM0eYBuL/fbww6hz4oSlg0KUJLAAbwMc1Br72TIRDjgPA8Zr04JFlxG9nEN3LSFHmJnhl7tmB8wyepJwG3DkYZVuc92FtArVQM7Kq43jCNcp42qvuHD0K1XKHV1a8fmq2pw=","a_responses":{"0":"hhFOks4aAZ9WIsAEuPhJBPfgG7shiXo+nJq3e0zvjRF/ga/ieeVX+gaMRLKKEto/jnEaOvRqoPSKBg8crwh0PqytDwGum4vtQ4MK9JwsNkM=","3":"Ep3Cn9puXnfWb6J4hLoBPk82yCzZ98PERlOvfaKjPrHWl0GxgHY93cS4wQ5/dXq05hG1jOedAYvfrYg3pk22Ucb+HSIDtZ/CSNIVgt53L4s="},"a_disclosed":{"1":"AwAKLgAaAATZZxdMn4TvQ6F/mVxWb6a7","2":"5MrO6tjC5Q=="}}],"indices":[[{"cred":0,"attr":2}]]}HTTP/1.1 200 OK
    Date: Mon, 16 Dec 2019 22:27:05 GMT
    Content-Length: 7
    Content-Type: text/plain; charset=utf-8
    
    "VALID"
    
    
    TRACE => request headers=map[Accept-Encoding:[gzip] Content-Length:[1422] Content-Type:[application/json; charset=UTF-8] User-Agent:[irmago] X-Irma-Maxprotocolversion:[2.5] X-Irma-Minprotocolversion:[2.4]] message=
    
    {"proofs":
       [
        {"c":"rT/+LK6us2Q7Xo+sP9pDIow16K/0+r1uy37aar7Fve0=","A":"UargdbZvMo1pg7NN2J2aFf1PTy/2I39mp8UnE0TUvrnPjcClJph1OdgZ6bvp2yiAbsLQtpOnjCbYAsscCCSplbBPHKo6BFgzZZhmTQXlGInUmL2UKUb+78YsrbHGh/XQDpeEV9KUJLmHi5G4T2bjpHsKA1qn0TvXQLY+CHkWX5eyGti+yAdY6o516LE0UlmZHvEIHApNdcr7WEMj8R2azokssUSIohNQHYyKbeHvi8OnRlJtud4c53Zb+MFuZGYGKMb7H5DxUsB1OOJkBX0EQBtjcVlIUhfD4HZiAwb4ZV5lgWL+1Zra0pgeqLG5HPep0fjDXLcpA73omj1HTPTsCQ==",
         "e_response":"SHBph4JPjTgTLfy40toXAt4ddvdflwBf+jNM3fGTlzJIRCI8wMUD/+4PyJh3iGL6vMFKhfw6N24+vnkm/Vqb",
         "v_response":"BSl++egt1ISmcCSwEvFp2S7JbVxDNu/MSJsxgnIbPkn6k5Sd2km2GPXbIklrtAElDqItBamu2moYH47TKC0af3hpubAAazT6R59mdSNtPLgovFoM/LEKkATNIU5DHDmu28MtCS1e89KuxzY96wUitC8pQshMptIASdxxh9g+c6zhih14KP/qlcTDlk8/sxucApywav8SvOCAqM0THeVYanHr2xsSL6Dpdqivs/t5v1hTP2hv1cSku5kz65oaSl1fnmNzCr5SzZG99Bmn54FYk0k+la8CuvE0e+cBqnXZC3hd6RmM6tgddtIAep+5/DS+YSqnucEjDeStA8oY6myPD7uyMhqULq4xARXMHViDl4aoJoqd5WH3lC18w5+tQNMeTYfiio47mXdKs7obK7+qSM0eYBuL/fbww6hz4oSlg0KUJLAAbwMc1Br72TIRDjgPA8Zr04JFlxG9nEN3LSFHmJnhl7tmB8wyepJwG3DkYZVuc92FtArVQM7Kq43jCNcp42qvuHD0K1XKHV1a8fmq2pw=",
         "a_responses":{
    	  "0":"hhFOks4aAZ9WIsAEuPhJBPfgG7shiXo+nJq3e0zvjRF/ga/ieeVX+gaMRLKKEto/jnEaOvRqoPSKBg8crwh0PqytDwGum4vtQ4MK9JwsNkM=",
    	  "3":"Ep3Cn9puXnfWb6J4hLoBPk82yCzZ98PERlOvfaKjPrHWl0GxgHY93cS4wQ5/dXq05hG1jOedAYvfrYg3pk22Ucb+HSIDtZ/CSNIVgt53L4s="},
         "a_disclosed":{
    	  "1":"AwAKLgAaAATZZxdMn4TvQ6F/mVxWb6a7",
    	  "2":"5MrO6tjC5Q=="}
    }],
     "indices": [[{"cred":0,"attr":2}]]
    }
    
     method=POST type=client url=/session/session/76NmN8EjCzdEctdkWEHH/proofs


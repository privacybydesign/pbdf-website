---
layout: page
header:
  image_fullwidth: header_poly2.png
  title: Steun de Stichting
meta_title: Steun
permalink: /steun/
language: nl
translations:
  en: /support
---

De stichting Privacy by Design ontwikkelt en onderhoudt de Yivi-app
voor privacy-vriendelijk inloggen en ondertekenen. Dat gebeurt zonder
winstoogmerk, en zonder misbruik van persoonsgegevens. Vindt u dat
belangrijk? Dan kunt u hieronder uw morele steun omzetten in
financiële steun.

Via iDEAL kunt u een kleine persoonlijke bijdrage (naar keuze) leveren
aan het werk van de stichting. Neem vooral [contact](/contact) op voor
andere vormen van ondersteuning of samenwerking.

<fieldset id="donation">
    <legend>Doneren</legend>
    <div id="donation-loading" class="panel callout hide">
      Verbinden met uw bank...
    </div>
    <div id="donation-failed" class="alert-box alert hide">
        Er is een fout opgetreden. Probeer het later opnieuw.
    </div>
    <div id="donation-cancelled" class="alert-box warning hide">
       Donatie is geannuleerd.
    </div>
    <p id="donation-success" class="hide">
        Bedankt voor uw donatie!
    </p>
    <form id="donation-form" class="hide" onsubmit="return false;">
        <div>
            <label>Kies uw bank
                <select id="donation-select-bank" required>
                    <option disabled value="">Laden...</option>
                </select>
            </label>
            <small class="error hide">Vereist</small>
        </div>
        <div>
            <label>Kies donatie
                <select id="donation-select-amount" required>
                    <option disabled value="">Laden...</option>
                </select>
            </label>
            <small class="error hide">Vereist</small>
        </div>
        <div class="text-right">
            <input type="submit" id="donation-submit" class="button" value="Start betaling"/>
        </div>
    </form>
</fieldset>

<script src="/assets/js/donation.js" defer></script>


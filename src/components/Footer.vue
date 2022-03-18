<template>
<footer class="footer" id="#footer">
  <div class="container-sm px-lg-0">
     <hr class="my-5" />

        <div class="row">
          <div class="col-md-6">
           <img alt="Merck" class="foot-logo" src="@/assets/images/merck-logo.png" />
            <ul class="list-unstyled ps-lg-4 my-4 foot-nav">
              <li class="my-2">
                <a href="https://www.msdprivacy.com/us/en/" target="_blank">Privacy</a>
              </li>
              <li class="my-2">
                <a href="https://www.merck.com/terms-of-use/" target="_blank">Terms of use</a>
              </li>
              <li class="my-2">
                <a href="https://www.msdprivacy.com/us/en/cookie-privacy-policy.html" target="_blank">Cookie policy</a>
              </li>
              <li class="my-2">
                <router-link to="/Sitemap">Sitemap</router-link>
              </li>
              <li class="my-2">
                <a href="https://www.merck.com/" target="_blank">Merck.com</a>
              </li>
              <li class="my-2">
                <a href="https://msdimegrants.com/" target="_blank">IndependentMedicalEducationGrants.com</a>
              </li>
              <li class="my-2">
                <a href="https://www.versaic.com" target="_blank">Merck’s grant submission tool</a>
              </li>
            </ul>
          </div>
              <div class="col-md-6 d-flex d-flex justify-content-md-end px-3 my-md-0 my-4">
           
               <a href="https://www.essentialaccessibility.com/merck" class="interstitial-link me-4">
              <img src="@/assets/images/accessibility.png" alt="Accessibility icon" class="img-fluid"></a>

              
             <a href="https://privacy.truste.com/privacy-seal/validation?rid=140649f5-9394-46e8-bfe5-b4ea8a8c600e" class="interstitial-link me-4">
              <img src="@/assets/images/seal0.svg" alt="View Privacy Shield Verification Status" class="img-fluid trust-ico"></a>
                   <a href="https://privacy.truste.com/privacy-seal/validation?rid=11c1aa82-b7e7-4a2f-b02e-ba935e661720" class="interstitial-link">
              <img src="@/assets/images/seal_APEC_en_m.svg" alt="View APEC CBPR Privacy Certification Status" class="img-fluid trust-ico"></a>

           
          </div>
        </div>
        <div class="row copyright-info">
          <div class="col-12 mx-lg-4">
            <p class="mb-0 text-gray">Copyright 2021 Merck Sharp &amp; Dohme Corp. a subsidiary of Merck &amp; Co., Inc.</p>
            <p class="text-gray">This site is intended only for residents of the United States. All rights reserverd.</p>
          </div>
        </div>
  </div>
      </footer>
</template>
<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>


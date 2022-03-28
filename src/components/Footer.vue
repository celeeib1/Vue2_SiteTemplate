<template>
<footer class="footer" id="#footer">
  <div class="container-sm px-lg-0">
     <hr class="my-5" />

        <div class="row">
          <div class="col-md-6">
          <h3>Footer Component</h3>
           <!--<img alt="logo" class="foot-logo" src="@/assets/images/logo.png" />-->
            <ul class="list-unstyled ps-lg-4 my-4 foot-nav">
              <li class="my-2">
                <a class="interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal" href="https://google.com" target="_blank">Policy</a>
              </li>
              <li class="my-2">
                <a class="interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal" href="https://google.com" target="_blank">Terms</a>
              </li>
              <li class="my-2">
                <a class="interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal" href="https://google.com" target="_blank">Cookies</a>
              </li>
              <li class="my-2">
                <router-link to="/Sitemap">Sitemap</router-link>
              </li>
              <li class="my-2">
                <a class="interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal" href="https://google.com/" target="_blank">Link</a>
              </li>
              <li class="my-2">
                <a class="interstitial-link" href="https://google.com" data-bs-toggle="modal" data-bs-target="#interstitial-modal" target="_blank">Link</a>
              </li>
              <li class="my-2">
                <a data-bs-toggle="modal" data-bs-target="#interstitial-modal" href="https://google.com" target="_blank">Link</a>
              </li>
            </ul>
          </div>
              <div class="col-md-6 d-flex d-flex justify-content-md-end px-3 my-md-0 my-4">
           
               <a data-bs-toggle="modal" data-bs-target="#interstitial-modal" href="https://google.com" class="interstitial-link me-4">
              <img src="@/assets/images/accessibility.png" alt="Accessibility icon" class="img-fluid"></a>

              
             <a data-bs-toggle="modal" data-bs-target="#interstitial-modal" href="https://google.com" class="interstitial-link me-4">
              <img src="@/assets/images/seal0.svg" alt="loren ipsum" class="img-fluid trust-ico"></a>
                   <a data-bs-toggle="modal" data-bs-target="#interstitial-modal" href="https://google.com" class="interstitial-link">
              <img src="@/assets/images/seal_APEC_en_m.svg" alt="loren ipsum" class="img-fluid trust-ico"></a>

           
          </div>
        </div>
        <div class="row copyright-info">
          <div class="col-12 mx-lg-4">
            <p class="mb-0 text-gray">Copyright 2021 Curabitur molestie, orci commodo malesuada porta, libero turpis efficitur nis</p>
            <p class="text-gray">Orci commodo malesuada porta, libero turpis efficitur nis. All rights reserverd.</p>
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


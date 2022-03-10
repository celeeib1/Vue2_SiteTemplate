<template>
<footer class="footer" id="#footer">
  <div class="container">
     <hr class="my-5" />
    
      

        <div class="row">
          <div class="col-md-6">
           <img alt="Merck" class="foot-logo" src="@/assets/images/merck-logo.png" />
            <ul class="list-unstyled ps-lg-4 my-4 foot-nav">
              <li class="my-2">
                <a href="#">Privacy</a>
              </li>
              <li class="my-2">
                <a href="#">Terms of use</a>
              </li>
              <li class="my-2">
                <a href="#">Cookie policy</a>
              </li>
              <li class="my-2">
                <a href="#">Sitemap</a>
              </li>
              <li class="my-2">
                <a href="#" target="_blank">Merck.com</a>
              </li>
              <li class="my-2">
                <a href="#" target="_blank">IndependentMedicalEducationGrants.com</a>
              </li>
              <li class="my-2">
                <a href="#">Merck’s grant submission tool</a>
              </li>
            </ul>
          </div>
              <div class="col-md-6">
            <img alt="TRUSTe Verified Privacy, Powered by TrustArc" class="img-fluid" src="@/assets/images/trust-logos.png" />
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


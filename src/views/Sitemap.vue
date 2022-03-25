<template>
  <div class="sitemap">
    <HeaderNav />
    <main id="content" role="main" tabindex="-1">
          <!--<div class="container-fluid faq_banner" role="presentation"></div>-->
      <!--START CONTAINER-->
      <div class="container-md py-5">
        <div class="row">
          <div class="col-12">
            <h1 id="main-title" class="innerpage my-5">Sitemap</h1>
            <ul class="list-unstyled">
            <li class="mb-4">
                <router-link to="/" class="content-link">Home</router-link>
              </li>
              <li class="mb-4">
                <router-link to="/grant-types" class="content-link">Grant types &amp; eligibility</router-link>
              </li>
              <li class="mb-4">
                <router-link to="/learn-about-process" class="content-link">Learn about the process</router-link>
              </li>
              <li class="mb-4">
                <router-link to="/after-you-apply" class="content-link">After you apply or receive a grant</router-link>
              </li>

              <li class="mb-4">
                <router-link to="/faqs" class="content-link">Have a question?</router-link>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <!--END CONTAINER-->


    </main>
    <LeavingModal/>
    <Footer />
  </div>
</template>

<script>
  import HeaderNav from '@/components/HeaderNav.vue';
  import Footer from "@/components/Footer.vue";
  import LeavingModal from "@/components/LeavingModal.vue";

  export default {
    name: 'Faqs',
    components: {
      HeaderNav,
      Footer,
      LeavingModal
    }
    };
  
</script>
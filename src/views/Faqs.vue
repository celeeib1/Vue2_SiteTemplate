<template>
  <div class="learn-about-process">
    <HeaderNav />
    <main id="content" role="main" tabindex="-1">
          <div class="container-fluid grant_banner" role="presentation"></div>
      <!--START CONTAINER-->
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <h1 id="main-title" class="innerpage my-5">What types of grants does Merck U.S. Patient Advocacy (USPA)
              offer?</h1>
          </div>
        </div>
        
          <FaqsTabs />
      </div>
      <!--END CONTAINER-->


     
         <!--START CONTAINER-->
          <div class="container py-5 my-3">
          
          </div>
        <!--END CONTAINER-->  
          
    </main>
    <Footer />
  </div>
</template>

<script>
  import HeaderNav from '@/components/HeaderNav.vue';
  import Footer from "@/components/Footer.vue";
  import FaqsTabs from "@/components/FaqsTabs.vue";


  export default {
    name: 'Faqs',
    components: {
      HeaderNav,
      Footer,
      FaqsTabs
     
    }
    };
  
</script>
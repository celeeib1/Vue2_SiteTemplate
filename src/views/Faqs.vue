<template>
  <div class="faqs">
    <HeaderNav />
    <main id="content" role="main" tabindex="-1">
          <div class="container-fluid faq_banner" role="presentation"></div>
      <!--START CONTAINER-->
      <div class="container-md py-5">
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
          <div class="container-md py-5 my-3 px-4">
          <div class="row contact-box">
          <div class="col-md-2 col-3 bg-navy p-4"><img class="c-icon d-block m-auto" alt="" role="presentation" src="@/assets/images/icon-contact.png"></div>
          <div class="col-md-10 col-9 bg-ltgray py-4 px-5"><p class="mb-0 d-block pt-2"><strong>Still didn’t find your answer? </strong> 
          <a href="mailto:uspatientadvocacy@merck.com" class="content-link ms-lg-3">Contact the Patient Advocacy grants team</a></p>
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
  import FaqsTabs from "@/components/FaqsTabs.vue";
  import LeavingModal from "@/components/LeavingModal.vue";

  export default {
    name: 'Faqs',
    components: {
      HeaderNav,
      Footer,
      FaqsTabs,
      LeavingModal
    }
    };
  
</script>
<template>
  <div class="after-you-apply">
    <HeaderNav />
    <main id="content" role="main" tabindex="-1">
    <div class="container-fluid after_apply_banner" role="presentation"></div>

      <!--START CONTAINER ICONS-->
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <h1 id="main-title" class="innerpage mt-5">What happens after I submit my grant application?</h1>
           
          </div>
        </div>
        </div>
         <!--END CONTAINER-->  
         <!--START CONTAINER-->
          <div class="container py-5 my-3">
          <HelpfulLinks />
          </div>
        <!--END CONTAINER-->  
          
    </main>
    <Footer />
  </div>
</template>

<script>
  import HeaderNav from '@/components/HeaderNav.vue';
  import Footer from "@/components/Footer.vue";
  import HelpfulLinks from "@/components/HelpfulLinks.vue";

  export default {
    name: 'grant-types',
    components: {
      HeaderNav,
      Footer,
      HelpfulLinks
    }
  }
</script>
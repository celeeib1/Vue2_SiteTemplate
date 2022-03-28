<template>
  <div class="grant-types">
    <HeaderNav />
    <main id="content" role="main" tabindex="-1">
      <!--START CONTAINER-->
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
            <h1 id="main-title" class="innerpage my-5">What types of grants does Merck U.S. Patient Advocacy (USPA)
              offer?</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 pe-lg-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>

            <p>Etiam porttitor mi sit amet urna pulvinar, in placerat nibh commodo:
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 pe-lg-5">
            <a href="https://google.com/" target="_blank" class="arrow-btn bg-teal my-3 interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal"><span>Lorem ipsum dolor</span></a>
          </div>
          <div class="col-lg-6 ps-lg-5">
            <a href="https://www.google.com"  target="_blank" class="arrow-btn bg-teal my-3 interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal"><span>Lorem ipsum dolor</span></a>
                </div>
                </div>
      </div>
      <!--END CONTAINER-->

      <div class="container-fluid grant_banner" role="presentation"></div>

      <!--START CONTAINER-->
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
          <h2 class="py-4">Aenean molestie sollicitudin sem ac molestie.</h2>
          <p>Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non interdum suscipit, metus.</p>
          <p>Ut convallis, massa non interdum suscipit, metus:</p>
          <ul>
          <li>Interdum suscipit, metus</li>
          <li>Phasellus eu risus</li>
          <li>Sollicitudin sem</li> 
          <li>Massa non interdum</li>
          </ul>
          <p>Etiam porttitor mi sit amet urna pulvinar, in placerat nibh commodo:</p>
          <ul>
          <li>Interdum suscipit, metus</li>
          <li>Phasellus eu risus</li>
          <li>Sollicitudin sem</li> 
          <li>Massa non interdum</li>
          </ul>
          <p class="mb-0"> Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum.</p>
          </div>
          </div>
      </div>
      <!--END CONTAINER-->
      <div class="container-fluid grant_banner2" role="presentation"></div>

      <!--START CONTAINER-->
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
          <h2 class="py-4">Sed ornare</h2>
          <p>Phasellus eu risus orci. Ut convallis, massa non 
                interdum.</p>
         <p>Quis porttitor elit ullamcorper vel <router-link to="/" class="content-link">porttitor</router-link>.</p>

     <p>Vulputate odio, ut rutrum eros est at lectus:</p>
      <ul>
          <li>Euismod vel dapibus</li>
          <li>Euismod vel dapibus</li>
          <li>Euismod vel dapibus</li>
      </ul>
      <p class="mb-0">Nullam sit amet consectetur ex. Donec neque lectus, euismod vel dapibus id, vestibulum ac purus. Morbi sagittis tincidunt ligula, 
      nec tempor velit tincidunt et. In hac habitasse platea dictumst.</p>
      <p>Lorem <a class="content-link" href="#">vestibulum ac purus</a> apibus id.</p>
      <p class="text-teal bold mt-4">Aenean molestie sollicitudin sem ac molestie?</p>

          </div>
           </div>
           </div>
       <!--END CONTAINER-->
     <!--START CONTAINER-->
      <div class="container-fluid bg-ltgray py-5">
      <div class="container">
            <div class="row">
          <div class="col-lg-6"><img alt="" role="presentation" src="@/assets/images/grant-type-banner3.png" class="img-fluid" />
      </div>
          <div class="col-lg-6 ps-lg-5">
          <h2 class="pt-4">Euismod vel dapibus id, vestibulum ac purus. Morbi sagittis tincidunt ligula?</h2>
          <h3 class="pt-3">Vestibulum ac purusm orbi tincidunt ligula</h3>
          <p>Integer ut nisi sit amet diam elementum sagittis rutrum ac ante:</p>
           <ul>
          <li>Integer ut nisi sit amet diam elementum sagittis rutrum ac ante.</li>
          <li>Nisi sit ac ante.</li>
          </ul>
          <p>Consectetur ex. Donec neque lectus, euismod vel dapibus id, vestibulum ac purus. Morbi sagittis tincidunt ligul.</p>
           <h3 class="pt-3">Eeuismod vel dapibus is</h3>
          <p>Ex donec neque lectus, euismod vel dapibus id, vestibulum ac purus. Morbi sagittis tincidunt ligul.</p>
            <p class="text-teal bold mt-4">Morbi sagittis? Vestibulum ac purus.</p>
         
          </div>
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
     <LeavingModal/>
    <Footer />
  </div>
</template>

<script>
  import HeaderNav from '@/components/HeaderNav.vue';
  import Footer from "@/components/Footer.vue";
  import HelpfulLinks from "@/components/HelpfulLinks.vue";
  import LeavingModal from "@/components/LeavingModal.vue";

  export default {
    name: 'grant-types',
    components: {
      HeaderNav,
      Footer,
      HelpfulLinks,
      LeavingModal
    }
  }
  </script>

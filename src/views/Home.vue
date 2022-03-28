<template>
  <div class="home">
    <HeaderNav />
    <main id="content" role="main" tabindex="-1">
      <div class="container-fluid hm_banner" role="presentation"></div>
      <!--START CONTAINER-->
      <div class="container py-5 section">
        <div class="row">
          <div class="col-12">
            <h1 id="main-title" class="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pe-lg-4">
            <h2 class="text-teal">Blandit nisl</h2>
            <p>
              Fusce elit risus, consequat eget consectetur id, tempor sit amet nunc. Vestibulum sodales blandit nisl vitae consequat.
            </p>
          </div>
          <div class="col-md-6 ps-lg-4">
            <h2 class="text-teal">Fusce</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit risus, consequat eget consectetur id, tempor sit amet nunc. Vestibulum sodales blandit nisl vitae consequat.
            </p>
          </div>
        </div>
        <hr class="my-5" />
        <div class="row">
          <div class="col-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit risus, consequat eget consectetur id, tempor sit amet nunc.</p>
            <p>Proin ac rutrum velit. Nullam sit amet consectetur ex. Donec neque lectus, euismod vel dapibus id, vestibulum ac purus. </p>
            <p>Morbi sagittis tincidunt ligula:</p>
          </div>
        </div>
        <div class="row mt-4 mb-5">
          <div class="col-lg-5 col-md-2">
            <img alt="" role="presentation" src="@/assets/images/FPO-oncology.jpg" class="img-fluid" />
          </div>
          <div class="col-lg-7 col-md-10">

          <div class="row">
          <div class="col-md-6">
            <ul class="conditions mt-xl-0 mt-lg-0 mt-md-0 mt-5 mb-0">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Fusce elit risus</li>
              <li>Dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Fusce elit risus</li>
              <li>Dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Sit amet</li>
             </ul>
              <!--<li class="list-unstyled">
                <p class="mb-0"><a class="toggle-link text-teal" data-bs-toggle="collapse" href="#collapseSubList"
                    role="button" aria-expanded="false" aria-controls="collapseSubList">more</a>
                </p>
              </li>-->
              </div>
              <div class="col-md-6">
              <ul class="conditions mt-0">
               <li>Ipsum dolor sit
               <ul>
                <li>Sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Fusce elit risus</li>
              <li>Dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Sit amet</li>
                
                </ul>
                  </li>
            
            </ul>
           
           
            </div>
          </div>

          </div>
        </div>
       
        <div class="row grant-offer">
          <div class="col-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit risus, consequat eget consectetur id, tempor sit amet nunc. Vestibulum sodales blandit nisl vitae consequat.
            </p>

          </div>
          <div class="col-lg-5"> <a href="https://www.google.com" target="_blank" class="arrow-btn bg-teal my-4 single interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal"><span>External Link</span></a></div>
          <div class="col-lg-6"></div>
          <div class="col-lg-1"></div>
        </div>

      </div>
      <!--END CONTAINER-->
      <div class="container-fluid hm_banner2 section"></div>

      <!--START CONTAINER-->
      <div class="container-fluid bg-ltgray py-5 section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 pe-lg-5">
               <router-link to="/grant-types" class="arrow-btn bg-teal my-3"><span>Fusce elit risu</span></router-link>
            </div>
            <div class="col-lg-6 ps-lg-5">
              <a href="https://www.google.com" target="_blank" class="arrow-btn bg-teal my-3 interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal"><span>Fusce elit risu</span></a>
            </div>
            <div class="col-lg-6 pe-lg-5">
              <a href="https://www.google.com" target="_blank" class="arrow-btn bg-teal my-3 interstitial-link" data-bs-toggle="modal" data-bs-target="#interstitial-modal"><span>Fusce elit risu</span></a>
            </div>
            <div class="col-lg-6 ps-lg-5">
              <router-link to="/faqs" class="arrow-btn bg-teal my-3"><span>Fusce elit risu<br />
                  Elit risus</span></router-link>
            </div>
          </div>

        </div>

      </div>
      <!--END CONTAINER-->
      <!--START CONTAINER-->
      <div class="container grant-offer py-5">
        <div class="row">
          <div class="col-12">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elit risus, consequat eget consectetur id, tempor sit amet nunc. Vestibulum sodales blandit nisl vitae consequat.
            </p>
          </div>
        </div>
      </div>
      <!--START CONTAINER-->
    </main>
    <LeavingModal/>
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderNav from "@/components/HeaderNav.vue";
  import Footer from "@/components/Footer.vue";
  import LeavingModal from "@/components/LeavingModal.vue";

  export default {
    name: "Home",
    components: {
      HeaderNav,
      Footer,
      LeavingModal
    }
  };
</script>
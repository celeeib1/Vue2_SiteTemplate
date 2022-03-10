<template>
  <div class="home">
    <HeaderNav />
    <main id="content" role="main" tabindex="-1">
      <div class="container-fluid hm_banner" role="presentation"></div>
      <!--START CONTAINER-->
      <div class="container py-5 section">
        <div class="row">
          <div class="col-12">
            <h1 id="main-title" class="my-5">Welcome to the Merck U.S. Patient Advocacy (USPA) Independent Grants website</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 pe-lg-4">
            <h2 class="text-teal">Mission</h2>
            <p>
              Our mission is to understand the needs and experiences of patients, caregivers, and family members and
              provide support for high quality, innovative educational and awareness initiatives.
            </p>
          </div>
          <div class="col-md-6 ps-lg-4">
            <h2 class="text-teal">Vision</h2>
            <p>
              We aspire to be the most trusted industry partner that amplifies the voice and addresses the needs of the
              patient in all that we do and the programs we support.
            </p>
          </div>
        </div>
        <hr class="my-5" />
        <div class="row">
          <div class="col-12">
            <p>Patients are the cornerstone of the work we do at Merck. We believe that providing support to non-profit
              organizations through grants and charitable contributions
              is an important way to help address local, regional, and global health challenges.</p>
            <p>Merck offers independent grants that follow internal and external compliance guidelines, rules, and
              regulations.</p>
            <p>The Merck USPA department offers independent grants to support U.S. non-profits who engage in patient
              advocacy, patient education, and charitable fundraising in the following areas:</p>
          </div>
        </div>
        <div class="row mt-4 mb-5">
          <div class="col-md-5">
            <img alt="" role="presentation" src="@/assets/images/FPO-oncology.jpg" class="img-fluid" />
          </div>
          <div class="col-md-7">


          <div class="row">
          <div class="col-md-6">
            <ul class="conditions mt-xl-0 mt-lg-0 mt-md-0 mt-5">
              <li>Anesthesiology/Perioperative Care</li>
              <li>Chronic Cough</li>
              <li>Cardiovascular - Heart Failure</li>
              <li>Cardiovascular - Pulmonary Arterial Hypertension</li>
              <li>Diabetes</li>
              <li>Gastrointestinal (GI)/Rheumatology</li>
              <li>Hepatitis C</li>
              <li>HIV/AIDS</li>
              <li>Human papillomavirus (HPV)</li>
              <li>Immunization – Adult</li>
              <li>Immunization – Pediatric (for children)</li>
              <li>Infectious Disease</li>
             </ul>
              <!--<li class="list-unstyled">
                <p class="mb-0"><a class="toggle-link text-teal" data-bs-toggle="collapse" href="#collapseSubList"
                    role="button" aria-expanded="false" aria-controls="collapseSubList">more</a>
                </p>
              </li>-->
              </div>
              <div class="col-md-6">
              <ul class="conditions mt-xl-0 mt-lg-0 mt-md-0 mt-5">
               <li>Oncology (cancer)
               <ul>
                <li>Bladder Cancer</li>
                <li>Breast Cancer</li>
                <li>Cervical Cancer</li>
                <li>Colorectal Cancer</li>
                <li>Endometrial Cancer (uterine)</li>
                <li>Gastric Cancer (stomach)</li>
                <li>Head and neck Cancer</li>
                <li>Hematologic/Blood Cancers</li>
                <li>Hepatocellular Carcinoma (liver)</li>
                <li>Melanoma (skin) Cancer</li>
                <li>Non-Small Cell Lung Cancer</li>
                <li>Ovarian Cancer</li>
                <li>Pan-Tumor</li>
                <li>Prostate Cancer</li>
                <li>Renal Cell Carcinoma (kidney)</li>
                <li>Small Cell Lung Cancer</li> 
                </ul>
                  </li>
              <li>Rare Disease</li>
              <li>Sleep Disorders</li>
            </ul>
           
           
            </div>
          </div>

          </div>
        </div>
       
        <div class="row grant-offer">
          <div class="col-12">
            <p>
              Merck Sharp &amp; Dohme (MSD), known as Merck &amp; Co., Inc. in the U.S. and Canada, offers support
              through a variety of
              grant and charitable contribution programs, each of which has its own focus and application process.
            </p>

          </div>
          <div class="col-lg-5"> <a href="#" class="arrow-btn bg-teal my-4 single"><span>Apply for a patient advocacy
                grant</span></a></div>
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
              <a href="#" class="arrow-btn bg-teal my-3"><span>Apply for a patient advocacy grant</span></a>
            </div>
            <div class="col-lg-6 ps-lg-5">
              <a href="#" class="arrow-btn bg-teal my-3"><span>What to do after you apply<br />
                  or receive a grant</span></a>
            </div>
            <div class="col-lg-6 pe-lg-5">
              <a href="#" class="arrow-btn bg-teal my-3"><span>Understanding the grant process</span></a>
            </div>
            <div class="col-lg-6 ps-lg-5">
              <a href="#" class="arrow-btn bg-teal my-3"><span>Need help?<br />
                  Explore our FAQs</span></a>
            </div>
          </div>

        </div>

      </div>
      <!--END CONTAINER-->
      <!--START CONTAINER-->
      <div class="container grant-offer py-5">
        <div class="row">
          <div class="col-12">
            <p>
              Merck Sharp &amp; Dohme (MSD), known as Merck &amp; Co., Inc. in the U.S. and Canada, offers support
              through a variety of
              grant and charitable contribution programs, each of which has its own focus and application process.
            </p>
          </div>
        </div>
      </div>
      <!--START CONTAINER-->
    </main>
    <Footer />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HeaderNav from "@/components/HeaderNav.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: "Home",
    components: {
      HeaderNav,
      Footer
    }
  };
</script>
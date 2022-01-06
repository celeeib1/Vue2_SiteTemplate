<template>
  <div class="home">
    <HeaderNav />
    <div class="container-fluid hm_banner"></div>
    <div class="container p-5">
      <div class="row">
        <div class="col-12">
          <h1 class="my-5">Welcome to the Merck US Patient Advocacy<br/>
          (USPA) Independent Grants website</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 pe-lg-4">
          <h2 class="text-teal">Mission</h2>
          <p>
            Our mission is to understand the needs and experiences of patients, caregivers, and family members and provide support for high quality,
            innovative educational and awareness initiatives.
          </p>
        </div>
        <div class="col-md-6 ps-lg-4">
          <h2 class="text-teal">Vision</h2>
          <p>
            We aspire to be the most trusted industry partner that amplifies the voice and addresses the needs of the patient in all that we do
            and the programs we support.
          </p>
        </div>
      </div>
      <hr class="my-5" />
      <div class="row">
        <div class="col-12">
          <p>Patients are the cornerstone of the work we do at Merck. We believe that providing support to non-profit organizations through grants and charitable contributions 
            is an important way to help address local, regional, and global health challenges. Merck offers independent grants that follow internal and external compliance guidelines, 
            rules, and regulations.</p>
          <p>The Merck USPA department offers independent grants to support U.S. non-profits who engage in patient advocacy, patient education, and charitable fundraising in the following areas:</p>
        </div>
      </div>
      <div class="row mt-4 mb-5">
        <div class="col-md-6">
          <img src="@/assets/images/FPO-oncology.jpg" class="img-fluid" />
        </div>
        <div class="col-md-6">
          <ul>
            <li>Oncology (cancer)</li>
            <ul>
              <li>Non-Small Cell Lung Cancer</li>
              <li>Breast Cancer</li>
              <li>Melanoma (skin) Cancer</li>
              <li>Head and neck Cancer</li>
              <li>Colorectal Cancer</li>
              <li>Prostate Cancer</li>
            </ul>
            <p><a href="#" class="text-teal">more &gt;</a></p>
          </ul>
          <ul>
            <li>Hepatitis C</li>
            <li>HIV/AIDS</li>
            <li>Immunization – Adult</li>
            <li>Immunization – Pediatric (for children)</li>
            <li>Human papillomavirus (HPV)</li>
            <li>Diabetes</li>
            <li>Chronic Cough</li>
            <li>Cardiovascular - Heart Failure</li>
            <li>Infectious Disease</li>
            <li>Anesthesiology/Perioperative Care</li>
            <li>Sleep Disorders</li>
            <li>Gastrointestinal (GI)/Rheumatology</li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p>
            Merck Sharp &amp; Dohme (MSD), known as Merck &amp; Co., Inc. in the U.S. and Canada, offers support through a variety of
            grant and charitable contribution programs, each of which has its own focus and application process.
          </p>
          <a href="#" class="arrow-btn p-3 bg-teal my-4 d-inline-block single">Apply for a patient advocacy grant</a>
        </div>
      </div>
    </div>
    <div class="container-fluid hm_banner2"></div>
    <div class="container-fluid bg-ltgray py-5">
      <div class="container">
      <div class="row">
        <div class="col-md-6 pe-lg-5">
          <a href="#" class="arrow-btn p-4 bg-teal d-block my-5">Apply for a patient advocacy grant<br/>&nbsp;</a>
          <a href="#" class="arrow-btn p-4 bg-teal d-block my-5">What to do after you apply<br/>
            or receive a grant</a>
        </div>
        <div class="col-md-6 ps-lg-5">
          <a href="#" class="arrow-btn p-4 bg-teal d-block my-5">Understanding the grant process<br/>&nbsp;</a>
          <a href="#" class="arrow-btn p-4 bg-teal d-block my-5">Need help?<br/>
          Explore our FAQs</a>
        </div>
      </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row">
        <div class="col-12">
          <p>
            Merck Sharp &amp; Dohme (MSD), xx, also offers support through a variety of grant and charitable contribution programs, each of
            which has its own focus and application process.
          </p>
        </div>
      </div>
      <hr />
      <!--Accordion startr-->

      <div class="accordion my-5" id="hlAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button bg-navy tex-white d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">Helpful links</button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#hlAccordion">
            <div class="accordion-body">
              <ul class="list-unstyled help-link-list">
                <li>
                  <a href="#">Merck news</a>
                </li>
                <li>
                  <a href="#">Merck COVID resources</a>
                </li>
                <li>
                  <a href="#">Merck Corp responsibility</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
                <li>
                  <a href="#">Lorem ipsum</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   
      <!---Accordion end-->
    </div>
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
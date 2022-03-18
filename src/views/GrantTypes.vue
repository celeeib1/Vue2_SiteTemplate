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
            <p>This describes the 2 types of grants that Merck USPA supports and the eligibility criteria for each type.
              These grants follow internal and external compliance guidelines, rules, and regulations.</p>

            <p>The USPA Independent Grants program for Merck offers 2 types of support to U.S. non-profit organizations:
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-6 pe-lg-5">
            <a href="https://msdimegrants.com/" target="_blank" class="arrow-btn bg-teal my-3"><span>Patient Advocacy Grants</span></a>
          </div>
          <div class="col-lg-6 ps-lg-5">
            <router-link to="/after-you-apply" class="arrow-btn bg-teal my-3"><span>What to do after you apply<br />
                or receive a grant</span></router-link>
          </div>
        </div>
      </div>
      <!--END CONTAINER-->

      <div class="container-fluid grant_banner" role="presentation"></div>

      <!--START CONTAINER-->
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
          <h2 class="py-4">Patient Advocacy Grants </h2>
          <p>Patient Advocacy Grants are independent grants that may be given to non-profit 
          U.S.-based patient organizations that focus on improving patient health and health care quality through education and selected activities.</p>
          <p>Grants may be given for activities that:</p>
          <ul>
          <li>Increase disease awareness</li>
          <li>Improve patient education and patient care</li>
          <li>Improve societal access to medicines and vaccines</li> 
          <li>Reduce health disparities and the treatment of disease</li>
          </ul>
          <p>We will consider requests for programmatic and educational activities that align with one of Merck's <router-link to="/" class="content-link">therapeutic areas of interest</router-link>.</p>
          <p>These activities may include but are not limited to:</p>
          <ul>
          <li>Live and virtual programs or symposiums</li>
          <li>Podcasts</li>
          <li>Webcasts</li>
          <li>Newsletters</li>
          <li>Print materials</li>
          <li>Social media</li>
          <li>Website content</li>
          <li>Videos</li>
          </ul>
          <p class="mb-0">In some cases, we may give you a submission code to help direct your request when you are applying.</p>
          <p>Review our <a class="content-link" href="#">submission tutorial</a> to learn more.</p>
          </div>
          </div>
      </div>
      <!--END CONTAINER-->
      <div class="container-fluid grant_banner2" role="presentation"></div>

      <!--START CONTAINER-->
      <div class="container py-5">
        <div class="row">
          <div class="col-12">
          <h2 class="py-4">Fundraising Charitable Grants</h2>
          <p>Fundraising Charitable Grants are independent grants that may be given to non-profit charitable organizations or institutions to support fundraising. 
          The fundraising must be for U.S. healthcare-related charitable causes or other community-based charitable fundraising initiatives.</p>
         <p>We will consider requests that support U.S. healthcare-based programs or events that align with one of Merck’s  <router-link to="/" class="content-link">therapeutic areas of interest</router-link>.</p>

     <p>Fundraising events may include but are not limited to:</p>
      <ul>
          <li>Runs</li>
          <li>Walks</li>
          <li>Galas</li>
      </ul>
      <p class="mb-0">In some cases, we may give you a submission code to help direct your request when you are applying.</p>
      <p>Review our <a class="content-link" href="#">submission tutorial</a> to learn more.</p>
      <p class="text-teal bold mt-4">What can disqualify a request from being approved?</p>

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
          <h2 class="pt-4">Who is eligible for grants?</h2>
          <h3 class="pt-3">Eligibility for Patient Advocacy Grants</h3>
          <p>Eligible applicants may be non-profit (501(c)3 or 501(c)6 registered), U.S.-based organizations focused on patient advocacy or patient education, including:</p>
           <ul>
          <li>Patient and advocacy organizations</li>
          <li>Professional societies conducting a patient advocacy program</li>
          </ul>
          <p>Eligible organizations must have a demonstrated track record of success in implementing patient advocacy activities similar to those they are requesting funding for.</p>
           <h3 class="pt-3">Eligibility for Fundraising Charitable Grants</h3>
          <p>Eligible applicants may be non-profit (501(c)3 registered), U.S.-based patient or advocacy organizations whose primary purpose is to raise funds to support the 
          charitable mission of the organization.</p>
            <p class="text-teal bold mt-4"> Who is not eligible for these grants?</p>

          
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
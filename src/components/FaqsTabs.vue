<template>
  <div class="faq-accordions">
    <app-tabs
      class=""
      :tabList="tabList"
      variant="horizontal"
    >
      <template v-slot:tabPanel-1>
  <div class="accordion" id="accordion1">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
       How do I submit my outcomes report?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion1">
      <div class="accordion-body">
        Yes, if you need more time, please inform your Merck USPA contact or send an email to uspatientadvocacy@merck.com. We will assess your extension request and give the decision to the person who requested it.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        How long do I have to complete the outcomes form?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion1">
      <div class="accordion-body">
       You must complete the outcomes form in 45 calendar days. 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Why do I have to submit an outcomes report?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion1">
      <div class="accordion-body">
      Outcomes give important information (such as attendance numbers, change in knowledge, testimonials, and success tactics) that help us understand the impact and 
      effectiveness of the programs we support. 
      It is a chance for your organization to share the success of your program. It also verifies that the funding was used as described in the approved request. 
      </div>
    </div>
  </div>
   <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
       What happens if we don’t complete our outcomes report?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion1">
      <div class="accordion-body">
      Outcomes give important information (such as attendance numbers, change in knowledge, testimonials, and success tactics) that help us understand the impact and 
      effectiveness of the programs we support. 
      It is a chance for your organization to share the success of your program. It also verifies that the funding was used as described in the approved request. 
      </div>
    </div>
  </div>
   <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
       Can I request an extension to complete the outcomes form?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion1">
      <div class="accordion-body">
     Yes, if you need more time, please inform your Merck USPA contact or send an email to uspatientadvocacy@merck.com. We will assess your extension request and give 
     the decision to the person who requested it.
 
      </div>
    </div>
  </div>
</div>
      </template>



      <template v-slot:tabPanel-2> 
    
      
      
       </template>
      <template v-slot:tabPanel-3> Content 3 </template>
      <template v-slot:tabPanel-4> Content 4 </template>
    </app-tabs>


  </div>
</template>
<style scoped>
#opened .accordion__content{
  display: block!important;
}
</style>
<script>
 import AppTabs from "@/components/AppTabs.vue";
 // import Accordion from "@/components/accordion";
  //import AccordionItem from "@/components/accordion-item";

export default {
  name: "FaqsTabs",
  props: {
    msg: String
  },
  components: {
     AppTabs
  },
  data() {
    return {
      tabList: ["Technical", "Tab 2", "Tab 3", "Tab 4"],
    };
  },
};
</script>


<template>
  <div class="faq-accordions">
    <app-tabs
      class=""
      :tabList="tabList"
      variant="horizontal"
    >
     <!--TECHNICAL-->
      <template v-slot:tabPanel-1>
      <accordions>
            <accordion title="Technical">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum dolor">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
        </accordions>
      </template>
    <!--END TECHNICAL-->
     <!--ELIGIBILITY-->
      <template v-slot:tabPanel-2> 
      <accordions>
            <accordion title="Eligibility">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum dolor">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
        </accordions>
       </template>
       <!--Prepare to submit your application-->
      <template v-slot:tabPanel-3> <accordions>
            <accordion title="Prepare to submit your application">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum dolor">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
        </accordions></template>
         <!--END Prepare to submit your application-->
    <!--Review and approval process-->
      <template v-slot:tabPanel-4> <accordions>
            <accordion title="Review and approval process">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum dolor">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
        </accordions>
        </template>
        <!--End Review and approval process-->
        <!--Changes to your process-->
       <template v-slot:tabPanel-5> <accordions>
            <accordion title="Changes to your process">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum dolor">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
        </accordions>
        </template>
        <!--END Changes to your process-->
        <!--OUTCOMES-->
      <template v-slot:tabPanel-6>
        <accordions>
            <accordion title="How do I submit my outcomes report?">
              <p>Yes, if you need more time, please inform your Merck USPA contact or send an email to 
              <a class="content-link" href="mailto:uspatientadvocacy@merck.com">uspatientadvocacy@merck.com</a>.</p>
              <p>We will assess your extension request and give the decision to the person who requested it.
              </p>
            </accordion>
            <accordion title="How long do I have to complete the outcomes form?">
            <p>You must complete the outcomes form in 45 calendar days.</p>
            </accordion>
            <accordion title="Why do I have to submit an outcomes report?">
            <p> Outcomes give important information (such as attendance numbers, change in knowledge, testimonials, and success tactics) that help us understand the impact and 
              effectiveness of the programs we support.</p>
              <p>It is a chance for your organization to share the success of your program. It also verifies that the funding was used as described in the approved request.</p>
            </accordion>
            <accordion title="What happens if we don’t complete our outcomes report?">
            <p>If you do not complete the required outcomes form, it may affect your organization’s eligibility for future grant support.</p>
            </accordion>
             <accordion title="Can I request an extension to complete the outcomes form?">
            <p>Yes, if you need more time, please inform your Merck USPA contact or send an email to uspatientadvocacy@merck.com. We will assess your extension request 
            and give the decision to the person who requested it.</p>
            </accordion>
        </accordions>
        </template>
         <!--END OUTCOMES-->
         <!--Reconciliation-->
      <template v-slot:tabPanel-7>
       <accordions>
            <accordion title="Reconciliation">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum dolor">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem ipsum">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
            <accordion title="Lorem">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis diam elit. Sed ornare nibh erat, quis porttitor 
                elit ullamcorper vel. Aenean molestie sollicitudin sem ac molestie. Phasellus eu risus orci. Ut convallis, massa non 
                interdum suscipit, metus nibh vulputate odio, ut rutrum eros est at lectus. Etiam porttitor mi sit amet urna pulvinar, 
                in placerat nibh commodo. Nam auctor lorem quis augue rutrum, id hendrerit erat fringilla.</p>
            </accordion>
        </accordions>
        </template>
        <!--END Reconciliation-->
    </app-tabs>


  </div>
</template>
<style scoped>

</style>
<script>
 import AppTabs from "@/components/AppTabs.vue";
 import Accordions from "@/components/Accordions.vue";
import accordion from "@/components/AccordionItem.vue";

export default {
  name: "FaqsTabs",
  props: {
    msg: String
  },
  components: {
     AppTabs,
    accordion,
    Accordions

  },
  data() {
    return {
      tabList: ["Technical", "Eligibility", "Prepare to submit your application", "Review and approval process", "Changes to your process", "Outcomes", "Reconciliation"],
    };
  },
};
</script>


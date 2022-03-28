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
       
         <!--Reconciliation-->
      <template v-slot:tabPanel-6>
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
      tabList: ["Tabs1", "Tabs2", "Tabs3", "Tabs4", "Tabs5", "Tabs6"],
    };
  },
};
</script>


<template>
  <div class="helpful-links">
        <div class="row bg-teal">
          <div class="col-lg-6 col-8 p-5">
          <h3 class="text-white mb-5">Helpful Links</h3>
          <div class="container w-lg-75 ms-0 px-0">
          <router-link to="/" class="hollow-btn-white my-3">FAQs</router-link>
          <router-link to="/" class="hollow-btn-white my-3">FAQs</router-link>
          </div>
          </div>
            <div class="col-lg-6 col-4 helpful-links-banner">
          </div>
        </div>
  </div>
 
</template>
<script>
export default {
  name: "HelpfulLinks",
  props: {
    msg: String
  }
};
</script>


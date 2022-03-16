<template>
<header role="banner" class="site-header sticky-top">
  <nav class="navbar navbar-expand-lg bg-navy pb-0">
    <div class="container mx-auto d-block">
      <div class="row py-4">
        <div class="col-lg-11 col-md-10 col-9">
          <a class="navbar-brand site-title my-5" href="#">Merck US Patient Advocacy Grants</a>
        </div>
        <div class="col-lg-2 col-md-2 col-3 text-end">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li class="nav-item pe-lg-3">
                <router-link to="/" class="nav-link px-0 h-100">Home</router-link>
              </li>
              <li class="nav-item px-lg-3">
                <router-link to="/grant-types" class="nav-link px-0 h-100">Grant types &amp; eligibility</router-link>
              </li>
              <li class="nav-item px-lg-3">
                <router-link to="/learn-about-process" class="nav-link px-0 h-100">Learn about the process</router-link>
              </li>
              <li class="nav-item px-lg-3">
                <router-link to="/after-you-apply" class="nav-link px-0 h-100">After you apply or receive a grant</router-link>
              </li>

              <li class="nav-item ps-lg-3">
                <router-link to="/faqs" class="nav-link px-0 h-100">Have a question?</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderNav",
  props: {
    msg: String
  }
};
</script>


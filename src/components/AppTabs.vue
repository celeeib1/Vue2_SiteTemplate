<template>
<div class="row">
  <div class="col-md-3"
    :class="{
      'flex space-x-4': variant === 'horizontal',
    }"
  >
    <ul class="list-unstyled"
      :class="{
        'mb-3': variant === 'vertical',
      }"
    >
      <li
        v-for="(tab, index) in tabList"
        :key="index"
        class="content-link"
        :class="{
          'tex-teal bg-ltgray': index + 1 === activeTab,
          'text-teal': index + 1 !== activeTab,
        }"
      >
        <label
          :for="`${_uid}${index}`"
          v-text="tab"
          class="cursor-pointer block"
        />
        <input
          :id="`${_uid}${index}`"
          type="radio"
          :name="`${_uid}-tab`"
          :value="index + 1"
          v-model="activeTab"
          class="hidden"
        />
      </li>
    </ul>
     </div>
    <template v-for="(tab, index) in tabList">
      <div
        :key="index"
        v-if="index + 1 === activeTab"
        class="col-md-9"
      >

        <slot :name="`tabPanel-${index + 1}`" />


      </div>
    </template>
 
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
      required: true,
    },
    variant: {
      type: String,
      required: false,
      default: () => "horizontal",
      validator: (value) => ["horizontal", "vertical"].includes(value),
    },
  },
  data() {
    return {
      activeTab: 1,
    };
  },
};
</script>
<template>
  <div>
                    <div class="accordion" >
                        <slot></slot>
                        
                    </div><!-- .accordion -->
                </div>
</template>

<script>

export default {
  name: 'Accordions',
  props: {
    msg: String
  }
}

</script>
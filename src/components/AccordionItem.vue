<template>
  <div class="card">
                    <div class="card-header">
                        <h2 class="mb-0">
                            <button class="btn btn-link" v-bind:class="[this.accordionActive ? 'active' : 'not-active']" @click="accordionToggle()" type="button" data-toggle="collapse" :data-target="accordionTarget" :aria-expanded="accordionActive" :aria-controls="accordionName">
                                {{title}} 
                            </button>
                        
                        </h2>
                    </div>
                    <div :id="accordionName" v-show="this.accordionActive"  :aria-labelledby="accordionName" :data-parent="accordionName">
                        <div class="card-body">
                            <slot></slot>
                        </div>
                    </div>
                </div>
</template>

<script>

  export default {
  name: "accordion",
  props: {
    msg: String,
    title: {required: true},
     active: {default : false},
    
  },
  data() {
              return { 
                accordionActive : []
              }
            },
          
            computed : {
                accordionName(){
                    return this.title.toLowerCase().replace(/ /g, '-');
                },
                accordionTarget(){
                    return '#' + this.title.toLowerCase().replace(/ /g, '-');
                },
            },
            methods : {
                assignPropsToData(){
                  this.accordionActive = this.active;
               
                },
               accordionToggle() {
               this.accordionActive = !this.accordionActive;
               
              }
                },
            
            created() {
              this.assignPropsToData();
            }
  
        }
         
</script>

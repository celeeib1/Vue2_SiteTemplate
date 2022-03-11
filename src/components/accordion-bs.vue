
Vue.component('accordions', {
            template: `
                <div>
                    <div class="accordion" >
                        <slot></slot>
                    </div><!-- .accordion -->
                </div>
            `
        });

        Vue.component('accordion', {
            template: `
                <div class="card">
                    <div class="card-header" :id="accordionName">
                        <h2 class="mb-0">
                            <button class="btn btn-link" @click.prevent="accordionToggle" type="button" data-toggle="collapse" :data-target="accordionTarget" :aria-expanded="accordionActive" aria-controls="accordionName">
                                {{title}} 
                            </button>
                        </h2>
                    </div>
                    <div :id="accordionName" v-show="this.accordionActive"  :aria-labelledby="accordionName">
                        <div class="card-body">
                            <slot></slot>
                        </div>
                    </div>
                </div>
            `,
            data() {
              return { 
                accordionActive : []
              }
            },
            props: {
                title: {required: true},
                active: {default : false}
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
                  this.accordionActive =  this.active;    
                },
                accordionToggle() {
                  this.accordionActive = !this.accordionActive;
                }
            },
            created() {
              this.assignPropsToData();
            }
        });

]
<script>
export default {
  name: "accordions",
  props: {
    msg: String
  }
};
</script>


<template>
  <!--modals-->
    <div class="container py-5 my-3">
    <div class="modal interstitial" id="interstitial-modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-inner">
              <div class="modal-header">
                <h5 class="modal-title" id="myModalLabel">
                  You are leaving Merck US Patient Advocacy Grants
                </h5>
              </div>
              <div class="modal-body">

                <p>The link you have selected will direct you to a site outside of Merck US Patient Advocacy Grants. We are Merck &amp; Co. Inc., Kenilworth, NJ, USA known as 
                MSD outside the United States and Canada.</p>

                <div class="modal-ctas">
                  <button class="btn-std" data-bs-dismiss="modal">Cancel</button>
                   <a href="#" class="btn-std modal-continue" target="_blank" id="interstitial-target">Continue</a>
                </div>

              </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    <!--end modals--> 
</template>

<script>

export default {
  name: 'LeavingModal',
  props: {
    msg: String
  },
    mounted () {
      $('.interstitial-link').click(function(event){
          event.preventDefault();

          var myURL = $(this).attr('href');
          if(myURL){
            $('#interstitial-modal #interstitial-target').attr('href',myURL);
           // $('#interstitial-modal').modal('hide');
          }
        })
        $( "#interstitial-modal #interstitial-target" ).click(function() {
          $('.modal').toggle();
         $('body').removeClass('modal-open').css({"overflow":"visible", "padding-right":"0"});
          $('.modal-backdrop').remove();
          $('.modal').modal.dispose();
      });

      function launchInterstitial(url){
        $('#interstitial-modal #interstitial-target').attr('href',url);
        //$('#interstitial-modal').modal('hide');
      }
    }
}

</script>
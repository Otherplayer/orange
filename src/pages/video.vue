<template>
  <f7-page>
    <f7-navbar title="Video" back-link="Back" sliding></f7-navbar>


    <!--// ad banner-->
    <div class="banner-ad">
      <a href="http://www.exoclick.com/?login=otherplayer">
        <img src="http://www.exoclick.com/banners/468x120.gif" border="0">
      </a>
    </div>

    <video id='18-video' controls class="video-player">
      <source v-bind:src="params.videoUrl" type='video/mp4' />
      <!--<source src="http://10.71.224.80:8081/static/video.mp4" type='video/mp4' />-->
    </video>

    <div class="video-title">{{params.title}}</div>


  </f7-page>
</template>

<script>
    export default {
        data () {
            return {
                params:{},
            }
        },
        created() {

        },
        mounted : function () {
            // self.$router.back()

            this.params = this.$route.options.params;
            //console.log(this.params);
            var ePlayer = fluidPlayer(
                '18-video',
                '',
                {
                    layout:'default',
                    playerInitCallback: function() {
                        console.log('Player "18-video" initiation called');
                    },
                }
            );

        },
        methods: {

        }
    }
</script>
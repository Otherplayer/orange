<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left cover layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Left Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Left Panel" sliding></f7-navbar>
            <f7-block inner>

                <div>Log in</div>
                <div>Sign up</div>
                <div>Upload</div>

            </f7-block>
            <f7-block-title class="orange">MAIN</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="Porn Videos"></f7-list-item>
              <f7-list-item link="/form/" title="Playlists"></f7-list-item>
              <f7-list-item link="/form/" title="Categories"></f7-list-item>
              <f7-list-item link="/form/" title="Channels"></f7-list-item>
              <f7-list-item link="/form/" title="Photos"></f7-list-item>
              <f7-list-item link="/form/" title="Pornstars"></f7-list-item>
              <f7-list-item link="/form/" title="Pornhub Select"></f7-list-item>
            </f7-list>
            <f7-block-title>COMMUNITY</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="Feed" link-view="#main-view" link-close-panel></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views layout='dark'>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>ORANGE</f7-nav-center>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Framework7</f7-nav-center>
              <f7-nav-right>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <!-- Page Content -->
            <f7-block-title>Welcome to my App</f7-block-title>
            <f7-block inner>
              <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </f7-block>
            <f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="About"></f7-list-item>
              <f7-list-item link="/form/" title="Form"></f7-list-item>
              <f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>
            </f7-list>
            <f7-block-title>Side Panels</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-panel="left">Left Panel</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-panel="right">Right Panel</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
            <f7-block-title>Modals</f7-block-title>
            <f7-block>
              <f7-grid>
                <f7-col width="50">
                  <f7-button open-popup="#popup">Popup</f7-button>
                </f7-col>
                <f7-col width="50">
                  <f7-button open-login-screen="#login-screen">Login Screen</f7-button>
                </f7-col>
              </f7-grid>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Popup -->
    <f7-popup id="popup">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-navbar title="Popup">
              <f7-nav-right>
                <f7-link close-popup>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-pages>

            <video id='my-video' controls = 'controls' type='video/mp4' style="width: 100%; height: 400px;">
              <source v-bind:src="src" />
            </video>

        </f7-pages>
      </f7-view>
    </f7-login-screen>

  </div>
</template>

<script>

import hello from './components/hello.vue'

export default {
    created() {
        console.log('created---');
    },
    data () {
        return {
                src : 'https://cv.phncdn.com/videos/201801/02/148248372/240P_400K_148248372.mp4?a5dcae8e1adc0bdaed975f0d60fb5e050d523df0cca6435032db1bab0a4b451d8a412585437d6eae1df116efbf02055b919ff38f1363fc67bfd8537f45abf2df6554cb0e19305fca8319e1b5b907993b06e07375e162df0455e164875471f170a9d6512f6279260d8f5f71d71530c6604e3a70c7e9e8a9d18a1f6c'
            }
    },
    mounted : function () {
        console.log('mounted---');

        // https://github.com/fluid-player/fluid-player

        var testVideo = fluidPlayer(
            'my-video',
            '',
            {
                layout:'browser',
            }
        );
        console.log(testVideo);


        var header =  {'Accept': 'application/json'};
        this.$http.post('http://52.14.107.3:80/video/content/list',{channelId:'1'},header).then(response => {

            // get body data
            console.log(response.body);

          }, response => {
            // error callback
            console.log(response.body);
        });



    },
    components : { hello }
}
</script>

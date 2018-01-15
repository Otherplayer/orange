<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>


    <!-- Left Panel -->
    <f7-panel left cover layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="Left Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block inner>

                <div @click="loginAction">Log in</div>
                <div>Sign up</div>
                <div>Upload</div>

            </f7-block>
            <f7-block-title class="orange">MAIN</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="Porn Videos" media="<i class='icon icon-f7'></i>" after="CEO"></f7-list-item>
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
        <f7-navbar>
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>ORANGE</f7-nav-center>
        </f7-navbar>


        <!-- Pages -->
        <f7-pages>
          <f7-page>

            <!-- Page Content -->
            <f7-block-title>Welcome to my App</f7-block-title>
            <f7-block inner>
              <p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
            </f7-block>


            <div class="video-container">
                <div class="video-item" v-for="(item, index) in videos" v-on:click="gotoVideoPage(item)">
                     <img class="video-img" v-bind:src="item.imageUrl">
                     <div class="video-title">{{ item.title }}</div>
                </div>
            </div>



            <f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item link="/video/abc" title="Video"></f7-list-item>
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
              </f7-grid>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>



    <!-- 视频播放页面 -->
    <f7-popup id="popup" class="video-page">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-navbar title="Popup">
              <f7-nav-right>
                <f7-link close-popup>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>

            <video id='my-video' controls = 'controls' type='video/mp4' style="width: 100%; height: 400px;">
              <source v-bind:src="infor.videoUrl" />
            </video>

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>





  </div>
</template>

<script>

import hello from './components/hello.vue'

export default {
    data () {
        return {
            infor:{videoUrl:''},
            videos: [
                {
                    "channelId": 1,
                    "id": 39,
                    "imageUrl": "http://d.hiphotos.baidu.com/image/h%3D300/sign=9af99ce45efbb2fb2b2b5e127f4b2043/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg",
                    "sortDate": 1515943735000,
                    "status": 1,
                    "title": "Hot Teen Stepsister Stuck In Sink And Fucked",
                    "typeId": 4,
                    "videoUrl": "http://www.xvideos.com/video32776479/best-2018-01/0/hot_teen_stepsister_stuck_in_sink_and_fucked"
                },
                {
                    "channelId": 1,
                    "id": 40,
                    "imageUrl": "http://d.hiphotos.baidu.com/image/h%3D300/sign=9af99ce45efbb2fb2b2b5e127f4b2043/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg",
                    "sortDate": 1515943735000,
                    "status": 1,
                    "title": "Stranger Jerked and suck me in the train",
                    "typeId": 4,
                    "videoUrl": "http://www.xvideos.com/video32893295/best-2018-01/0/stranger_jerked_and_suck_me_in_the_train"
                },
            ]
        }
    },
    created() {
        console.log('created---');
        var app = new Framework7();
        app.showIndicator();
        var header =  {'Accept': 'application/json'};
        this.$http.post('http://52.14.107.3:80/video/content/list',{channelId:'1'},header).then(response => {

            // get body data
            var datas = response.body.result.list;
            //this.videos = datas;
            console.log(datas);

            app.hideIndicator();

        }, response => {
            // error callback
            console.log(response.body);

            app.hideIndicator();
        });


    },
    mounted : function () {
        console.log('mounted---');
        // DOM events for About popup
        this.$$('.video-page').on('popup:open', function (e, popup) {
            console.log('About popup open');
        });
        this.$$('.video-page').on('popup:opened', function (e, popup) {
            console.log('About popup opened');
        });
        this.$$('.video-page').on('popup:close', function (e, popup) {
            console.log('About popup close');
        });
        this.$$('.video-page').on('popup:closed', function (e, popup) {
            console.log('About popup closed');
        });

        var testVideo = fluidPlayer(
            'my-video',
            '',
            {
                layout:'browser',
            }
        );


    },
    methods: {
        loginAction: function () {
            this.$f7.closePanel('left');
            this.$f7.views.main.router.load({url: '/login/'});
            //this.$f7.mainView.router
        },
        gotoVideoPage: function (item,event) {
            this.infor = item;
            this.$f7.popup('.video-page');
        }
    },
    components : { hello }
}
</script>

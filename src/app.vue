<template>
  <!-- App -->
  <div id="app" class="color-theme-orange">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>


    <!-- Left Panel -->
    <f7-panel left cover layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="Left Panel" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-block inner>
              <!--// user information-->
              <div class="row login-container" v-show="!user.token">
                <!-- Each "cell" has col-[widht in percents] class -->
                <div class="col-50" @click="loginAction">
                  <img class="icon" src="./assets/1.jpg" />
                  <div class="title">{{(user.name && user.name != 'undefined' && user.name.length > 0) ? user.name : 'Log in'}}</div>
                </div>
                <div class="col-50" @click="signUpAction">
                  <img class="icon" src="./assets/1.jpg" />
                  <div class="title">Sign up</div>
                </div>
              </div>
              <div class="row login-container" v-show="user.token">
                <!-- Each "cell" has col-[widht in percents] class -->
                <div class="col-100">
                  <img class="icon" src="./assets/1.jpg" />
                  <div class="title">{{user.name}}</div>
                </div>
              </div>

            </f7-block>
            <!--// categories-->
            <div class="content-block-title">MAIN</div>
            <div class="list-block media-list">
              <ul>
                <li v-for="category in categories">
                  <div class="item-content">
                    <div class="item-media"><img v-bind:src="category.icon" width="22"></div>
                    <div class="item-inner item-link" @click="loginAction">
                      <div class="item-title-row">
                        <div class="item-subtitle">{{category.title}}</div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>


            <f7-list>
              <f7-list-item link="/about/" title="Porn Videos" media="<i class='icon icon-f7'></i>" after="CEO"></f7-list-item>
              <f7-list-item link="/form/" title="Playlists">

              </f7-list-item>
              <f7-list-item link="/form/" title="Categories">
                <img src="assets/1.jpg" width="20" height="20" class="media" />
              </f7-list-item>
              <f7-list-item link="/form/" title="Channels"></f7-list-item>
              <f7-list-item link="/form/" title="Photos"></f7-list-item>
              <f7-list-item link="/form/" title="Pornstars"></f7-list-item>
              <f7-list-item link="/form/" title="Pornhub Select"></f7-list-item>
            </f7-list>
            <f7-block-title>COMMUNITY</f7-block-title>
            <f7-list>
              <f7-list-item link="/about/" title="Feed" link-view="#main-view" link-close-panel></f7-list-item>
              <f7-list-item title="Log out" @click="logoutAction"></f7-list-item>
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
import { bus } from './bus.js'

export default {
    data () {
        return {
            themes: 'theme-white theme-black theme-yellow theme-red theme-blue theme-green theme-pink theme-lightblue theme-orange theme-gray',
            layouts: 'layout-dark layout-white',
            categories:[
                {title:'Porn Videos',icon:'static/img/1.1550254.jpg',sub:[{title:'1'},{title:'2'},{title:'3'}]},
                {title:'Playlists',icon:'static/img/1.1550254.jpg',sub:[]},
                {title:'Categories',icon:'static/img/1.1550254.jpg',sub:[{title:'1'},{title:'2'},{title:'3'}]},
                {title:'Channels',icon:'static/img/1.1550254.jpg',sub:[]},
                {title:'Pornstars',icon:'static/img/1.1550254.jpg',sub:[]},
                {title:'Pornhub Select',icon:'static/img/1.1550254.jpg',sub:[]},
                ],
            user:{token:'',name:''},//用户信息
            infor:{videoUrl:''},//当前选择的视频信息
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

        //登录成功后刷新界面
        bus.$on('should-update-user-information', (user) => {
            console.log(user);
            this.user = user;
        })

        this.user.token = this.$cookie.get('ph-user-token');
        this.user.name = this.$cookie.get('ph-user-name');


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
        // Change Theme Color
        this.changeLayout('layout-dark');
        this.changeColor('theme-orange');
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
            this.$f7.views.main.router.load({url: '/signin/'});
            //this.$f7.mainView.router
            console.log(this.token);
        },
        signUpAction: function () {
            this.$f7.closePanel('left');
            this.$f7.views.main.router.load({url: '/signup/'});
        },
        logoutAction: function () {
            this.$cookie.delete('ph-user-token');
            this.$cookie.delete('ph-user-name');
            this.token = null;
            this.name = null;
        },
        gotoVideoPage: function (item,event) {
            this.infor = item;
            this.$f7.popup('.video-page');
        },
        changeLayout: function (layout) {
            this.$$('body').removeClass(this.layouts).addClass(layout)
        },
        changeColor: function (color) {
            this.$$('body').removeClass(this.themes).addClass(color)
        }
    },
    components : { hello }
}
</script>

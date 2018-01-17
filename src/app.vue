<template>
  <!-- App -->
  <div id="app" class="color-theme-orange">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>


    <!-- Left Panel -->
    <f7-panel left cover layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="ORANGE" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <div class="info-container" inner>
              <!--// user information-->
              <div class="row login-container" v-show="!user.token">
                <!-- Each "cell" has col-[widht in percents] class -->
                <div class="col-50" @click="loginAction">
                  <!--<img class="icon" src="./assets/1.jpg" />-->
                  <i class="f7-icons">person_fill</i>
                  <div class="title">{{(user.name && user.name != 'undefined' && user.name.length > 0) ? user.name : 'Log in'}}</div>
                </div>
                <div class="col-50" @click="signUpAction">
                  <!--<img class="icon" src="./assets/1.jpg" />-->
                  <i class="f7-icons">compose_fill</i>
                  <div class="title">Sign up</div>
                </div>
              </div>
              <div class="row login-container" v-show="user.token">
                <!-- Each "cell" has col-[widht in percents] class -->
                <div class="col-100">
                  <!--<img class="icon" src="./assets/1.jpg" />-->
                  <i class="f7-icons">person_fill</i>
                  <div class="title">{{user.name}}</div>
                </div>
              </div>

            </div>
            <!--// categories-->
            <div class="categories-title content-block-title">MAIN</div>
            <div class="categories-container list-block media-list">
              <ul>
                <li v-for="(category, index) in categories" @click="didClickCategory(category,index)">
                  <div class="item-content">
                    <div class="item-media">
                      <i class="f7-icons category-icon">{{category.icon}}</i>
                      <!--<img v-bind:src="category.icon" width="22">-->
                    </div>
                    <div class="item-inner">
                      <div class="item-title-row">
                        <div class="item-subtitle">{{category.title}}</div>
                        <i v-show="category.sub.length > 0" class="f7-icons category-icon">down</i>
                      </div>
                    </div>
                  </div>
                  <!--//sub-->
                  <ul v-show="category.sub.length > 0 && category.isopen">
                    <li v-for="subCategory in category.sub" @click="didClickCategory(subCategory,-1)">
                      <div class="item-content">
                        <div class="item-inner">
                          <div class="item-title-row">
                            <div class="item-subtitle">{{subCategory.title}}</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="categories-title content-block-title">EXTRAS</div>
            <div class="categories-container list-block media-list">
              <ul>
                <li>
                  <div class="item-content" @click="gotoSettings">
                    <div class="item-media">
                      <i class="f7-icons category-icon">settings</i>
                    </div>
                    <div class="item-inner">
                      <div class="item-title-row">
                        <div class="item-subtitle">Settings</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li></li>
              </ul>
            </div>


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
            <f7-link icon="icon" open-panel="left"><i class="f7-icons">bars</i></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding><span class="nav-title-pre">ORA</span><span class="nav-title-after">NGE</span></f7-nav-center>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>


          <f7-page infinite-scroll @infinite="onInfiniteScroll">
            <!--// ad banner-->
            <div class="banner-ad">
              <a href="http://www.exoclick.com/?login=otherplayer">
                <img src="http://www.exoclick.com/banners/468x120.gif" border="0">
              </a>
            </div>

            <div class="video-container">
              <div class="video-item" v-for="(item, index) in videos" v-on:click="gotoVideoPage(item)">
                <!--<img class="video-img" v-bind:src="item.imageUrl">-->
                <div class="video-title">{{ item.title }}</div>
              </div>
            </div>

          </f7-page>


          <!--<f7-page>-->
            <!--&lt;!&ndash; Page Content &ndash;&gt;-->
            <!--<f7-block-title>Welcome to my App</f7-block-title>-->
            <!--<f7-block inner>-->
              <!--<p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>-->
            <!--</f7-block>-->
            <!--<f7-block-title>Navigation</f7-block-title>-->
            <!--<f7-list>-->
              <!--<f7-list-item link="/video/abc" title="Video"></f7-list-item>-->
              <!--<f7-list-item link="/form/" title="Form"></f7-list-item>-->
              <!--<f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Dynamic Route"></f7-list-item>-->
            <!--</f7-list>-->
            <!--<f7-block-title>Side Panels</f7-block-title>-->
            <!--<f7-block>-->
              <!--<f7-grid>-->
                <!--<f7-col width="50">-->
                  <!--<f7-button open-panel="left">Left Panel</f7-button>-->
                <!--</f7-col>-->
                <!--<f7-col width="50">-->
                  <!--<f7-button open-panel="right">Right Panel</f7-button>-->
                <!--</f7-col>-->
              <!--</f7-grid>-->
            <!--</f7-block>-->
            <!--<f7-block-title>Modals</f7-block-title>-->
            <!--<f7-block>-->
              <!--<f7-grid>-->
                <!--<f7-col width="50">-->
                  <!--<f7-button open-popup="#popup">Popup</f7-button>-->
                <!--</f7-col>-->
              <!--</f7-grid>-->
            <!--</f7-block>-->
          <!--</f7-page>-->
        </f7-pages>
      </f7-view>
    </f7-views>



    <!-- 视频播放页面 -->
    <!--<f7-popup id="popup" class="video-page">-->
      <!--<f7-view navbar-fixed>-->
        <!--<f7-pages>-->
          <!--<f7-page>-->
            <!--<f7-navbar title="Popup">-->
              <!--<f7-nav-right>-->
                <!--<f7-link close-popup>Close</f7-link>-->
              <!--</f7-nav-right>-->
            <!--</f7-navbar>-->

            <!--<video id='my-video' controls = 'controls' type='video/mp4' style="width: 100%; height: auto;">-->
              <!--&lt;!&ndash;<source v-bind:src="infor.videoUrl" />&ndash;&gt;-->
              <!--<source src="https://cv.phncdn.com/videos/201801/02/148248372/720P_1500K_148248372.mp4?a5dcae8e1adc0bdaed975f0d66fb5e0568d9f5b553250a40db604034853fa0906616b9adfa700a2024514adaa6f32eb0e5eac55560c5a25e74f8e2f283b73f45af97e29f292b76ab65b470fd8b95bef8fb7f162411a38c7484ea298fb603c2f827faf2d4019906fab1b1b02fbff2e7dd06c76ae3c2de53af0cd640fb7a" />-->
            <!--</video>-->

            <!--<div class="video-title">{{infor.title}}</div>-->

          <!--</f7-page>-->
        <!--</f7-pages>-->
      <!--</f7-view>-->
    <!--</f7-popup>-->



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
                {title:'Videos',icon:'videocam',isopen:false,sub:[{title:'Most Recent'},{title:'Top Rated'},{title:'Hottest'},{title:'Most Viewed'},{title:'Longest'}]},
                {title:'Categories',icon:'drawer',sub:[]},
                {title:'Channels',icon:'social_rss',sub:[]},
                {title:'Photos',icon:'camera',sub:[]},
                {title:'Pornstars',icon:'star',sub:[]},
                {title:'Upgrade To Premium',icon:'check_round_fill',sub:[]},
                ],
            loading: false,
            user:{token:'',name:''},//用户信息
            infor:{videoUrl:''},//当前选择的视频信息
            channelId:'1',
            currentPage: 1,
            pageSize:10,
            videos: []
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
        let self = this;

        self.fetchDatas(self.channelId,self.currentPage,function (datas) {
            if (datas.length < self.pageSize) {
                self.$f7.detachInfiniteScroll(self.$$('.infinite-scroll'));
                self.$$('.infinite-scroll-preloader').remove();
            }else{
                self.currentPage = 2;
            }
            self.videos = datas;
        })
    },
    mounted : function () {
        // Change Theme Color
        this.changeLayout('layout-dark');
        this.changeColor('theme-orange');
        // DOM events for About popup
        // this.$$('.video-page').on('popup:open', function (e, popup) {
        //     console.log('About popup open');
        // });
        // this.$$('.video-page').on('popup:opened', function (e, popup) {
        //     console.log('About popup opened');
        // });
        // this.$$('.video-page').on('popup:close', function (e, popup) {
        //     console.log('About popup close');
        // });
        // this.$$('.video-page').on('popup:closed', function (e, popup) {
        //     console.log('About popup closed');
        // });
    },
    methods: {
        loginAction: function () {
            this.$f7.closePanel('left');
            this.$f7.views.main.router.loadPage({url: '/signin/'});
            //this.$f7.mainView.router
            console.log(this.token);
        },
        signUpAction: function () {
            this.$f7.closePanel('left');
            this.$f7.views.main.router.loadPage({url: '/signup/'});
        },
        logoutAction: function () {

            let self = this;
            let f7 = this.$f7;
            f7.confirm('Do you want to sign out ?','warning', function () {
                f7.closePanel('left');
                self.$cookie.delete('ph-user-token');
                self.$cookie.delete('ph-user-name');
                self.user.token = null;
                self.user.name = null;
            })

        },
        gotoVideoPage: function (item,event) {
            // this.infor = item;
            // this.$f7.popup('.video-page');
            this.$f7.views.main.router.loadPage({url: '/video/' ,params: item});
        },
        gotoSettings: function () {
            this.$f7.closePanel('left');
            this.$f7.views.main.router.loadPage({url: '/settings/'});
        },
        changeLayout: function (layout) {
            this.$$('body').removeClass(this.layouts).addClass(layout)
        },
        changeColor: function (color) {
            this.$$('body').removeClass(this.themes).addClass(color)
        },
        didClickCategory: function (category, index) {
            if (index >= 0) {
                this.categories[index].isopen = !this.categories[index].isopen;
            }
        },
        fetchDatas:function (channelId,page,callback) {
            let f7 = this.$f7;
            var header =  {'Accept': 'application/json'};
            this.$http.post('http://52.14.107.3:80/video/content/list',{channelId:channelId,page:page,rows:this.pageSize},header).then(response => {
                // get body data
                var datas = response.body.result.list;
                if (datas && datas.length > 0) {
                    callback(datas);
                }else{
                    callback([]);
                }
            }, response => {
                // error callback
                var data = response.body;
                f7.alert(data.retInfo,'error');

            });
        },
        onInfiniteScroll: function () {
            if (this.loading) {
                return;
            }

            this.loading = true;
            let self = this;

            self.fetchDatas('1',self.currentPage,function (datas) {
                self.loading = false;
                if (datas.length < self.pageSize) {
                    self.$f7.detachInfiniteScroll(self.$$('.infinite-scroll'));
                    self.$$('.infinite-scroll-preloader').remove();
                }else{
                    self.currentPage = self.currentPage + 1;
                }

                self.videos = self.videos.concat(datas);

            });


        }
    },
    components : { hello }
}
</script>

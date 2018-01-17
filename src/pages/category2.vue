<template>
    <f7-page infinite-scroll @infinite="onInfiniteScroll">
        <f7-navbar title="About" back-link="Back" sliding></f7-navbar>
        <!--// ad banner-->
        <div class="banner-ad">
            <a href="http://www.exoclick.com/?login=otherplayer">
                <img src="http://www.exoclick.com/banners/468x120.gif" border="0">
            </a>
        </div>

        <div class="category2-container">
            <div class="category2-item" v-for="(item, index) in videos">
                <div class="category2-row" v-on:click="gotoVideoPage(item[0])">
                    <div class="category2-time">{{ item[0].durationStr }}</div>
                    <!--<img class="category2-img" v-bind:src="item[0].imageUrl">-->
                    <div class="category2-title">{{ item[0].title }}</div>
                    <div class="category2-detail">
                        <span class="c2-left"><i class="f7-icons">eye_fill</i>{{item[0].views}}</span>
                        <span class="c2-right"><i class="f7-icons">heart_fill</i>{{item[0].rating + '%'}}</span>
                    </div>
                </div>
                <div class="category2-row" v-on:click="gotoVideoPage(item[1])">
                    <div class="category2-time">{{ item[1].durationStr }}</div>
                    <!--<img class="category2-img" v-bind:src="item[1].imageUrl" />-->
                    <div class="category2-title">{{ item[1].title }}</div>
                    <div class="category2-detail">
                        <span class="c2-left"><i class="f7-icons">eye_fill</i>{{item[0].views}}</span>
                        <span class="c2-right"><i class="f7-icons">heart_fill</i>{{item[0].rating + '%'}}</span>
                    </div>
                </div>
            </div>
        </div>

    </f7-page>
</template>
<script>

    export default {
        data () {
            return {
                loading: false,
                channelId:'1',
                currentPage: 1,
                pageSize:10,
                videos: []
            }
        },
        created() {

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

        },
        methods: {
            gotoVideoPage: function (item,event) {
                // this.infor = item;
                // this.$f7.popup('.video-page');
                this.$f7.views.main.router.loadPage({url: '/video/' ,params: item});
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
    }

</script>


<style scoped>

</style>
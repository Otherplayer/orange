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
                <div class="category2-row">
                    <img class="category2-img" v-bind:src="item.imageUrl">
                    <div class="category2-title">{{ item.title }}</div>
                </div>
                <div class="category2-row">
                    <img class="category2-img" v-bind:src="item.imageUrl">
                    <div class="category2-title">{{ item.title }}</div>
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
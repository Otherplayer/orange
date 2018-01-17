<template>
    <f7-page infinite-scroll @infinite="onInfiniteScroll">
        <f7-navbar title="Categories" back-link="Back" sliding></f7-navbar>
        <!--// ad banner-->
        <div class="banner-ad">
            <a href="http://www.exoclick.com/?login=otherplayer">
                <img src="http://www.exoclick.com/banners/468x120.gif" border="0">
            </a>
        </div>

        <div class="category3-container">
            <div class="category3-item" v-for="(item, index) in videos">
                <div class="category3-row" v-for="(subItem,subIndex) in item" v-on:click="gotoVideoPage(subItem)">
                    <!--<img class="category3-img" v-bind:src="subItem.imageUrl">-->
                    <div class="category3-title">{{ subItem.title }}</div>
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
                pageSize:100,
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
                self.videos = self.dealDatas(datas);
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
            dealDatas:function (datas) {
                var results = [];
                var tmp = [];
                datas.forEach(function (currentValue, index, arr) {
                    tmp.push(currentValue);
                    if (index % 3 === 2 || index === arr.length - 1) {
                        results.push(tmp);
                        tmp = [];
                    }
                });
                return results;
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

                    self.videos = self.videos.concat(self.dealDatas(datas));

                });


            }
        },
    }

</script>


<style scoped>

</style>
<template>
    <f7-page>
        <f7-navbar title="Settings" back-link="Back" sliding></f7-navbar>
        <f7-block inner>
            <div class="categories-title content-block-title">About</div>

            <div class="bottom-announce-title">is the big xxx webseit</div>
            <div class="bottom-announce-detail">is the big xxx webses the big xxx webses the big xxx webses the big xxx webses the big xxx webses the big xxx webses the big xxx webses the big xxx webses the big xxx webseit</div>

            <div class="categories-title content-block-title">App Version</div>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;4.3.1</p>



            <p v-show="user.token">
                <f7-grid>
                    <f7-col><f7-button fill raised color="orange" @click="logoutAction">Log out</f7-button></f7-col>
                </f7-grid>
            </p>





        </f7-block>
    </f7-page>
</template>
<script>


    import { bus } from './../bus.js'
    export default {
        data () {
            return {
                user:{token:'',name:''},//用户信息
            }
        },
        created() {

            this.user.token = this.$cookie.get('ph-user-token');
            this.user.name = this.$cookie.get('ph-user-name');

        },
        methods: {
            logoutAction: function () {

                let self = this;
                let f7 = this.$f7;
                f7.confirm('Do you want to sign out ?','warning', function () {
                    f7.closePanel('left');
                    self.$cookie.delete('ph-user-token');
                    self.$cookie.delete('ph-user-name');
                    self.user.token = null;
                    self.user.name = null;

                    bus.$emit('should-update-user-information', {token:null,name:null});
                })
            }
        },
    }

</script>


<style scoped>

</style>
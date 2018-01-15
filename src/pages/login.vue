<template>
    <f7-page>
        <f7-navbar title="LOGIN" back-link="Back" sliding></f7-navbar>
        <f7-login-screen-title>ORANGE</f7-login-screen-title>
        <f7-list form>
            <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="Your username" type="text" v-model="username"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder="Your password" v-model="password"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-button title="Sign In" @click="loginAction"></f7-list-button>
            <f7-list-label>
                <div>Some text about login information.</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </f7-list-label>
        </f7-list>
    </f7-page>
</template>

<script>

    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            loginAction : function () {


                let f7 = this.$f7;
                if (this.username.length === 0) {
                    f7.alert('Please input username first.','tip');
                    return;
                }
                if (this.password.length === 0) {
                    f7.alert('Please input password.','tip');
                    return;
                }

                this.$f7.showIndicator();
                var header =  {'Accept': 'application/json'};
                this.$http.post('http://52.14.107.3:80/video/member/login',{password:this.password,email:this.username},header).then(response => {

                    // get body data
                    var data = response.body;
                    //this.videos = datas;
                    console.log(data);

                    f7.hideIndicator();
                    if (data.retCode === '0000000') {

                        f7.return();
                    }else {
                        f7.alert(data.retInfo,'tip');
                    }


                }, response => {
                    // error callback
                    var data = response.body;
                    f7.alert(data.retInfo,'tip');
                    f7.hideIndicator();
                });

            }
        }
    }

</script>


<style scoped>

</style>
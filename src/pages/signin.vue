<template>
    <f7-page>
        <f7-navbar title="LOGIN" back-link="Back" sliding></f7-navbar>
        <f7-login-screen-title>ORANGE</f7-login-screen-title>
        <f7-list form>
            <f7-list-item>
                <!--<f7-label>E-mail</f7-label>-->
                <f7-input name="email" type="email" placeholder="E-mail" v-model="email"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <!--<f7-label>Password</f7-label>-->
                <f7-input name="password" type="password" placeholder="Password" v-model="password"></f7-input>
            </f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-button title="Sign In" @click="signInAction"></f7-list-button>
            <f7-list-item link="/signup/" class="orange" title="Sign up"></f7-list-item>
            <!--<f7-list-button title="Sign Up" @click="signUpAction"></f7-list-button>-->
            <f7-list-label>
                <div>FBI Warning.</div>
                <div>FBI Warning.</div>
            </f7-list-label>
        </f7-list>
    </f7-page>
</template>

<script>

    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signInAction : function () {


                let f7 = this.$f7;
                if (this.email.length === 0) {
                    f7.alert('Please input email first.','tip');
                    return;
                }
                if (this.password.length === 0) {
                    f7.alert('Please input password.','tip');
                    return;
                }

                this.$f7.showIndicator();
                var header =  {'Accept': 'application/json'};
                this.$http.post('http://52.14.107.3:80/video/member/login',{password:this.password,email:this.email},header).then(response => {

                    // get body data
                    var data = response.body;
                    //this.videos = datas;
                    console.log(data);

                    f7.hideIndicator();
                    if (data.retCode === '0000000') {

                        var token = data.token;
                        var username = data.username;

                        

                        f7.views.main.router.back();
                    }else {
                        f7.alert(data.retInfo,'error');
                    }


                }, response => {
                    // error callback
                    var data = response.body;
                    f7.alert(data.retInfo,'error');
                    f7.hideIndicator();
                });

            },
            signUpAction : function () {
                
            }
        }
    }

</script>


<style scoped>

</style>
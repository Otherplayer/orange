<template>
    <f7-page>
        <f7-navbar title="REGISTER" back-link="Back" sliding></f7-navbar>
        <f7-login-screen-title>ORANGE</f7-login-screen-title>
        <f7-list form>
            <f7-list-item>
                <f7-label>Nickname</f7-label>
                <f7-input type="text" placeholder="Nickname" v-model="info.nickname"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input type="text" placeholder="Username" v-model="info.username"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input type="password" placeholder="Password" v-model="info.password"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>E-mail</f7-label>
                <f7-input type="email" placeholder="E-mail" v-model="info.email"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>Phone</f7-label>
                <f7-input type="tel" placeholder="Phone" v-model="info.phone"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>Birth time</f7-label>
                <f7-input type="datetime-local" v-model="info.age"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-label>Gender</f7-label>
                <f7-input type="select" v-model="info.gender">
                    <option value="1">Male</option>
                    <option value="1">Female</option>
                </f7-input>
            </f7-list-item>
        </f7-list>
        <f7-list>
            <f7-list-button title="Sign Up" class="text-color-red" @click="signUpAction"></f7-list-button>
            <f7-list-label>
                <div>Some text about login information.</div>
                <div>Some text about login information.</div>
            </f7-list-label>
        </f7-list>
    </f7-page>
</template>

<script>

    export default {
        data () {
            return {
                info:{
                    nickname: '',
                    username: '',
                    email: '',
                    password: '',
                    phone: '',
                    age:'20',
                    gender:'1',
                    headUrl:'-'
                }
            }
        },
        methods: {
            signUpAction : function () {


                let f7 = this.$f7;
                if (this.info.nickname.length === 0) {
                    f7.alert('Please input nickname first.','tip');
                    return;
                }
                if (this.info.password.length === 0) {
                    f7.alert('Please input password.','tip');
                    return;
                }
                if (this.info.email.length === 0) {
                    f7.alert('Please input email.','tip');
                    return;
                }
                if (this.info.phone.length === 0) {
                    f7.alert('Please input phone.','tip');
                    return;
                }

                f7.showIndicator();
                var header =  {'Accept': 'application/json'};
                this.$http.post('http://52.14.107.3:80/video/member/register',this.info,header).then(response => {

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
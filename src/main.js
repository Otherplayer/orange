// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

// Import App Custom Styles
import AppStyles from './css/app.css'

// Import Routes
import Routes from './routes.js'

// Import Resource
import VueResource from 'vue-resource'
Vue.use(VueResource);

// Require dependencies
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);


Vue.http.interceptors.push((request, next) => {

    // request.headers.set('token', token); //setting request.headers
    // ...
    // 请求发送前的处理逻辑
    // ...
    next((response) => {
        // ...
        // 请求发送后的处理逻辑
        // ...
        // 根据请求的状态，response参数会返回给successCallback或errorCallback
        return response
    })
})


// Import App Component
import App from './app'


// Init F7 Vue Plugin
Vue.use(Framework7Vue)

// Init App
new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    // App Name
    name: 'Orange',
    // App id
    id: 'com.myapp.orange',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
  },
    // App root data
    data: {
        // ....
        token:'--------token'
    },
    // App root methods
    methods: {
        // ....
    },
  // Register App Component
  components: {
    app: App,
  }
});

export default [
    {
        path: '/signin/',
        component: require('./pages/signin.vue')
    },
    {
        path: '/signup/',
        component: require('./pages/signup.vue')
    },
    {
        path: '/settings/',
        component: require('./pages/settings.vue')
    },
    {
        path: '/category2/',
        component: require('./pages/category2.vue')
    },
    {
        path: '/category3/',
        component: require('./pages/category3.vue')
    },
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
    {
        path: '/video/',
        pa:{},
        component: require('./pages/video.vue')
    },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  }
]
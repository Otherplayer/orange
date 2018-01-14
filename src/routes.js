export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
    {
        path: '/video/:url/',
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

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'page1', component: () => import('pages/PageOne.vue') },
      { path: 'page2', component: () => import('pages/PageTwo.vue') },
      { path: 'page3', component: () => import('pages/PageThree.vue') },
      { path: 'page4', component: () => import('pages/PageFour.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

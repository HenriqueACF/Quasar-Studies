
const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name:'loginDefault', component: () => import('pages/Login.vue') },
      { path: 'login', name:'login', component: () => import('pages/Login.vue') },
      { path: 'register', name:'register', component: () => import('pages/Register.vue') },
      { path: 'email-confirmation', name:'email-confirmation', component: () => import('pages/EmailConfirmation.vue') },
      { path: 'forgotPassword', name:'forgotPassword', component: () => import('pages/ForgotPassword.vue') },
      { path: 'resetPassword', name:'resetPassword', component: () => import('pages/ResetPassword.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') },
      { path: 'me', name:'me', component: () => import('pages/Me.vue') },
      { path: 'category', name:'category', component: () => import('pages/category/List.vue') },
    ],
    meta:{
      requiresAuth: true
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
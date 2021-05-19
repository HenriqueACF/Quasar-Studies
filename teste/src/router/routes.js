
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // caso a rota perfil utilizasse o mesmo layout 
      //{path:'perfil', component:()=> import('pages/Perfil.vue')}
    ]
  },

  //Criando um novo objeto para o novo layout
  {
    path:'/perfil',
    component:() =>import('layouts/LayoutPerfil.vue'),
    children:[
      {path:'', component:()=>import('pages/Perfil.vue')}
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

export default [
  {
    path: '/login',
    name: 'login',
    meta: { auth: false },
    component: () => import('pages/login')
  },
  {
    path: '/register',
    name: 'register',
    meta: { auth: false },
    component: () => import('pages/Register')
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/Index'), meta: {auth:true} },
      { path: '/account', name: 'account', component: () => import('pages/account'), meta: {auth:true} },
      { path: '/report-patient', name: 'reportpatient', component: () => import('pages/Patients/Create'), meta: {auth:true} },
      { path: '/suppliers', name: 'suppliers', component: () => import('pages/Suppliers/Index'), meta: {auth:true} },
      { path: '/suppliers/list', name: 'suppliersList', component: () => import('pages/Suppliers/List'), meta: {auth:true} },
      { path: '/suppliers/single/:id', name: 'suppliersSingle', component: () => import('pages/Suppliers/Single'), meta: {auth:true} },
      { path: '/patients', name: 'patients', component: () => import('pages/Patients/Index'), meta: {auth:true} },
      { path: '/lostpatients', name: 'lostpatients', component: () => import('pages/Patients/LostPatients'), meta: {auth:true} },
      { path: '/lostpatients/create/:id', name: 'lostpatientsCreate', component: () => import('pages/Patients/LostPatientsCreate'), meta: {auth:true} },
      { path: '/news', name: 'news', component: () => import('pages/News/Index'), meta: {auth:true} },
      { path: '/symptoms', name: 'symptoms', component: () => import('pages/Symptoms/Index'), meta: {auth:true} },
      { path: '/precautions', name: 'precautions', component: () => import('pages/Precautions/Index'), meta: {auth:true} },
      { path: '/helplines', name: 'helplines', component: () => import('pages/HelpLines/Index'), meta: {auth:true} },
      { path: '/feedbacks', name: 'feedbacks', component: () => import('pages/Feedback/Create'), meta: {auth:true} }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]

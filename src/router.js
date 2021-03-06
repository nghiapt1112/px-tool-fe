/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

      {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
        path: '',
        component: () => import('./layouts/main/Main.vue'),
        children: [
      // =============================================================================
      // Theme Routes
      // =============================================================================
          {
            path: '/',
            name: 'cvct',
            component: () => import('./views/CVCT.vue')
          },
          {
            path: '/cvct',
            name: 'cvct',
            component: () => import('./views/CVCT.vue')
          },
          {
            path: '/tktdsp',
            name: 'tktdsp',
            component: () => import('./views/TKTDSP.vue')
          },
          {
            path: '/pkh',
            name: 'pkh',
            component: () => import('./views/PKH.vue')
          },
          {
            path: '/pdh',
            name: 'pdh',
            component: () => import('./views/PDH.vue')
          },
          {
            path: '/pcntp',
            name: 'pcntp',
            component: () => import('./views/PCNTP.vue')
          },
          {
            path: '/pa',
            name: 'pa',
            component: () => import('./views/PA.vue')
          },
          {
            path: '/vbg/new',
            name: 'vbgNew',
            component: () => import('./views/VBD.vue')
          },
          {
            path: '/vbg/edit',
            name: 'vbgEdit',
            component: () => import('./views/VBD.vue')
          },
          {
            path: '/vbg',
            name: 'vbg',
            component: () => import('./views/LVBD.vue')
          },
          {
            path: '/vbd',
            name: 'vbd',
            component: () => import('./views/LRVBD.vue')
          },
          {
            path: '/vbd/edit',
            name: 'vbdEdit',
            component: () => import('./views/VBD.vue')
          },
          {
            path: '/profile',
            name: 'profile',
            component: () => import('./views/Profile.vue')
          },
          {
            path: '/nd',
            name: 'nd',
            component: () => import('./views/Accounts.vue')
          },
          {
            path: '/nd/edit',
            name: 'editND',
            component: () => import('./views/CreateAccount.vue')
          },
          {
            path: '/nd/new',
            name: 'createND',
            component: () => import('./views/CreateAccount.vue')
          },
          {
            path: '/cdc',
            name: 'cdc',
            component: () => import('./views/DMDC.vue')
          },
        ],
      },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
      {
        path: '',
        component: () => import('@/layouts/full-page/FullPage.vue'),
        children: [
      // =============================================================================
      // PAGES
      // =============================================================================
          {
            path: '/pages/login',
            name: 'pageLogin',
            component: () => import('@/views/pages/Login.vue')
          },
          {
            path: '/pages/error-404',
            name: 'pageError404',
            component: () => import('@/views/pages/Error404.vue')
          },
        ]
      },
      // Redirect to 404 page, if no match found
      {
        path: '*',
        redirect: '/pages/error-404'
      }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router

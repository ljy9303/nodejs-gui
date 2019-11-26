import DashboardLayout from '@/renderer/layout/DashboardLayout.vue'
import NotFound from '@/renderer/pages/NotFoundPage.vue'

import Overview from '@/renderer/pages/Overview.vue'
import UserProfile from '@/renderer/pages/UserProfile.vue'
import TableList from '@/renderer/pages/TableList.vue'
import Typography from '@/renderer/pages/Typography.vue'
import Icons from '@/renderer/pages/Icons.vue'

import Notifications from '@/renderer/pages/Notifications.vue'
import Upgrade from '@/renderer/pages/Upgrade.vue'

const routes = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/admin/overview'
  },
  {
    path: '/admin',
    component: DashboardLayout,
    redirect: '/admin/overview',
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'upgrade',
        name: 'Upgrade to PRO',
        component: Upgrade
      }
    ]
  },
  { path: '*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes

// Vue.use(Router)

/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'dash-board',
      component: require('@/renderer/layout/DashboardLayout').default,
      children: [
        {
          path: 'overview',
          name: 'Overview',
          component: Overview
        },
        {
          path: 'user',
          name: 'User',
          component: UserProfile
        },
        {
          path: 'table-list',
          name: 'Table List',
          component: TableList
        },
        {
          path: 'typography',
          name: 'Typography',
          component: Typography
        },
        {
          path: 'icons',
          name: 'Icons',
          component: Icons
        },
        {
          path: 'notifications',
          name: 'Notifications',
          component: Notifications
        },
        {
          path: 'upgrade',
          name: 'Upgrade to PRO',
          component: Upgrade
        }
      ]
    },

    {
      path: '*',
      redirect: '/'
    }
  ],
  linkActiveClass: 'nav-item active',
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
})
*/

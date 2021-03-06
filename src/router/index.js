import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [{
        path: '/404',
        component: () =>
            import ('@/views/404'),
        hidden: true
    }, {
        path: '/',
        component: Layout,
        redirect: '/home',
        name: 'home',
        children: [{
            path: 'home',
            component: () =>
                import ('@/views/home/index')
        }, {
            path: 'gongyi',
            component: () =>
                import ('@/views/gongyi/index')
        }, {
            path: 'aboutus',
            component: () =>
                import ('@/views/aboutus/index')
        }, {
            path: 'aboutus1',
            component: () =>
                import ('@/views/aboutus1/index')
        }, {
            path: 'aboutus2',
            component: () =>
                import ('@/views/aboutus2/index')
        }, {
            path: 'relativekn',
            component: () =>
                import ('@/views/relativekn/index')
        }, {
            path: 'relativekn1',
            name: 'relativekn1',
            component: () =>
                import ('@/views/relativekn1/index')
        }, {
            path: 'jiagou',
            component: () =>
                import ('@/views/jiagou/index')
        }, {
            path: 'specialpro',
            component: () =>
                import ('@/views/specialpro/index')
        }, {
            path: 'promise',
            component: () =>
                import ('@/views/promise/index')
        }, {
            path: 'funeng',
            component: () =>
                import ('@/views/funeng/index')
        }, {
            path: 'love',
            component: () =>
                import ('@/views/love/index')
        }, {
            path: 'jijin1',
            component: () =>
                import ('@/views/jijin1/index')
        }, {
            path: 'instDynamics',
            component: () =>
                import ('@/views/instDynamics/index')
        }, {
            path: 'mediaCoverage',
            component: () =>
                import ('@/views/mediaCoverage/index')
        }, {
            path: 'newLifeStory',
            component: () =>
                import ('@/views/newLifeStory/index')
        }, {
            path: 'orgDynamics',
            component: () =>
                import ('@/views/orgDynamics/index')
        }, {
            path: 'relatedPolicies',
            component: () =>
                import ('@/views/relatedPolicies/index')
        }, {
            path: 'aptirules',
            component: () =>
                import ('@/views/aptirules/index')
        }, {
            path: 'years',
            component: () =>
                import ('@/views/years/index')
        }, {
            path: 'work',
            component: () =>
                import ('@/views/work/index')
        }, {
            path: 'audit',
            component: () =>
                import ('@/views/audit/index')
        }, {
            path: 'friend',
            component: () =>
                import ('@/views/friend/index')
        }, {
            path: 'volunteer',
            component: () =>
                import ('@/views/volunteer/index')
        }, {
            path: 'opportunity',
            component: () =>
                import ('@/views/opportunity/index')
        }, {
            path: 'contactus',
            component: () =>
                import ('@/views/contactus/index')
        }, ]
    },
    { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
    // mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})

import Home from '@/views/Home';
import CauseOfHealth from '@/views/CauseOfHealth';
import CohCoh from '@/views/CohCoh';
import Terms from '@/views/shared/static/Terms';
import Registration from '@/views/Registration';
import Forum from '@/views/Forum';

import Login from '@/views/shared/user/Login';
import Register from '@/views/shared/user/Register';
import Profile from '@/views/shared/user/Profile';
import RequestReset from '@/views/shared/user/RequestReset';
import Reset from '@/views/shared/user/Reset';


export const routes = [
    {
        path: '/:lang',
        component: { render (c) { return c('router-view') } },
        children: [
            {
                path: "",
                component: Home,
                meta: {
                    requiresAuth: true,
                    i18n: "navigation-homepage",
                    nav: false
                }
            },
            {
                path: "registration",
                component: Registration,
                meta: {
                    requiresAuth: true,
                    i18n: "navigation-registration",
                    nav: true
                }
            },
            {
                path: "cause-of-health",
                component: CauseOfHealth,
                meta: {i18n: 'navigation-cause-of-health', nav: true}
            },
            {
                path: "swiss-cohcoh",
                component: CohCoh,
                meta: {i18n: 'navigation-swiss-cohcoh', nav: true}
            },
            {
                path: "forum",
                component: Forum,
                name: "Forum",
                meta: {requiresAuth: true, i18n: 'navigation-forum', nav: true},
            },
            {
                path: "terms",
                component: Terms,
                meta: {i18n: "navigation-terms", nav: false}
            },
            {
                path: "login",
                name: "Login",
                component: Login,
                meta: {i18n: 'navigation-login', nav: false}
            },
            {
                path: "register",
                name: "Register",
                component: Register,
                meta: {i18n: 'navigation-register', nav: false}
            },
            {
                path: "reset",
                name: "ResetRequest",
                component: RequestReset,
                meta: {i18n: 'navigation-reset', nav: false}
            },
            {
                path: "reset/:token",
                name: "Reset",
                component: Reset,
                meta: {i18n: 'navigation-reset', nav: false}
            },
            {
                path: "profile",
                name: "UserProfile",
                component: Profile,
                meta: {requiresAccount: true, i18n: 'navigation-profile', nav: false}
            },
            {
                path: "error",
                name: "Error",
                component: Home.Error,
                meta: {i18n: 'navigation-profile', nav: false}
            }
        ]
    }
];

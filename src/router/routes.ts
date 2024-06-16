import {RouteRecordRaw} from 'vue-router'

export default [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/pages/index.vue'),
    },
] as RouteRecordRaw[]
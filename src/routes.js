import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import ListMahasiswa from './components/ListMahasiswa'
import NewMahasiswa from './components/NewMahasiswa'
import ViewMahasiswa from './components/ViewMahasiswa'
import EditMahasiswa from './components/EditMahasiswa'

Vue.use(VueRouter)

const routes = [
    {path: '', component: Home},
    {path: '/mahasiswa', name:'mahasiswa', component: ListMahasiswa},
    {path: '/new-mahasiswa', name: 'new-mahasiswa', component: NewMahasiswa},
    {path: '/mahasiswa/:npm', name: 'view-mahasiswa', component: ViewMahasiswa},
    {path: '/edit-mahasiswa/:npm', name: 'edit-mahasiswa', component: EditMahasiswa}
]

export default new VueRouter({
    mode: 'hash',
    routes
})
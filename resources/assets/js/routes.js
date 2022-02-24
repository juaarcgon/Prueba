const Home = () => import('./components/Home.vue')
const Dogs = () => import('./components/Dogs.vue')

// Componentes para trabajar con los perros

const Mostrar = () => import('./components/Mostrar.vue')
const Crear = () => import('./components/Crear.vue')
const Editar = () => import('./components/Editar.vue')

export const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name: 'perros',
        path: '/perros',
        component:Dogs
    },
    {
        name:'mostrarPerros',
        path:'/mostrarPerros',
        component:Mostrar

    },
    {
        name:'crearPerro',
        path:'/crear',
        component:Crear
    },
    {
        name:'editarPerro',
        path:'/editar/:breed',
        component:Editar
    },
]
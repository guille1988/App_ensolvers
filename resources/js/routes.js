const Folder = () => import('./components/Folder.vue');
const Login = () => import('./components/Login.vue');
const Register = () => import('./components/Register.vue');
const Task = () => import('./components/Task.vue');

const EliminarCarpeta = () => import('./components/folders/Eliminar.vue');
const GuardarCarpeta = () => import('./components/folders/Guardar.vue');
const MostrarCarpetas = () => import('./components/folders/Mostrar.vue');
const MostrarCarpeta = () => import('./components/folders/MostrarUno.vue');

const EditarTarea= () => import('./components/tasks/Editar.vue');
const GuardarTarea = () => import('./components/tasks/Guardar.vue');
const MostrarTareas = () => import('./components/tasks/Mostrar.vue');

const Desloguear = () => import('./components/users/Desloguear.vue');
const Loguear = () => import('./components/users/Loguear.vue');
const Perfil = () => import('./components/users/Perfil.vue');
const Registrar = () => import('./components/users/Registrar.vue');

export const routes = [
    {
        name: 'login',
        path: '/',
        component: Login
    },

    {
        name: 'folder',
        path: '/folder',
        component: Folder
    },

    {
        name: 'task',
        path: '/task',
        component: Task
    },

    {
        name: 'register',
        path: '/register',
        component: Register
    },

    {
        name: 'eliminarCarpeta',
        path: '/delete',
        component: EliminarCarpeta
    },

    {
        name: 'guardarCarpeta',
        path: '/save-folder',
        component: GuardarCarpeta
    },

    {
        name: 'mostrarCarpetas',
        path: '/show-folders',
        component: MostrarCarpetas
    },

    {
        name: 'mostrarCarpeta',
        path: '/show-folder',
        component: MostrarCarpeta
    },

    {
        name: 'editarTarea',
        path: '/edit/:id',
        component: EditarTarea
    },

    {
        name: 'guardarTarea',
        path: '/save-task',
        component: GuardarTarea
    },

    {
        name: 'mostrarTareas',
        path: '/show-tasks',
        component: MostrarTareas
    },

    {
        name: 'desloguear',
        path: '/logout',
        component: Desloguear
    },

    {
        name: 'loguear',
        path: '/login',
        component: Loguear
    },

    {
        name: 'perfil',
        path: '/profile',
        component: Perfil
    },

    {
        name: 'registrar',
        path: '/register',
        component: Registrar
    },

];

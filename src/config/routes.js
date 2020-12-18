import { Home, Hotel } from '../pages'

const routes = [
    {
        path: '/hotel',
        Component: Hotel,
        isPublic: true,
    },
    {
        path: '/',
        Component: Home,
        isPublic: true,
    }
]

export default routes;
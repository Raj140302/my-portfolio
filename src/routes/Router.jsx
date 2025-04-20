import { lazy } from 'react'
const PublicRoute = lazy(() => import('./PublicRoutes'))

const Home = lazy(() => import('../views/home/index'))
const Projects = lazy(() => import('../views/projects/index'))
const About = lazy(() => import('../views/about/index'))
const Contact = lazy(() => import('../views/contact/index'))
const RoutesDetails = [
    {
        defaultRoute: '',
        Component: PublicRoute,
        props: {},
        isPrivateRoute: false,
        children: [
            { path: '/home', Component: Home, exact: true },
        ]
    },
    {
        defaultRoute: '',
        Component: PublicRoute,
        props: {},
        isPrivateRoute: false,
        children: [
            { path: '/projects', Component: Projects, exact: true },
        ]
    },
    {
        defaultRoute: '',
        Component: PublicRoute,
        props: {},
        isPrivateRoute: false,
        children: [
            { path: '/about', Component: About, exact: true },
        ]
    },
    {
        defaultRoute: '',
        Component: PublicRoute,
        props: {},
        isPrivateRoute: false,
        children: [
            { path: '/contact', Component: Contact, exact: true },
        ]
    },
]

export default RoutesDetails

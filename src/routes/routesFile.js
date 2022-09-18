import { lazy } from 'react'

const HomePage = lazy(() => import('../pages/homepage'))

const routes = [
  {
    path: '/',
    name:'HomePage',
    exact: true,
    element:<HomePage/>
  }
]

export default routes

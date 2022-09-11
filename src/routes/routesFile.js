import { lazy } from 'react'

const Login = lazy(() => import('../pages/login'))

const routes = [
  {
    path: '/login',
    exact: true,
    component: <Login />,
    protected: false
  }
]

export default routes

import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import ErrorBoundry from '../components/errorBoundary'
import Loader from '../components/loader'
import RouteFile from './routesFile'

const RouteComponent = () => {
  return (
    <Router>
      <ErrorBoundry>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Navigate to='/login' />} />
            {RouteFile.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.component}
              />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundry>
    </Router>
  )
}

export default RouteComponent

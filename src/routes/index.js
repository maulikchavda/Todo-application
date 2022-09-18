import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
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
            {RouteFile.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </ErrorBoundry>
    </Router>
  )
}

export default RouteComponent

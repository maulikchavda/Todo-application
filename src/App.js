import React from 'react'
import RouteComponent from './routes/index'
import 'react-toastify/dist/ReactToastify.css'
import { Slide, ToastContainer } from 'react-toastify'
function App () {
  return (
    <div>
      <RouteComponent />
      <ToastContainer autoClose={1500} transition={Slide} />
    </div>
  )
}

export default App

import React from 'react'
import { toast } from 'react-toastify'

const ToastMessage = (message, type) => {
  switch (type) {
    case 'success':
      return toast.success(
        <div>
          <p className='mb-0'>{message}</p>
        </div>
      )
    case 'error':
      return toast.error(
        <div>
          <p className='mb-0'>{message}</p>
        </div>
      )
    case 'warning':
      return toast.warning(
        <div>
          <p className='mb-0'>{message}</p>
        </div>
      )
    case 'info':
      return toast.info(
        <div>
          <p className='mb-0'>{message}</p>
        </div>
      )
    default:
      return null
  }
}

export default ToastMessage

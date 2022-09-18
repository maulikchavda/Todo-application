import React, { PureComponent } from 'react'

class ErrorBoundry extends PureComponent {
  state = {
    error: null,
    errorInfo: null
  }

  componentDidCatch (error, errorInfo) {
    this.setState({
      error,
      errorInfo
    })
  }

  render () {
    const { errorInfo, error } = this.state
    const { children } = this.props
    if (errorInfo) {
      return (
        <div className='text-gray-500 p-5'>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return children
  }
}

export default ErrorBoundry

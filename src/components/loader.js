import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Loader = () => {
  return (
    <React.Fragment>
      <div className='bg-black opacity-60 z-40 w-full h-full absolute justify-center items-center'>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color='green'
          ariaLabel='ball-triangle-loading'
          wrapperStyle={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          visible={true}
        />
      </div>
    </React.Fragment>
  )
}

export default Loader

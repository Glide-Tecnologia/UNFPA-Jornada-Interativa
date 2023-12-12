import React from 'react'
import './Loader.css'

const Configuration = () => {
  return (
    <div>
      <iframe
        className='loader-frame'
        src='http://localhost/configuracao/'
        title='Loader'
      ></iframe>
    </div>
  )
}

export default Configuration

import React from 'react'
import './__loadingData.css'
import loadingCube from '../../assets/image/gif/CubeLoader.gif'
function LoadingData() {
  return (
    <div className='loading-Data'>
      <div className="loading-content">
        {/* <img src={loadingCube} alt="cube loader" /> */}
        <p>veuillez patientez</p>
      </div>
        
    </div>
  )
}

export default LoadingData
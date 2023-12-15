import React from 'react'

// importation du styles
import './_blurBackground.css'

function blurBackground() {
  return (
    <div className='blurBackground'>
        <div className="blur Box1"></div>
        <div className="blur Box2"></div>
        {/* <div className="blur Box3"></div> */}
    </div>
  )
}

export default blurBackground
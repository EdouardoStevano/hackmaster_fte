import React from 'react'

import './_leafBackground.css'
import leaf1 from '../../../../assets/image/illustration/leaf/leaf1.png'
import leaf2 from '../../../../assets/image/illustration/leaf/leaf2.png'
import leaf3 from '../../../../assets/image/illustration/leaf/leaf3.png'
import leaf4 from '../../../../assets/image/illustration/leaf/leaf4.png'
import leaf5 from '../../../../assets/image/illustration/leaf/leaf5.png'

function leafBackground() {
  return (
    <div className='leafBackground'>
        <img src={leaf1} alt="leaf1" className='leaf1'/>
        <img src={leaf2} alt="leaf2" className='leaf2'/>
        <img src={leaf3} alt="leaf3" className='leaf3'/>
        <img src={leaf4} alt="leaf4" className='leaf4'/>
        <img src={leaf5} alt="leaf5" className='leaf4'/>
    </div>
  )
}

export default leafBackground
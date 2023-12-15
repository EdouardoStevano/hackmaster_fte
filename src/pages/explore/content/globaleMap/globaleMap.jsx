import React, { useState }  from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";

import './globaleMap.scss'
// import MyLoc from './components/positionMarker'

function GlobaleMap() {
    // const [position, setPosition] = useState(null)

    // const map = useMapEvents({
    //     click() {
    //       map.locate()
    //     },
    //     locationfound(e) {
    //       setPosition(e.latlng)
    //       map.flyTo(e.latlng, map.getZoom())
    //     },
    //   })

    //   return position === null ? null : (
    //     <Marker position={position}>
    //       <Popup>You are here</Popup>
    //     </Marker>
    //   )


  return (
    <div>
      <MapContainer
              center={[51.505, 1.505]}
              zoom={13}
              className='global-map'
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MyLoc />
              <Marker position={[51.505, -0.09]}>
                <Popup>Test fo</Popup>
              </Marker>
        </MapContainer>

        <div className="float-info">
                Float INFO
        </div>
    </div>
  )
}

export default GlobaleMap

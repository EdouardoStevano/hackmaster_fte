import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

import './globaleMap.scss';

function GlobaleMap() {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((location) => {
        setPosition([location.coords.latitude, location.coords.longitude]);
      });
    } else {
      console.log('La géolocalisation n\'est pas supportée par ce navigateur.');
    }
  }, []);

  return (
    <div>
      <MapContainer center={[-21.4422, 47.0845]} zoom={13} className='global-map'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {position[0] !== 0 && ( // Vérifie si la position est obtenue avant de placer le marqueur
          <Marker position={position}>
            <Popup>Votre position actuelle</Popup>
            <Circle center={position} radius={800} /> {/* Cercle de périmètre autour de la position */}
          </Marker>
        )}
        <Marker position={[-21.432, 47.084]}>
          <Popup>Hôpital à Fianarantsoa</Popup>
        </Marker>
      </MapContainer>

      <div className="float-info">
        Float INFO
      </div>
    </div>
  );
}

export default GlobaleMap;

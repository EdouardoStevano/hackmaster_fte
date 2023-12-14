import React, { useEffect, useRef } from 'react'

import './background3D.scss'

import object1 from '@assets/branding/img/3D1.png'
import object2 from '@/assets/branding/img/3D2.png'
import object3 from '@assets/branding/img/3D3.png'
import object4 from '@assets/branding/img/3D4.png'
import object5 from '@assets/branding/img/3D5.png'
import object6 from '@assets/branding/img/3D6.png'
import object7 from '@assets/branding/img/3D7.png'
import object8 from '@assets/branding/img/3D8.png'
import user1 from '@assets/branding/RoundHuman.png'
import user2 from '@assets/branding/RoundHuman2.png'

function Background3D() {
    const object1Ref = useRef(null);
  const object2Ref = useRef(null);
  const object3Ref = useRef(null);
  const object4Ref = useRef(null);
  const object5Ref = useRef(null);
  const object6Ref = useRef(null);
  const object7Ref = useRef(null);
  const object8Ref = useRef(null);
  const user1Ref = useRef(null);
  const user2Ref = useRef(null);


  useEffect(() => {
    const handleMouseMove = (e) => {
      const objects = [object1Ref.current, object2Ref.current, object3Ref.current, user1Ref.current, user2Ref.current];
      const intensity = [0.01, 0.03, 0.01, 0.02, 0.03]; // Intensité du mouvement pour chaque image

      objects.forEach((obj, index) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const boundingBox = obj.getBoundingClientRect();
        const objX = boundingBox.left + boundingBox.width / 5;
        const objY = boundingBox.top + boundingBox.height / 5;
        const offsetX = (mouseX - objX) * intensity[index];
        const offsetY = (mouseY - objY) * intensity[index];
        obj.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      });
    };

    const throttledHandleMouseMove = throttle(handleMouseMove, 26); // Limitez l'appel à chaque 16ms environ

    document.addEventListener('mousemove', throttledHandleMouseMove);

    return () => {
      document.removeEventListener('mousemove', throttledHandleMouseMove);
    };
  }, []);

  // Fonction de throttling pour limiter l'exécution de la fonction
  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
      const context = this;
      const args = arguments;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };
    

  return (
    <div className='background-3d'>
      <img src={object1} ref={object1Ref}  className='object1 anim' alt="object1"/>
      <img src={object2} ref={object2Ref}  className='object2' alt="object2"/>
      <img src={user1} ref={user1Ref}  className='user1' alt="user1" width={'50px'}/>
      <img src={user2} ref={user2Ref}  className='user2' alt="user2"/>
      <img src={object3} ref={object3Ref} className='object3' alt="object3" width={'200px'}/>
      <img src={object5} className='object4' alt="object4" width={'400px'}/>
      <img src={object6} className='object5' alt="object5" width={'400px'}/>
      <img src={object7} className='object6' alt="object6" width={'200px'}/>
      <img src={object2} className='object7' alt="object7" width={'120px'} data-aos="zoom-in-up"/>
      <img src={object1} className='object8 anim' alt="object8" width={'190px'} data-aos="zoom-in-down" data-aos-delay="300"/>
      <img src={object4} className='object9 anim' alt="object9" width={'400px'} data-aos="zoom-in-left" data-aos-delay="600"/>
    </div>
  )
}

export default Background3D

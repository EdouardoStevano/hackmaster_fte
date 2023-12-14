import React from 'react'

// Style importation
import "./contact.scss"

function contact() {
  return (
    <div className='super-global-container contact' id='contact'>
        <div className="super-container-p80">
            <div className="side-50">
              <h1>Votre avis nous sera precieux</h1>
              <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, provident saepe reprehenderit similique aspernatur optio</small>
              <p>+261 34 85 008 92</p>
              <p>edouardostevano@gmail.com</p>
            </div>

            <div className="side-50">
              <div className="top">
                <input className='contact-input' type="text" placeholder='Nom'/>
                <input className='contact-input' type="text" placeholder='Prénom'/>
                <input className='contact-input' type="text" placeholder='Adresse mail'/>
              </div>

              <div className="bottom">
                <textarea name="" id="" maxLength={"1000"} placeholder='Message'></textarea>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default contact

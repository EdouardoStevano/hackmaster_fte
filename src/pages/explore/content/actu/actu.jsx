import React from 'react'
import './actu.scss'

function Actu() {
  return (
    <div className='middle-actu'>
        <div className="actuExplore">
   
                <div className="card-actu">
                    <div className="card-content">
                        <h1>Hackmaster: L'événement incontournable de la Tech ce mois-ci!</h1>
                        <p>Cette année, ORIGAMI TECH, une figure de proue dans l'industrie technologique, dévoile son événement phare : Hackmaster. Cet événement, conçu comme un festival de créativité numérique, réunit les esprits les plus brillants de la Tech pour un hackathon d'exception</p>
                        <div className="image">
                        </div>
                    </div>
                </div>

                <div className="card-actu">
                    <div className="card-content">
                        <h1>Développement économique et initiatives entrepreneuriales à Madagascar</h1>
                        <p>Dans cet article, on pourrait aborder les récents développements économiques à Madagascar, mettre en lumière des initiatives entrepreneuriales locales qui contribuent à la croissance économique du pays, et discuter des défis et des opportunités pour le secteur privé.</p>
                        <div className="image2">
                        </div>
                    </div>
                </div>

                <div className="card-actu">
                    <div className="card-content">
                        <h1>Conservation de la biodiversité : les efforts de préservation à Madagasca</h1>
                        <p>Un article axé sur la biodiversité à Madagascar pourrait mettre en avant les efforts de préservation des écosystèmes uniques de l'île, discuter des défis environnementaux actuels, et présenter des initiatives de conservation et de protection de la nature.</p>
                        <div className="image3">
                        </div>
                    </div>
                </div>

                <a href="#" className='showmoreActu'>Voir plus</a>
        </div>
    </div>
  )
}

export default Actu

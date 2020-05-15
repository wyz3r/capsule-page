import React from 'react'
import Image from "../image"

// import PropTypes from 'prop-types'

const Section1 = () => {
  return (
    <div className='section1'>
      <div className='deco1'>
        <Image filename='deco1.png'/>
      </div>
        <div className='g1' style={{width:'300px'}}>
          <Image filename='gblue.png'/>
        </div>
        <div className='g2' style={{width:'300px'}}>
          <Image filename='ggreen2.png'/>
        </div>
        <div className='content'>
          <div className='g3' style={{width:'350px'}}>
            <Image filename='ggreen2.png'/>
          </div>
        </div>
        <div className='g4' style={{width:'300px'}}>
            <Image filename='gblue.png'/>
        </div>
      <div className='section1-content'>
        <div className='title'>
          OBJETIVOS
        </div>
        <div className='info-content'>
          <div className='info left'>
            <div className='info-title'>
              <div className='image'>
                <Image filename='npic.png'/>
              </div>
              <div className='texto'>
                EGOCIO
              </div>
            </div>
            <div className='info-body'>
            Comenzar a visualizar el desarrollo de un pipeline de innovación a corto y mediano plazo en packs que tenga impacto en México para capitalizar las oportunidades
            </div>
          </div>
          <div className='info right'> 
            <div className='info-title'>
                <div className='texto'>
                  PROYECT
                </div>
                <div className='image'>
                  <Image filename='opic.png'/>
                </div>
            </div>
            <div className='info-body'>
            Entender los cambios en el contexto, las necesidades y tensiones de los consumidores y cómo aterriza en acciones para generar soluciones de innovación en empaques
            </div>
            
          </div>
        </div>
      </div>
      <div className='deco2'>
        <Image filename='deco2.png'/>
      </div>
    </div>
  )
}

export default Section1

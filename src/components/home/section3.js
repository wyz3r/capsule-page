import React from 'react'
import Image from "../image"
import { Link } from "gatsby"


function Section3() {
  return (
    <div className='section3'>
      <div className='g7'>
        <Image filename='gyellow.png'/>
      </div>
      <div className='content-g89'>
        <div className='g8'>
          <Image filename='gorange.png'/>
        </div>
        <div className='g9'>
        <Image filename='gpink.png'/>
      </div>
      </div>
      <div className='section3-intro'>
        <div className='title'>
          ZOOM
        </div>
        <div className='subtitle'>
          A LAS HERRAMIENTAS
          DE CADA NIVEL:
        </div>
      </div>
      <div className='fases-container'>
        <div className='fase-card'>
           <div style={{width: '150px'}}>
             <Image filename='brain.png' />
           </div>
          <div className='body-card'>
            <div className='title-card yellow'>
            <Link to='/brain'>
              BRIAN THE BRAIN           
            </Link>
             
            </div>
            <div className='text-card '>
            Información del mercado:
            Modelo de focalización de innovaciones en el desarrrollo de packs

            </div>
          </div>
        </div>
        <div className='fase-card right'>
          {/* <div style={{width: '320px',opacity: '.1'}}>
            <Image filename='vision.png'/>
          </div> */}
          <div className='justificado' style={{width: '150px'}}>
             <Image filename='expert.png' />
           </div>
          <div className='body-card'>
            <div className='title-card orange'>
            <Link to='/explorer'>
              CATEGORY EXPLORER          
            </Link>
             

            </div>
            <div className='text-card'>
            6 entrevistas con especialistas:
            Packs, impresión 3D, nuevos modelos 
            de negocios a granel, maestra y mesero
            </div>
          </div>
        </div>
        <div  className='fase-card'>
           <div className='justificado' style={{width: '150px'}}>
             <Image filename='hand.png' />
           </div>
          <div className='body-card'>
            <div className='title-card kingblue'>
             <Link to='/consumer'>
             CONSUMER EXPLORER         
            </Link>
            </div>
            <div className='text-card'>
            6 sesiones de explo-creación:
              Atravesando diferentes rangos de edad y NSE’s
            </div>
          </div>
        </div>
        <div className='fase-card right'>
          {/* <div style={{width: '320px',opacity: '.1'}}>
            <Image filename='vision.png'/>
          </div> */}
          <div >

          </div>
          <div className='justificado' style={{width: '150px'}}>
             <Image filename='winning.png' />
           </div>
          <div className='body-card'>
            <div className='title-card pink'>
            <Link to='/mota'>
                MOTA PACKS         
            </Link>
              
            </div>
            <div className='text-card '>
            Modelo de trabajo que nos ayudará a organizar las ideas de innovación
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3

import React from 'react'
import Image from "../image"

function Section2() {
  return (
    <div className='section2'>
       <div className='g5'>
        <Image filename='ggreen2.png'/>
      </div>
      <div className='content-g6'>
        <div className='g6'>
          <Image filename='gblue.png'/>
        </div>
      </div>
      
      <div className='section2-intro'>
        Por eso vamos a implementar nuestra  <label className='label-green'>cápsula de 
        innovación </label>centrada en dos niveles de 
        visualización y con diferentes herramientas en su interior:
      </div>
      <div className='vision'>
        <div style={{width: '320px',opacity: '.1'}}>
          <Image filename='vision.png'/>
        </div>
        <div className='vision-title green'>
          TRANSFORMACIONAL
        </div>
        <div className='vision-body'>
        Que nos ayuda a entender lo que pasa en el contexto: tendencias del mercado, tensiones y needs de consumidor
        </div>
        <div className='section-face'>
          FOCO DE DESARROLLO DEL PROYECTO
        </div>
      </div>
      <div className='vision'>
        <div style={{width: '320px',opacity: '.1'}}>
          <Image filename='vision.png'/>
        </div>
        <div className='vision-title light-blue'>
          ESTRATÉGICA
        </div>
        <div className='vision-body'>
          Explotar el modelo de trabajo con el team TCCC para aterrizar el pipeline de innovación en packs 
        </div>
        <div className='section-face blue'>
          FASE 2 DEL PROYECTO (STAND BY)
        </div>
        
      </div>
      <div className='deco3'>
         <Image filename='deco3.png'/>
      </div>
    </div>
  )
}

export default Section2

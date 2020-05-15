import React from 'react'

function Tabla() {
  return (
    <div className='tabla-container'>
      <div className='tabla-card left'>
        <div className='title'>
        NECESIDADES INDIVIDUALES
        </div>
        <div className='info'>
        Un discurso tangible y cercano, porque es parte de las necesidades y los hábitos del día a día, en su entorno inmediato

        </div>
        <div className='info'>
        <span>Aquí se encuentran: </span>
        La practicidad, la usabilidad, la rapidez, la adaptabilidad, etc.
        </div>
      </div>
      <div className='tabla-card right'>
        <div className='title'>
        NECESIDADES COLECTIVAS
        </div>
        <div className='info'>
          Un discurso adquirido que tiene un beneficio que no necesariamente se percibe directo y por lo tanto se visualiza lejano

        </div>
        <div className='info'>
          <span>Aquí se encuentran: </span>
          La sustentabilidad, el cuidado del medio ambiente, el reciclaje, etc.
        </div>
      </div>
    </div>
  )
}

export default Tabla
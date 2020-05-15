
import React from 'react'
import PropTypes from 'prop-types'
import Image from "../image"

const HeaderHome = () => {
  return (
    <div className='headerHome'>
      <div className='image-container'> 
        {/* <picture>
          <img className='imagen' src='http://via.placeholder.com/1200x330' />
        </picture> */}
        <div style={{width: '100%', maxWidth: '1200'}}>
          <Image filename='PortadaN.jpg'/>
        </div>
        <div className='texto-header'>
            CÁPSULA DE <span className='blue'>INNOVACIÓN</span> 
          </div>
        <div className='intro' >
          Queremos adelantarnos al futuro y visualizar cuáles son los posibles caminos de desarrollo para empaques a corto y mediano plazo para tener propuestas de valor, eficientes y sustentables para el consumidor y para el negocio
        </div>
      </div>
    </div>
  )
}

HeaderHome.propTypes = {
  string: PropTypes.string,
}

export default HeaderHome

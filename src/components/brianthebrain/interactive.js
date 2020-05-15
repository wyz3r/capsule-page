import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types"
import CircleType from 'circletype'
// import Image from "../image"
import Gallery from '../../components/Gallery'

const Interactive = () => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    giro('info', 280, 1)
    giro('info2', 280, 1)
    contentGiro('giro', -45)
    giro('info3', 280, 1)
    contentGiro('giro2', 45)
    giro('info4', 280, -1)
    contentGiro('giro3', 45)
    giro('info5', 280, -1)
    contentGiro('giro4', -45)
  }, [])

  const giro = (id , radius , sector ) => {
    const circleType = new CircleType(document.getElementById(id))
    circleType.radius(radius).dir(sector);
  }
  
  const contentGiro = (id, grados) => {
    const eso = document.getElementById(id)
    eso.style.transform = `rotate(${grados}deg)`
  }

  const rednerContenido = (active) => {
    if(active === 1) {
      return (
      <div className='concept-card'>
        <div className='idea'>
          Proporcionar información y fomentar la 
          interaccion
        </div>
        <div className='description'>
          Esta tendencia se centra principalmente en las capacidades reales y no exploradas de los envases inteligentes,
          que pueden proporcionar información al cliente sobre el producto. En un futuro próximo, el scouting predice que 
          &quot; todos los embalajes serán inteligentes &quot;.
        </div>
        <div className='example-container'>
          <div className="gallery">
            <Gallery width='650px' folder={'empaquesInt'} infiniteLoop showIndicators={false} autoPlay={true} />
          </div>
        </div>
      </div>)
    }
    else if(active === 2) {
      return (<div className='concept-card'>
      <div className='idea'>
      Mejorar experiencia de consumo
      </div>
      <div className='description'>
      Las formas de vida contemporáneas más rápidas exigen mejores experiencias de productos.
      Las industrias de embalaje están haciendo todo lo posible para proporcionar mejores packs para hacer frente a la
      vida cotidiana
      </div>
      <div className='example-container'>
        <div className="gallery">
          <Gallery width='650px' folder={'mejorar'} infiniteLoop showIndicators={false} autoPlay={true} />
        </div>
      </div>
    </div>)
    }
    else if(active === 3) {
      return (<div className='concept-card'>
      <div className='idea'>
        Prolongar la vida útil
      </div>
      <div className='description'>
        El uso de materiales y embalajes activos de barrera, que impiden la interacción de elementos dañinos con los alimentos y al mismo tiempo prolongar la vida útil.
        La innovación proviene de la producción de nuevos polímeros o recubrimientos, y de la implementación de nuevos nano materiales

      </div>
      <div className='example-container'>
        <div className="gallery">
          <Gallery width='650px' folder={'prolongar'} infiniteLoop showIndicators={false} autoPlay={true} />
        </div>
      </div>
    </div>)
    }
    else if(active === 4) {
      return (<div className='concept-card'>
      <div className='idea'>
        Preservar el medio ambiente
      </div>
      <div className='description'>
      Desde el pack y el modelo de negocio se plantean opciones y ejecuciones que ayudan a reducir el impacto ecológico que tienen los materiales y
      los consumos en el ambiente resultando en opciones amigables con el entorno que toman en cuenta toda la cadena de producción y vida del producto.

      </div>
      <div className='example-container'>
        <div className="gallery">
          <Gallery width='650px' folder={'preservar'} infiniteLoop showIndicators={false} autoPlay={true} />
        </div>
      </div>
    </div>)
    }
    else {
      return (
        <div className='concept-card'>
          <div className='example-info'>
            Y para dar estructura partimos de un modelo que integra las diferentes innovaciones en envases, pero que tampoco nos sorprendió mucho porque todo lo tenemos en el radar.

          </div>
        </div>
      )
    }
  }

  return (
      <div className='brian-body'>
        
        <div className='ruleta'>
        <div className='ruleta-title' >
          Tendencias en <span>Packs</span>
        </div>
          <div className='buttons-content'>
            <div  className={'button-cuarto uno ' + (active ===1? '': 'inactive')} onClick={() => {setActive(1)}}>
              <div className='cuarto-circulo1'>
                <div className='num'>
                  01
                </div>
              </div>
              <div className='circulo-exterior'>
                <div id='giro' className='text'>
                <span id='info'>Proporcionar información y </span>
                <span id='info2'>fomentar la interacción</span>
                </div>
              </div>
            </div>
            <div  className={'button-cuarto dos ' + (active === 2? '': 'inactive')} onClick={() => {setActive(2)}}>
              <div className='cuarto-circulo2'>
                <div className='num'>
                  02
                </div>
              </div>
              <div className='circulo-exterior'>
                <div id='giro2' className='text'>
                  <span id='info3'>
                  Mejorar experiencia consumo
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='buttons-content'>
            <div className={'button-cuarto tres ' + (active === 4 ? '': 'inactive')} onClick={() => {setActive(4)}}>
              <div className='cuarto-circulo3'>
                <div className='num'>
                  04
                </div>
              </div>
              <div className='circulo-exterior'>
                <div id='giro3' className='text'>
                  <span id='info4'>
                    Preservar el medio ambiente
                  </span>

                </div>
              </div>
            </div>
            <div className={'button-cuarto cuatro ' + (active === 3 ? '': 'inactive')} onClick={() => {setActive(3)}}>
              <div className='cuarto-circulo4'>
                <div className='num'>
                  03
                </div>
              </div>
              <div className='circulo-exterior'>
                <div id='giro4' className='text'>
                  <span id='info5'>Prolongar Vida útil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='concept-container'>
          {rednerContenido(active)}
        </div>  
    </div>
  )
}

Interactive.propTypes = {
  siteTitle: PropTypes.string,
}

Interactive.defaultProps = {
  siteTitle: ``,
}

export default Interactive

import React from 'react'
import Gallery from '../../components/Gallery'

const bodyConsumer = () => {
  return (
    <div className='section-content'>
    <h1>BRIAN THE BRIAN</h1>
    <h2 id='necesidades' >
      <a href="#necesidades" aria-label="Proporcionar información y fomentar la interaccion" className="anchor">
        <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16">
          <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
          </path>
          </svg>
        </a>
        Necesidades
      </h2>
      <div className='need-texts'>
        <div className='title'>
          <h3>NECESIDADES COLECTIVAS</h3>
        </div>
        <div className='body-text'>
          Un discurso adquirido que tiene un beneficio que no necesariamente se percibe directo y por lo tanto se visualiza lejano
        </div>
      </div>
      <div className='need-texts'>
        <div className='title'>
          <h3>NECESIDADES INDIVIDUALES</h3>
        </div>
        <div className='body-text'>
          Un discurso tangible y cercano, porque es parte de las necesidades y los hábitos del día a día, en su entorno inmediato
        </div>
      </div>
      <h2 id='gallery-consumer' >
      <a href="#gallery-consumer" aria-label="Galeria " className="anchor">
        <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16">
          <path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
          </path>
          </svg>
        </a>
        Galeria de materiales
      </h2>
      <div className='gallery-content'>
        <Gallery width='650px' folder={'material'} infiniteLoop showIndicators={false} autoPlay={true} />
      </div>
      <h2 id='video-consumer' >
      <a href="#video-consumer" aria-label="videos consumidores" className="anchor">
        <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16">
          <path
            fillRule="evenodd"
            d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
          </path>
          </svg>
        </a>
        Videos Consumidores
      </h2>
      <div className='videos-content'>
          <video controls>
            <source src="https://dlr-site.s3.amazonaws.com/motahss/GMT20190704-152834_System-2-s_1280x720.mp4"
            type="video/mp4" />
            Tu navegador no implementa el elemento 
            <code>video</code>.
          </video>
          <video controls>
            <source src="https://dlr-site.s3.amazonaws.com/motahss/GMT20190704-175801_System-2-s_1280x720.mp4"
            type="video/mp4" />
            Tu navegador no implementa el elemento 
            <code>video</code>.
          </video>
          <video controls>
            <source src="https://dlr-site.s3.amazonaws.com/motahss/GMT20190704-203137_System-2-s_1280x720.mp4"
            type="video/mp4" />
            Tu navegador no implementa el elemento 
            <code>video</code>.
          </video>
      </div>
    </div>
  )
}

export default bodyConsumer

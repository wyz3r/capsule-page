import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeaderSection from '../components/headerSection' 
import Layer from '../components/mota/Layer'
import Gallery from '../components/Gallery'
import Image from '../components/image'

const mainColor = '#FF2164'

const Mota = () => (
  <Layout>
    <SEO title="BRIAN THE BRAIN | MOTA PACKS" />
     <div className='brian-container'>
      <HeaderSection title={'MOTA PACKS'} image={'winning.png'} color={mainColor}/>
    </div>
    
    <div className="motaIntro">
      <div className="motaComplete">
        Tenemos muchos espacios de oportunidad, por lo que con toda la información generamos un 
        <b> MODELO DE TRABAJO</b> que nos ayudará a organizar las ideas de innovación y sobre 
        todo aprovechar el <b> BLENDED WORLD</b> (entre más combinaciones hagamos mayor oportunidad de innovación)
      </div>
      <div className="motaSide">
        <div className="motaTitle">¿EN QUÉ CONSISTE?</div>
        <div className="motaText">
          <ul>
            <li>
              Permite identificar y ordenar de manera sencilla los espacios de oportunidad 
              <span> (producto, consumidor, sociedad y planeta) </span> 
               para el desarrollo de iniciativas
            </li>
            <li>
              Brinda <span> argumentos para la ideación </span> 
               en función de una estructura de 
              <span> múltiples layers</span> en los que se puede intervenir a partir de diferentes operaciones de valor
            </li>
          </ul>
        </div>
      </div>
      <div className="motaSide">
        <div className="motaTitle">¿CÓMO SE LEE?</div>
        <div className="motaText">
          <ul>
            <li>
              Conformado por <span>4 niveles</span>, que retoman las 2 dimensiones de necesidades y 
              los espacios de oportunidad:  <span> de las necesidades más individuales a las 
              más colectivas</span>
            </li>
            <li>
              La innovación, puede construirse independiente o combinado ya que eso irá
              potenciando la iniciativa 
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="gallery-container">
      <Gallery folder={'mota'}  showIndicators={false} autoPlay={true} />
    </div>
    <div className="motaPiramide">
      <div className="piramideSide primSideImg">
        <div className="primImg">
          <Image filename={'graficaMOTA2.png'} />
        </div>
      </div>
      <div className="piramideSide">
        <div className="piramideData">
          <div className="piramideItem">
            <div className="title">Storydoing</div>
            <div className="sideText">
              Contribuir de manera activa al cuidado y 
              sostenibilidad de los recursos naturales. 
            </div>
          </div>
          <div className="piramideItem">
            <div className="title">Storytelling</div>
            <div className="sideText">
              Proveer de argumentos y herramientas para 
              sostener un discurso social de compromiso 
              por el bienestar de las personas y la sociedad.
            </div>
          </div>
          <div className="piramideItem">
            <div className="title">Motivaciones y escenas de consumo</div>
            <div className="sideText">
              Facilitar o mejorar la experiencia de convivencia, 
              uso o consumo del producto para el usuario. 
            </div>
          </div>
          <div className="piramideItem">
            <div className="title">Diferenciación</div>
            <div className="sideText">
              Generar, mantener o reforzar las cualidades 
              del producto desde el empaque
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="layer-container">
    <StaticQuery
    query={graphql`
      query motaQuery {
        allMotaJson {
          nodes {
            id
            cases {
              corredores
              descriptions {
                text,
                title
              }
              figs {
                color
                fill
              }
            }
            mainColor
            subtitle
            title
            corredores
          }
        }
    }
    `}
    render={data => {
      const {nodes} = data.allMotaJson
      return (
        nodes.map((node,key) => {
          return <Layer key={key} data={node} />
        } )
      )
    }}
  />
    <div className="motaNota">
      <p>
        <b>Nota: </b>Estos son primeros ejemplos de combinaciones entre corredores 
        y layers que detonamos con consumidores, especialistas y team HSS.
      </p>
      <p>
        Nos ayuda a visualizar lo que podemos desarrollar: provee ideas 
        infinitas y además nos ayuda a sumar elementos como: marcas, 
        categorías, ventas, etc. Para poder aterrizar propuestas de innovación en la 
        segunda parte estratégica del proyecto. 
      </p>
    </div>
    </div>
  </Layout>
)

export default Mota

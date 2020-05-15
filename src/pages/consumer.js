import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeaderSection from '../components/headerSection'
import Tabla from '../components/consumer/tabla'
import Gallery from '../components/Gallery'


const IndexPage = () => (
  <Layout>
    <SEO title="BRIAN THE BRAIN" />
     <div className='consumer-container'>
      <HeaderSection title={'CONSUMER EXPLORER '} image={'hand.png'} color={'#1464f4'}/>
      <Tabla />
      <div className="gallery-container">
        <Gallery folder={'material'} infiniteLoop  showIndicators={false} autoPlay={true} />
      </div>
    </div> 
    
  </Layout>
)

export default IndexPage

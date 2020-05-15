import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeaderSection from '../components/headerSection' 
import Section from '../components/descargables/section'

const mainColor = '#00f8a4'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='brian-container'>
      <HeaderSection title={'Materiales descargables'} image={'descargas.png'} color={mainColor}/>
    </div>
    <div className='descargables-container'>
      <Section />
    </div>
  </Layout>
)

export default IndexPage

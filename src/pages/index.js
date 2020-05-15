import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeaderHome from '../components/home/headerHome'
import Section1 from '../components/home/section1'
import Section2 from '../components/home/section2'
import Section3 from '../components/home/section3'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='home-container'>
      <HeaderHome />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
    
  </Layout>
)

export default IndexPage

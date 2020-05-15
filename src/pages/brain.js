import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import Interactive from '../components/brianthebrain/interactive' 
import HeaderSection from '../components/headerSection' 

const IndexPage = () => (
  <Layout>
    <SEO title="BRIAN THE BRAIN" />
     <div className='brian-container'>
      <HeaderSection title={'BRIAN THE BRAIN'} image={'brain.png'} color={'#F9E710'}/>
      <Interactive />
    </div> 
    
  </Layout>
)

export default IndexPage

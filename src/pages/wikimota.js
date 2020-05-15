import React from 'react'

import Layout from '../components/layoutWorkshop'
import Header from '../components/wikimota/headerWiki'
import MenuLateral from '../components/wikimota/menulateral'
import ContentBody from '../components/wikimota/ContentBody'

const Teampages = () => (
  <Layout >
    <div style={{display: 'flex'}}>
      <Header />
      <MenuLateral />
      <ContentBody />
    </div>
    
  </Layout>
)

export default Teampages
import React from 'react'

// Components
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeaderSection from '../components/headerSection'
import CardExplorer from '../components/explorer/sectionCards'

const Explorer = () => (
  <Layout>
    <SEO title="BRIAN THE BRAIN" />
     <div className='brian-container explorer'>
      <h2 className="subtitle">
        <strong>8 Macrofuerzas</strong> que actúan sobre la sociedad y modelan nuestras conductas de consumo.
      </h2>
      <HeaderSection title={'CATEGORY EXPLORER'} image={'expert.png'} color={'#ff9100'}/>
      <CardExplorer />
    </div>
  </Layout>
)

export default Explorer
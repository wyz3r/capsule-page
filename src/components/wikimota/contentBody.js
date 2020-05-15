import React from 'react'
import BodyBrian from './bodyBrian'
import BodyExplorer from './bodyExplorer'
import BodyConsumer from './bodyConsumer'


const ContentBody = () => {
  return (
    <main className='body-wikimota' >
      <BodyBrian />
      <BodyExplorer />
      <BodyConsumer />
    </main>
  )
}

export default ContentBody

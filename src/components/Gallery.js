import React from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { graphql,StaticQuery } from "gatsby"

export default ({folder,...props}) => {
  return (<StaticQuery
    query={graphql`
      query carrousel
         {
          images: allFile(filter: {extension: {regex: "/(jpeg|jpg|gif|png)/"}, sourceInstanceName: {eq: "images"}}, ) {
            nodes {
              childImageSharp{
                fluid(maxWidth:1200){
                  originalImg,
                  originalName,
                  presentationWidth,
                  presentationHeight
                }
              },
              relativeDirectory
            }
          }
        
      }
    `}
    render={({images}) => {
      const {nodes} = images
      const imageSort = nodes.filter(({relativeDirectory}) => relativeDirectory === folder).sort((a, b) => {
        return (a.childImageSharp.fluid.originalName > b.childImageSharp.fluid.originalName) ? 1 : -1
      })

      return (
        <Carousel {...props}>
          {imageSort.map(({childImageSharp})=>{
            const {originalImg,originalName} = childImageSharp.fluid
            return (
              <div key={originalName}>
                <img src={originalImg} alt={originalName} />
              </div>
            )
          })}
        </Carousel>
      )
    }}
  />)
  }



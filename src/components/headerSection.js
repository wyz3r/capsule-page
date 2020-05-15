import React from 'react'
import Image from "./image"
import Line from './svg/line'

const HeaderSection = ({title,image,color}) => {
  if(!color) color ='#FFF'
  return (
    <div className='header-section' style={{color}}>
      {/* <div className='decoration-header'>
        <Image filename='headeryellow.png'/>
      </div> */}
      <div className="line-image">
        <Line color={color}/>
      </div>
      <div className='elements-container' >
        
        <div style={{width: '140px'}}>
          <Image filename={image} />
        </div>
        <div className='text-header'>
          {title}
        </div>
      </div>
    </div>
  )
}



export default HeaderSection

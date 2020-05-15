import React from 'react'

export default ({fill, colorFill}) => {
  const array = [null, null, null, null, null, null, null, null, null]
  return(
    <div className="figContent">
      {array.map((item,index) => {
        const bgColor = fill.includes(index) ? colorFill :'transparent'
        return <div key={index} style={{backgroundColor:bgColor}} className="figItem" />
      })}
    </div>
  )
}
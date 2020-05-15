import React from 'react'

export default ({color}) => {
  const styles = {
    fill: 'none',
    stroke: color,
    strokeMiterlimit: 10,
    strokeWidth: 1.5,
  }
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400.37 209.41">
      <title>Asset 3</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <polyline style={styles} points="0.36 208.75 336.89 27.15 1400.36 0.75" />
        </g>
      </g>
    </svg>
  )
}
  

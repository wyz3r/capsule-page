import React from 'react'

// Components
import Image from '../image'

const CardExplorer = ({title, text, quote, filename}) => (
  <div className="card-explorer">
    <div className="card-content">
      <div className="card-body">
        <div className="cardImage">
          <Image filename={filename}/>
          {/* <img src='http://via.placeholder.com/150x150' /> */}
        </div>
        <div className="card-text">
          <h3>{title}</h3>
          <p className="white-text">{text}</p>
          <p>{quote}</p>
        </div>
      </div>
    </div>
  </div>
)

export default CardExplorer
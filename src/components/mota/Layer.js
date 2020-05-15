import React, {useState, Fragment} from "react"
import { CSSTransition,TransitionGroup} from 'react-transition-group'

import Fig from './figs'
import MakeFig from './makeFig'

const LayerCorredores = ({items,active,color}) => (

  items.map((item, index) => {
    const fill = active && active.includes(item) ? color : '#294C56'
    return(
      <div key={index} className="layerCorredoresItem">
        <Fig element={index} fill={fill}/>
        <div className="layerText">{item}</div>
      </div>
    ) 
  })
)

const LayerFig = ({caseItem}) => {
  const {figs,descriptions, corredores} = caseItem

  let durationLayer = 0
  let delayLayer = 0
  return(
    <Fragment>
        <TransitionGroup appear={true} className="layerFigCont">
          {figs.map(({color,fill},index) => {
            const delay = (index) * 1000
            const duration = (index+1) * 1000
            durationLayer =+ duration
            delayLayer =+ delay
            return(
              <CSSTransition key={Date.now()+'-'+index}
              timeout={{ enter: duration, exit: 200 }}
              classNames="layerFigAnimate"
              appear={true}
              >
                <div className="layerFigAnimate" style={{transitionDelay:`${delay}ms`}}>
                  <MakeFig key={index} fill={fill} colorFill={color}/>
                </div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
        
        <CSSTransition in={true} key={Date.now()+'text'}
          timeout={{ enter: durationLayer+1000, exit: 0 }}
          classNames="layerTextAnimate"
          appear={true}
          >
          <div className="textLayer" style={{transitionDelay:`${delayLayer+500}ms`}}>
            <b>{corredores.join(' + ')}</b> 
            {descriptions.map(({title,text},index) => (
              <p key={index} ><span >{title}</span> {text}</p>
            ))}
            
          </div>
        </CSSTransition>
    </Fragment>
  ) 
}

const Layer = ({data}) => {
  const [activeCase, setCase] = useState(null)

  const {mainColor:color, title,subtitle,cases, corredores } = data

  const clickCase = (e, index) => {
    setCase(index)
  }

  return (
    <div className="layerItem">
      <div className="layerColumn layerMain">
        <div className="layerMainFill" style={{backgroundColor: color}} />
        <div className="layerMainContent">
          <div className="layerTitle">
            {title}
          </div>
          <div className="layerSubtitle">
            {subtitle}
          </div>
          <div className="LayerCasos">
            {
              cases.map((caseItem,index) => (
                <div 
                  key={index} 
                  className={`btnCaso ${activeCase === index ? 'acive': ''}`} 
                  onClick={(e) => clickCase(e, index)}
                  style={{background: activeCase === index ? color  : '#132025', border: `1px solid ${color}b0`}}
                >
                  Caso {index + 1}
                </div>
              ))
            }
            
          </div>
        </div>
      </div>
      <div className="layerColumn laterCorredores">
        <LayerCorredores 
          items={corredores} 
          active={activeCase !== null ? cases[activeCase]['corredores']:null}
          color={color}
        />
      </div>
      <div className="layerColumn layerFig">     
        {activeCase !== null ? <LayerFig color={color} caseItem={cases[activeCase] || null} /> : null }
      </div>
    </div>
  )
}

export default Layer

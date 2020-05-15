import React from 'react'

const Fig1 = ({fill}) => (
  <div className="layerIcon layericonH">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 19.58">
      <title>fig-1</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <rect style={{fill}} width="6" height="12.95"/>
          <rect style={{fill}} x="6" y="6.63" width="6" height="12.95"/>
        </g>
      </g>
    </svg>
  </div>
)

const Fig2 = ({fill}) => (
  <div className="layerIcon layericonW">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
      <title>fig-2</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <rect style={{fill}} width="12" height="12"/>
        </g>
      </g>
    </svg>
  </div>
  
)

const Fig3 = ({fill}) => (
  <div className="layerIcon layericonW">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 5.6">
      <title>fig-3</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <rect style={{fill}} x="7.2" y="-7.2" width="5.6" height="20" transform="translate(12.8 -7.2) rotate(90)"/>
        </g>
      </g>
    </svg>
  </div>
  
)

const Fig4 = ({fill}) => (
  <div className="layerIcon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 19.26">
      <title>fig-4</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <rect style={{fill}} width="6" height="19.26"/>
          <rect style={{fill}} x="6" y="6.63" width="6" height="6"/>
        </g>
      </g>
    </svg>
  </div>
)

const Fig5 = ({fill}) => (
  <div className="layerIcon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.2 15.16">
      <title>fig-5</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <rect style={{fill}} width="7.2" height="15.16"/>
        </g>
      </g>
    </svg>
  </div>
  
)

const Fig6 = ({fill}) => (
  <div className="layerIcon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18.32">
      <title>fig-6</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Capa_1" data-name="Capa 1">
          <rect style={{fill}}  width="6" height="18.32"/>
          <rect style={{fill}}  x="6" y="12.32" width="6" height="6"/>
        </g>
      </g>
    </svg>
  </div>
  
)

export default ({element,fill}) => {
  const figs = [
    <Fig1 key='0' fill={fill} />,
    <Fig6 key='5' fill={fill} />,
    <Fig3 key='2' fill={fill} />,
    <Fig4 key='3' fill={fill} />,
    <Fig5 key='4' fill={fill} />,
    <Fig2 key='1' fill={fill} />,
  ]

  return figs[element]
}
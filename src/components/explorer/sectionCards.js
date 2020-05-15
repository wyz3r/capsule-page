import React from 'react'

// Components
import CardExplorer from './cardExplorer'
// import Image from '../image'
// import Line from '../svg/line'

const SectionCards = () => (
  <section className="explorer-container">
    <CardExplorer
      title='01. Mundo incierto'
      text='La realidad supera a la ficción y la única solución es mantenernos alerta y constantemente activos para buscar soluciones que nos den seguridad.'
      quote='"Yo creo que ahora ya no sabemos que nos va a pasar manaña, por eso es necesario aprovechar cada momento para hacer lo que quieres hacer"'
      filename="category-01.png"
    />
    <CardExplorer
      title='02. Reto futuro'
      text='Hoy es vital mirar hacia atrás para recordar, redescubrir y recuperar los elementos de alto valor que nos hacen “diferentes” y mantienen nuestro “origen”.'
      quote='“El vidrio es algo que usaba mi papá, pero creo que eso era mejor porque nos ayudaba a cuidar nuestro mundo y hacernos más responsables”…'
      filename="category-02.png"
    />
    <CardExplorer
      title='03. I want it all'
      text='Una demanda más sofisticada… Muchas opciones, muchos roles, muchas necesidades, lo queremos todo, todo el tiempo y en todo momento.'
      quote='“Ya no es suficiente con ofrecerles un buen producto, tienes que hacerlo con procesos más veloces, con múltiples beneficios, que además sea bueno para ellos, que ayude a la sociedad, que no dañe al planeta y que sea con experiencia maravillosa tanto on como offline”…'
      filename="category-03.png"
    />
    <CardExplorer
      title='04. Surprise me!'
      text='Nos estamos acostumbrando a las innovaciones, por eso la innovación incremental ya no tiene sentido y cada vez se buscan opciones más disruptivas.'
      quote='“Se tienen que cambiar las reglas, por eso hay opciones que permiten optimizar procesos y tener ciclos de innovación más cortos que respondan a las demandas, pero aún falta masificarlos y perfeccionarlos”…'
      filename="Recurso16.png"
    />
    <CardExplorer
      title='05. Fast and Furious'
      text='Múltiples roles y poco tiempo, nosotros mismos estamos exigiéndonos más…ser mejores madres, alimentarnos mejor, ser más bella, trabajar mucho, pero no tener estrés…'
      quote='“La clave del mundo actual es la rapidez y es ahí donde las marcas ayudan a la gente con opciones más cómodas, más prácticas, al final más convenientes”…'
      filename="category-05.png"
    />
    <CardExplorer
      title='06. Take action'
      text='Estamos dispuestos a alzar la voz y comenzar a tomar acciones pero no podemos hacerlo solos, por eso surgen organizaciones, comunidades, sociedades, movimientos que fomentan las economías y el consumo colaborativo.'
      quote='“Los consumidores están cada vez más conscientes de que necesitamos comenzar a hacer cambios para que tenga efectos, es difícil, pero ya hay avances por ejemplo el que reciclen en su casa o junten las tapitas”…'
      filename="Recurso20.png"
    />
    <CardExplorer
      title='07. Infoxicación'
      text='Hay tanto, que no sabemos... en qué y en quién creer. Pero tenemos la capacidad de elegir cómo, en dónde y con quién buscar, y parece que hoy siempre encontramos quién apoye nuestra postura'
      quote='“La gente no sabe que el plástico no es un material tan dañino, el tetra pack no se recicla tan fácil, lo biodegradable es insostenible, el vidrio afecta a la capa de ozono, pero el enemigo hoy es el plástico”…'
      filename="Recurso14.png"
    />
    <CardExplorer
      title='08. Safe bubble'
      text='En un contexto de inseguridad y falta de control la tecnología se convierte en un aliado  de confianza que otorga empoderamiento ofreciéndonos una red de seguridad: accesibilidad, garantía, innovación, diferenciación, etc.'
      quote='“El valor de la tecnología es único, cuando las empresas nacen desde ahí es más fácil que sean flexibles y se adapten más rápido al contexto de necesidades apoyando mayor innovación y diferenciación en el mercado”…'
      filename="category-08.png"
    />
  </section>
)

export default SectionCards
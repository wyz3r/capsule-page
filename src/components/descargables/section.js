import React from 'react'
import Image from "../image"

function Section() {
  return (
    <div className='section'>
      <div className='g7'>
        <Image filename='gyellow.png'/>
      </div>
      <div className='content-g89'>
        <div className='g8'>
          <Image filename='gorange.png'/>
        </div>
        <div className='g9'>
        <Image filename='gpink.png'/>
      </div>
      </div>
      <div className='fases-container'>
        <div className='fase-card'>
           <div style={{width: '150px'}}>
             <Image filename='brain.png' />
           </div>
          <div className='body-card'>
            <div className='title-card yellow'>
              BRIAN THE BRAIN
            </div>
            <div className='text-card '>

            <a href='https://coke.box.com/s/zapttx1fpvxafnxgknblptn52cqnrjpt' rel="noopener noreferrer" target='_blank' >
                <div className='download-button yellow'>
                    Ir a materiales
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='fase-card right'>
          {/* <div style={{width: '320px',opacity: '.1'}}>
            <Image filename='vision.png'/>
          </div> */}
          <div style={{width: '150px'}}>
             <Image filename='expert.png' />
           </div>
          <div className='body-card'>
            <div className='title-card orange'>
              CATEGORY EXPLORER
            </div>
            <div className='text-card'>
            <a href='https://coke.box.com/s/4r0l0hp0skjujfps3a5i5qgm1wf5x0nd' rel="noopener noreferrer" target='_blank' >
                <div className='download-button orange'>
                      Ir a materiales
                  </div>
              </a>
            </div>
          </div>
        </div>
        <div className='fase-card'>
           <div style={{width: '150px'}}>
             <Image filename='hand.png' />
           </div>
          <div className='body-card'>
            <div className='title-card kingblue'>
             CONSUMER EXPLORER         
            </div>
            <div className='text-card'>
            <a href='https://coke.box.com/s/41vdtt5zol4dt2ndjvj946lpkh47hgut' rel="noopener noreferrer" target='_blank' >
              <div className='download-button kingblue'>
                  Ir a materiales
              </div>
              </a>
            </div>
          </div>
        </div>
        <div className='fase-card right'>
          {/* <div style={{width: '320px',opacity: '.1'}}>
            <Image filename='vision.png'/>
          </div> */}
          <div >

          </div>
          <div style={{width: '150px'}}>
             <Image filename='winning.png' />
           </div>
          <div className='body-card'>
            <div className='title-card pink'>
                MOTA PACKS
            </div>
            <div className='text-card '>
              <a href='https://coke.box.com/s/gonqqlgra10glvr75dbbo1edjdwm9ehq' rel="noopener noreferrer" target='_blank' >
                <div className='download-button pink'>
                    Ir a materiales
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='fase-card'>
          {/* <div style={{width: '320px',opacity: '.1'}}>
            <Image filename='vision.png'/>
          </div> */}
          <div >

          </div>
          <div style={{width: '150px'}}>
             <Image filename='descargas.png' />
           </div>
          <div className='body-card'>
            <div className='title-card green'>
                PRESENTACIÓN FINAL
            </div>
            <div className='text-card '>
              <a href='https://coke.box.com/s/uphahwp88o2fzsqpvizcdqm5gcjr5vhr' rel="noopener noreferrer" target='_blank' >
                <div className='download-button green'>
                    Ir a materiales
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section

import React from 'react'
import cardLogo from "../../assets/card-logo.svg"
import "./Target.css"

export const TargetFront = () => {
  return (
    <div className='card card-front'>
      <div>
        <figure>
          <picture>
            <img src={cardLogo} alt="card-logo" />
          </picture>

          {/* <picture>
            <img src={imgFron} alt="card-front" />
          </picture> */}
          <span></span>
        </figure>

        <div className='container-input'>
          <input type="number" placeholder='0000 0000 0000 0000'/>
    
          <div>
            <input type="text" placeholder='JANE APPLESSED'/>
    
            <input type="text" placeholder='00/00'/>
          </div>
        </div>
      </div>
    </div>
  )
}

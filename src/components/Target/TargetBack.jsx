import React from 'react'
import "./Target.css"

export const TargetBack = ({first}) => {
  return (
    <div className='card card-back'>
      <div>
        <div className='container-input-back'>
          <input type="number" placeholder='000' readOnly value={first.cardCvc}/>
        </div>
      </div>
    </div>
  )
}

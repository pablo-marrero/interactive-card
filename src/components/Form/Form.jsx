import React from 'react'
import "./Form.css"

export const Form = () => {
  return (
    <div>
        <form className='form-register'>
            <label htmlFor="">
                cardmolder name
            </label>
            <input type="text" />
             
            <label htmlFor="">
                card number
            </label>
            <input type={'number'} />

            <label htmlFor="">
                exp.date(mm/yy)
            </label>
            <div>
                <input type={'number'} />
                <input type={'number'} />
            </div>

            <label htmlFor="">
                cvc
            </label>
            <input type={'number'} />
        
            <input type="submit" name='confirm' value="Confirm" />
        </form>
    </div>
  )
}

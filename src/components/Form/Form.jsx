import React from 'react'
// import { useForm } from '../../hooks/useForm'
import "./Form.css"

export const Form = ({setNumberCard}) => {

    const initialForm ={
        cardName:"",
        cardNumber:"",
        cardMounth:"",
        cardYear:"",
        cardCvc:""
    }

    // const { handelChange,handelBlur,handelClick } = useForm(initialForm)

    

  return (
    <div>
        <form className='form-register'>
            <label htmlFor="">
                cardmolder name
            </label>
            <input type="number" name='cardName'/>
             
            <label htmlFor="">
                card number
            </label>
            <input type={'number'} name="cardNumber"/>

            <div className='container-label'>
                <label htmlFor="">
                    exp.date(mm/yy)
                </label>
                <label htmlFor="">
                    cvc
                </label>
            </div>

            <div className='container-group-input'>
                <div>
                    <input type={'number'} name="cardMounth"/>
                    <input type={'number'} name="cardYear" />
                </div>

                <div>
                    <input type={'number'} name="cardCvc"/>
                </div>
            </div>
        
            <input type="submit" name='confirm' value="Confirm" />
        </form>
    </div>
  )
}

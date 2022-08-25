import React, { useState } from 'react'
import { Form } from '../../components/Form/Form'
import "./Main.css"
import {TargetFront} from "../../components/Target/TargetFront"
import {TargetBack} from "../../components/Target/TargetBack"

export const Main = () => {

  const initialState = {
    cardName:"",
    cardNumber:"",
    cardMounth:"",
    cardYear:"",
    cardCvc:""
  }

  const [numberCard, setNumberCard] = useState()

  return (
    <main>
        <section>
          <TargetFront setCardNumber={setNumberCard}/>
          <TargetBack setCardNumber={setNumberCard}/>
        </section>
        
        <section>
            <Form />
        </section>
    </main>
  )
}

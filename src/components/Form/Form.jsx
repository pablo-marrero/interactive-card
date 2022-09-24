import React, { useState } from "react";
import { ImageSend } from "../ImageSend/ImageSend";
import "./Form.css";
import {
  replaceCharacterLetter,
  replaceCharacterNumber,
  controlDate,
  sendFormTarget,
} from "./utilities/style-format-text";

export const Form = ({ changeValue, first }) => {

  const [erro, setErro] = useState(first)
  const [isSend, setIsSend ] = useState({send:null, error:""})

  const handelChangeTargerRegisterNumber = (e) => {
    let cardNumber = replaceCharacterLetter(e);
    setErro({
      ...erro,
      cardNumber
    })
    changeValue(e);
  };

  const handelChangeTargerRegisterName = (e) => {
    let cardName = replaceCharacterNumber(e);
    setErro({
      ...erro,
      cardName
    })
    changeValue(e);
  };

   const handelChangeTargerRegisterDate = (e) =>{
    let cardYear = controlDate(e)
    setErro({
      ...erro,
      cardYear
    })
    changeValue(e);
   }

   const sendRegisterTarget = (e)=>{
    e.preventDefault()

    // console.dir(e.target.cardName.value)
    sendFormTarget(e.target, setIsSend,erro)
   }

   

  return (
    <>{!isSend.send ?
      <form className="form-register" onSubmit={(e)=>sendRegisterTarget(e)}>
        <label htmlFor="cardName">cardmolder name</label>
        <input
          type="text"
          name="cardName"
          onChange={handelChangeTargerRegisterName}
          id="cardName"
        />
        {erro.cardName && <p>{erro.cardName}</p>}

        <label htmlFor="cardNumber">card number</label>
        <input
          type={"text"}
          name="cardNumber"
          onChange={handelChangeTargerRegisterNumber}
          maxLength={19}
          id="cardNumber"
        />
        {erro.cardNumber && <p>{erro.cardNumber}</p>}

        <div className="container-label">
          <label htmlFor="cardMounth">exp.date(mm/yy)</label>
          <label htmlFor="cardCvc">cvc</label>
        </div>

        <div className="container-group-input" onChange={handelChangeTargerRegisterDate}>
          <div>
            <input
              type={"text"}
              name="cardMounth"
              maxLength={2}
              id="cardMounth"
            />
            <input
              type={"text"}
              name="cardYear"
              maxLength={2}
              id="cardYear"
            />
          </div>
          <div>
            <input
              type={"text"}
              name="cardCvc"
              onChange={handelChangeTargerRegisterNumber}
              maxLength={3}
              id="cardCvc"
              />
          </div>
        </div>
          {erro.cardYear !== "00" && <p>{erro.cardYear}</p>}

        <input type="submit" name="confirm" value="Confirm"/>
        {isSend.error && <p>{isSend.error}</p>}
      </form>
      :
      <ImageSend title = "THANK YOU!"
        paragraph="We'eve added your card details"
      />
      }
    </>
  );
};

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
  const [isSend, setIsSend ] = useState(null)

  const handelChangeTargerRegisterNumber = (e) => {
    replaceCharacterLetter(e);
    changeValue(e);
  };

  const handelChangeTargerRegisterName = (e) => {
    replaceCharacterNumber(e);
    changeValue(e);
  };

   const handelChangeTargerRegisterDate = (e) =>{
    controlDate(e)
    changeValue(e);
   }

   const sendRegisterTarget = (e)=>{
    e.preventDefault()
    sendFormTarget(first, setIsSend)
   }

   

  return (
    <>{!isSend ?
      <form className="form-register" onSubmit={sendRegisterTarget}>
        <label htmlFor="">cardmolder name</label>
        <input
          type="text"
          name="cardName"
          onChange={handelChangeTargerRegisterName}
        />

        <label htmlFor="">card number</label>
        <input
          type={"text"}
          name="cardNumber"
          onChange={handelChangeTargerRegisterNumber}
          maxLength={19}
        />

        <div className="container-label">
          <label htmlFor="">exp.date(mm/yy)</label>
          <label htmlFor="">cvc</label>
        </div>

        <div className="container-group-input" onChange={handelChangeTargerRegisterDate}>
          <div>
            <input
              type={"text"}
              name="cardMounth"
              maxLength={2}
            />
            <input
              type={"text"}
              name="cardYear"
              maxLength={2}
            />
          </div>

          <div>
            <input
              type={"text"}
              name="cardCvc"
              onChange={handelChangeTargerRegisterNumber}
              maxLength={3}
            />
          </div>
        </div>

        <input type="submit" name="confirm" value="Confirm" />
      </form>
      :
      <ImageSend title = "THANK YOU!"
        paragraph="We'eve added your card details"
      />
      }
    </>
  );
};

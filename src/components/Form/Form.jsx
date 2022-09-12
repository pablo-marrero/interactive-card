import React from "react";
import "./Form.css";
import {
  replaceCharacterLetter,
  replaceCharacterNumber,
  styleFormatFormLength,
  controlDate,
} from "./utilities/style-format-text";

export const Form = ({ changeValue, first }) => {

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

  return (
    <div>
      <form className="form-register">
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

        <div className="container-group-input">
          <div>
            <input
              type={"text"}
              name="cardMounth"
              onChange={handelChangeTargerRegisterDate}
              maxLength={2}
            />
            <input
              type={"text"}
              name="cardYear"
              onChange={handelChangeTargerRegisterDate}
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
    </div>
  );
};

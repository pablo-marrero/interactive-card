import React from "react";
import "./Form.css";
import { styleFormatFormLength,replaceCharacter } from "./utilities/style-format-text";

export const Form = ({changeValue}) => {
  
  const handelChange = (e,num)=>{
    replaceCharacter(e)
    if(styleFormatFormLength(e, num)) {
      changeValue(e)
    }
  }
  const handelKeyUp = (e)=>{
    replaceCharacter(e)
  }

  async function handelBlur() {
   //Se va a usar para las validaciones
  }

  return (
    <div>
      <form className="form-register">
        <label htmlFor="">cardmolder name</label>
        <input
          type="text"
          name="cardName"
          onChange={handelChange}
          onBlur={handelBlur}
          onKeyUpCapture={(e)=>handelKeyUp(e)}
        />

        <label htmlFor="">card number</label>
        <input
          type={"text"}
          name="cardNumber"
          onChange={(e)=>handelChange(e,16)}
          onBlur={handelBlur}
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
              onChange={(e)=>handelChange(e,2)}
              onBlur={handelBlur}
            />
            <input
              type={"text"}
              name="cardYear"
              onChange={(e)=>handelChange(e,2)}
              onBlur={handelBlur}
            />
          </div>

          <div>
            <input
              type={"text"}
              name="cardCvc"
              onChange={(e)=>handelChange(e,3)}
              onBlur={handelBlur}
              on
            />
          </div>
        </div>

        <input type="submit" name="confirm" value="Confirm" />
      </form>
    </div>
  );
};

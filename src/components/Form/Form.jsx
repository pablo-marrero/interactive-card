import React, { useState } from "react";
import { sharingInformationService } from "../../Services/sharing-information-service";
// import { useForm } from "../../hooks/useForm";
import "./Form.css";



export const Form = () => {

  const initialForm = {
    cardName: "",
    cardNumber: "",
    cardMounth: "",
    cardYear: "",
    cardCvc: "",
  };
  
  const [form, setForm] = useState(initialForm);

  const handelChange = (e)=>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
      sendBetweenComponent({[e.target.name] : e.target.value})
  }

  async function handelBlur() {
   //Se va a usar para las validaciones
  }

  const sendBetweenComponent = (value)=>{
    sharingInformationService.setSubject(value)
  }

    

  return (
    <div>
      <form className="form-register">
        <label htmlFor="">cardmolder name</label>
        <input
          type="number"
          name="cardName"
          // value={form.cardName}
          onChange={handelChange}
          onBlur={handelBlur}
        />

        <label htmlFor="">card number</label>
        <input
          type={"number"}
          name="cardNumber"
          // value={form.cardNumber}
          onChange={handelChange}
          onBlur={handelBlur}
        />

        <div className="container-label">
          <label htmlFor="">exp.date(mm/yy)</label>
          <label htmlFor="">cvc</label>
        </div>

        <div className="container-group-input">
          <div>
            <input
              type={"number"}
              name="cardMounth"
              // value={form.cardMounth}
              onChange={handelChange}
              onBlur={handelBlur}
            />
            <input
              type={"number"}
              name="cardYear"
              // value={form.cardYear}
              onChange={handelChange}
              onBlur={handelBlur}
            />
          </div>

          <div>
            <input
              type={"number"}
              name="cardCvc"
              // value={form.cardCvc}
              onChange={handelChange}
              onBlur={handelBlur}
            />
          </div>
        </div>

        <input type="submit" name="confirm" value="Confirm" />
      </form>
    </div>
  );
};

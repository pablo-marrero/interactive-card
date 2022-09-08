import React, { useState ,useEffect } from "react";
import cardLogo from "../../assets/card-logo.svg";
import { sharingInformationService } from "../../Services/sharing-information-service";
import "./Target.css";
// import { useForm } from "../../hooks/useForm";

export const TargetFront = () => {

  const initialForm = {
    cardName: "",
    cardNumber: "",
    cardMounth: "",
    cardYear: "",
    cardCvc: "",
  };
  

  let subscribeData = sharingInformationService.getSubject()
  const [dataValue , setDataValue ] = useState(initialForm)

  useEffect(()=>{
    subscribeData.subscribe(data =>{
      // console.log(data)
      setDataValue({...dataValue,...data})
    })
  })

  return (
    <div className="card card-front">
      <div>
        {console.log(dataValue)}
        <figure>
          <picture>
            <img src={cardLogo} alt="card-logo" />
          </picture>

          {/* <picture>
            <img src={imgFron} alt="card-front" />
          </picture> */}
          <span></span>
        </figure>

        <p>{dataValue.cardNumber}</p>
        <div className="container-input">
          <p>{dataValue.cardName}, hola</p>
          {/* <input
            type="number"
            value={form.cardNumber}
            placeholder="0000 0000 0000 0000"
            onChange={handelChange}
          /> */}

          <div>
            <input type="text" placeholder="JANE APPLESSED" />

            <input type="text" placeholder="00/00" />
          </div>
        </div>
      </div>
    </div>
  );
};

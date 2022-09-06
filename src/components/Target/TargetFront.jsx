import React, { useEffect } from "react";
import cardLogo from "../../assets/card-logo.svg";
import "./Target.css";
import { useForm } from "../../hooks/useForm";

export const TargetFront = ({form}) => {

  return (
    <div className="card card-front">
      <div>
        <figure>
          <picture>
            <img src={cardLogo} alt="card-logo" />
          </picture>

          {/* <picture>
            <img src={imgFron} alt="card-front" />
          </picture> */}
          <span></span>
        </figure>

        <div className="container-input">
          {/* <p>{form.cardName}, hola</p> */}
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

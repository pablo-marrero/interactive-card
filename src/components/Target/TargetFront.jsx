import React from "react";
import cardLogo from "../../assets/card-logo.svg";
import "./Target.css";

export const TargetFront = ({first}) => {

  return (
    <div className="card card-front">
      <div>
        <figure>
          <picture>
            <img src={cardLogo} alt="card-logo" />
          </picture>

          <span></span>
        </figure>

        <div className="container-input">
          <input
            type="text"
            value={first.cardNumber}
            placeholder="0000 0000 0000 0000"
            readOnly
          />

          <div>
            <input type="text" placeholder="NAME SURNAME" value={first.cardName} readOnly/>

            <input type="text" value={`${first.cardMounth}/${first.cardYear}`} readOnly/>
          </div>
        </div>
      </div>
    </div>
  );
};

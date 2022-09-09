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
            type="number"
            value={first.cardNumber}
            placeholder="0000 0000 0000 0000"
            readOnly
          />

          <div>
            <input type="text" placeholder="JANE APPLESSED" value={first.cardName} readOnly/>

            <input type="text" placeholder="00/00" value={`${first.cardMounth}/${first.cardYear}`} readOnly/>
          </div>
        </div>
      </div>
    </div>
  );
};

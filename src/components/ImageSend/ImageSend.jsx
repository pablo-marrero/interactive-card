import React from 'react';
import imgLogo from "../../assets/icon-complete.svg"
import "./imagenSend.css" 


export const ImageSend = (props) => {
   
    const {title, paragraph} = props;
    return (
    <div className='container-imagen-send'>
        <picture>
            <img src={imgLogo} alt="imgLogoOk" />
        </picture>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <button>Continue</button>
    </div>);
}
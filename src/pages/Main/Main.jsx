import React, {useState} from "react";
import { Form } from "../../components/Form/Form";
import "./Main.css";
import { TargetFront } from "../../components/Target/TargetFront";
import { TargetBack } from "../../components/Target/TargetBack";

export const Main = () => {

  const initialForm = {
    cardName: "",
    cardNumber: "",
    cardMounth: "MM",
    cardYear: "YY",
    cardCvc: "",
  };

  const [first, setfirst] = useState(initialForm)

  const changeValue = (e)=>{
    setfirst({
      ...first,
      [e.target.name] : e.target.value
    })
  }

  return (


    <main>
      <section>
        <TargetFront first={first}/>
        <TargetBack first={first}/>
      </section>

      <section>
        <Form changeValue={changeValue}/>
      </section>
    </main>
  );
};

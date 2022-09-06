import React, {useState} from "react";
import { Form } from "../../components/Form/Form";
import "./Main.css";
import { TargetFront } from "../../components/Target/TargetFront";
import { TargetBack } from "../../components/Target/TargetBack";

export const Main = () => {

  
  const initialForm = {
    cardName: "",
    cardNumber: "",
    cardMounth: "",
    cardYear: "",
    cardCvc: "",
  };
  const [form, setForm] = useState(initialForm)

  console.log(form)
  return (
    <main>
      <section>
        <TargetFront form={form}/>
        <TargetBack form={form}/>
      </section>

      <section>
        <Form setForm={setForm}/>
      </section>
    </main>
  );
};

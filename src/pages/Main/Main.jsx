import React, {useState} from "react";
import { Form } from "../../components/Form/Form";
import "./Main.css";
import { TargetFront } from "../../components/Target/TargetFront";
import { TargetBack } from "../../components/Target/TargetBack";

export const Main = () => {

  return (
    <main>
      <section>
        <TargetFront />
        <TargetBack />
      </section>

      <section>
        <Form/>
      </section>
    </main>
  );
};

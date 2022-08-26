import React, { useState } from "react";

export const useForm = (validateForm) => {
  // let { cardName, cardNumber,cardMounth,cardYear,cardCvc } = objectValidate

  const initialForm = {
    cardName: "",
    cardNumber: "",
    cardMounth: "",
    cardYear: "",
    cardCvc: "",
  };

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorSend, setErrorSend] = useState(null);

  const handelChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
};

const handelBlur = (e) => {
    handelChange(e);
    setError(validateForm(form));
    setErrorSend({ msg: "" });
  };

  const handelClick = (e) => {
    e.preventDefault();
    if (Object.key(error).lenght !== 0) {
      setErrorSend({ msg: "Check error!" });
    } else {
      let formComplete =
        "Acá ponemos la imagen de que se cargo satifactoriamente la tarjeta";
    }
  };
  return {
    form,
    error,
    loading,
    errorSend,
    handelChange,
    handelBlur,
    handelClick,
  };
};

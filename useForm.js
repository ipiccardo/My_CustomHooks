import { useState } from "react";

//HOOK QUE SE UTILIZA PARA CAMBIAR EL ESTADO EN BASE A LO QUE SE COLOQUE EN UN FORMULARIO Y SE ACTIVE EL HANDLEINPUTCHANGE

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };
  return [values, handleInputChange, reset];
};

export default useForm;

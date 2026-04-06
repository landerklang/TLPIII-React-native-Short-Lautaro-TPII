import { useState } from "react";

export const useForm = (inicialValue) => {
  const [Form, setForm] = useState(inicialValue);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    console.log(value);
    setForm({ ...Form, [name]: type === "checkbox" ? checked : value });
  };
  const handleReset = () => {
    setForm(inicialValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleReset();
    console.log(Form);
  };

  const handleImag = (event) => {
    const file = event.target.files[0];
    handleChange({
      target: {
        name: "Icon",
        value: URL.createObjectURL(file),
      },
    });
  };
  return { Form, setForm, handleChange, handleReset, handleSubmit, handleImag };
};

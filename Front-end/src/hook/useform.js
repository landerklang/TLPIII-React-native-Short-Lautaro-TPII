import { useState } from "react";

export const useForm = (inicialValue) => {
  const [Form, setForm] = useState(inicialValue);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    setForm(inicialValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleReset();
  };
  const handleImag = (event) => {
    const file = event.target.files[0];
    if (!file) return; // si el usuario cancela el selector, no hacemos nada

    const reader = new FileReader();

    reader.onload = () => {
      setForm((prev) => ({ ...prev, Icon: reader.result }));
    };

    reader.readAsDataURL(file);
  };

  return { Form, setForm, handleChange, handleReset, handleSubmit, handleImag };
};

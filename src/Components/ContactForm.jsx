import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = "Nome é obrigatório!";
    if (!formData.email) errors.email = "E-mail é obrigatório!";
    if (!formData.phone) errors.phone = "Celular é obrigatório!";
    if (!formData.message) errors.message = "Mensagem é obrigatória!";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Formulário enviado com sucesso", formData);
      // Aqui você pode integrar com um serviço de envio de e-mail
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Mensagem enviada!");
    } else {
      alert("Preencha todos os campos corretamente.");
    }
  };

  return (
    <div className="contact-form">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Digite seu nome"
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite seu e-mail"
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Celular</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Digite seu celular"
          />
          {formErrors.phone && <p className="error">{formErrors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Digite sua mensagem"
          ></textarea>
          {formErrors.message && <p className="error">{formErrors.message}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;

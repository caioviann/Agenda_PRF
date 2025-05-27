import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    sector: '',
    voip: '',
    telefoneExterno: '',
    celular: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      sector: formData.sector,
      phone: [
        { number: formData.voip, type: "voip" },
        { number: formData.telefoneExterno, type: "telefone externo" },
        { number: formData.celular, type: "celular" }
      ]
    };

    try {
      const res = await fetch('http://localhost:8000/agenda/adicionar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert('Contato salvo com sucesso!');
        setFormData({
          name: '',
          sector: '',
          voip: '',
          telefoneExterno: '',
          celular: ''
        });
      } else {
        alert('Erro ao salvar contato.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro de rede.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicionar Contato</h2>
      <label>Nome: <input name="name" value={formData.name} onChange={handleChange} /></label><br />
      <label>Setor: <input name="sector" value={formData.sector} onChange={handleChange} /></label><br />
      <label>VOIP: <input name="voip" value={formData.voip} onChange={handleChange} /></label><br />
      <label>Telefone Externo: <input name="telefoneExterno" value={formData.telefoneExterno} onChange={handleChange} /></label><br />
      <label>Celular: <input name="celular" value={formData.celular} onChange={handleChange} /></label><br />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ContactForm;
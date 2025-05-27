import React, { useState } from 'react';
import PhoneTable from '../PhoneTable';
import useContact from '../../hooks/useContact';
import './SearchInput.css';

export default function SearchInput() {

  const[search, setSearch] = useState('');
  const contactData = useContact();
  const { data = [], loading, error } = contactData || {};

  const filterData = Array.isArray(data) ? data.filter(contact => {
    const text = search.toLowerCase();
    return(
      contact.sector?.toLowerCase().includes(text) || 
      contact.name?.toLowerCase().includes(text) || 
      contact.voip?.toLowerCase().includes(text) || 
      contact.phone?.toLowerCase().includes(text) ||
      contact.celular?.toLowerCase().includes(text)
    );
  }) : [];

  if(loading) return <p>Carregando contatos...</p>;
  if(error) return <p>Erroaaa: {error.message}</p>;

  return (
    <div style={{ margin: '1em 0' }}>
      <input
        id="input-busca"
        type="text"
        placeholder="Buscar contato..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PhoneTable data={filterData}/>
    </div>
  );
}


// TERA NAS PROXIMAS VERSOES!!!!!!!
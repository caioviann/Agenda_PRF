import React from 'react';
import './Header.css'

export default function Header() {
  return (
    <header className="main-header">
      <nav className="navbar">
          <img width="95" src='/img/download.png'></img>
        <span className="nome-sistema">Agenda Telefônica</span>
      </nav>
    </header>
  );
}
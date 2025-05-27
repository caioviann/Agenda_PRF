import Header from './components/Header';
import PhoneTable from './components/PhoneTable';
import Footer from './components/Footer';
import SearchInput from './components/SearchInput/index.jsx';
import fakeData from './data/FakeData';
import ContactForm from './components/ContactForm/index.jsx';
import './App.css';
import { useState } from 'react';


function App() {


  return (
    <div className="app-container">
      <Header/>
        <main>
          <div className="img-principal">
            <img src="./img/prf-brasao.png" alt='' className='imagem'/>
            <div className='title'>
                <h1>Agenda - SPRF-SC</h1>
                <p>Sistema informativo sobre contatos da<br/>Superitendência Regional De Santa Catarina</p>
            </div>
          </div>
          <SearchInput/>
          <ContactForm/>
        </main>
        <Footer/>
    </div>
  );
}

export default App;

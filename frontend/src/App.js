import React from 'react';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <button onClick={ openMenu }> &#9776; </button>
            <a href='index.html'> El Campo de Olmo </a>
          </div>
          <div className='header-links'>
            <a href='signin.html'> USUARIO </a>
            <a href='cart.html'> CESTA </a>
          </div>
        </header>

        <aside className='sidebar'>
          <h3> CATEGORIAS </h3>
          <button className='sidebar-close-button' onClick={ closeMenu }> x </button>
          <ul>
            <li>
              <a href='index.html'> CESTAS </a>
            </li>
            <li>
              <a href='index.html'> FRUTAS </a>
            </li>
            <li>
              <a href='index.html'> HORTALIZAS </a>
            </li>
            <li>
              <a href='index.html'> LEGUMBRES </a>
            </li>
            <li>
              <a href='index.html'> PROCESADOS </a>
            </li>
          </ul>
        </aside>

        <main className='main'>
          <div className='content'>
            <Route path='/' exact={true} component={ HomeScreen } />
            <Route path='/product/:id' component={ ProductScreen } />
          </div>
        </main>

        <footer className='footer'>
          Copyright © 2020 El Campo de Olmo. Diseñado por Jara S.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

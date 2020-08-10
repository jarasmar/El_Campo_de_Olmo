import React from 'react';
import './App.css';

function App() {
  
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <div className='grid-container'>
      <header className='header'>
        <div className='brand'>
          <button onClick={openMenu}> &#9776; </button>
          <a href='index.html'> El Campo de Olmo </a>
        </div>
        <div className='header-links'>
          <a href='signin.html'> USUARIO </a>
          <a href='cart.html'> CESTA </a>
        </div>
      </header>

      <aside className='sidebar'>
        <h3> CATEGORIAS </h3>
        <button className='sidebar-close-button' onClick={closeMenu}> x </button>
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
          <ul className='products'>
            <li>
              <div className='product'>
                <img className='product-image' src='/images/tomato.jpg' alt='product' />
                <div className='product-name'> 
                  <a href='product.html'> TOMATES (KG) </a>
                </div>
                <div className='product-rating'> 4.5 Stars (10 Reviews) </div>
                <div className='product-price'> 4€ </div>
              </div>
            </li>
          </ul>
        </div>
      </main>

      <footer className='footer'>
        Copyright © 2020 El Campo de Olmo. Diseñado por Jara S.
      </footer>
    </div>
  );
}

export default App;

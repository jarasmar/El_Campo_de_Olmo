import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {

    return () => {
      //  
    }; 
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return <div className='form'>
    <form onSubmit={ submitHandler }>
      <ul className='form-container'>
        <li>
          <h2> INICIAR SESIÓN </h2>
        </li>
        <li>
          <label for='email'> EMAIL </label>
          <input type='email' name='email' id='email' onChange={ (e) => setEmail(e.target.value)}></input>
        </li>
        <li>
          <label for='password'> CONTRASEÑA </label>
          <input type='password' namde='password' id='password' onChange={ (e) => setPassword(e.target.value)}></input>
        </li>
        <li>
          <button type='submit' className='btn-form'>INICIAR SESIÓN</button>
        </li>
        <div id='form-footer'>
          <li>
            ¿Primera vez en El Campo de Olmo?
          </li>
          <li>
            <Link to='/register' className='link-register'>CREA UNA CUENTA</Link>
          </li>
        </div>
      </ul>
    </form> 
  </div>
}

export default SigninScreen;
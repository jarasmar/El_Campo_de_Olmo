import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';


function SigninScreen(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin; 
  const dispatch = useDispatch();

  // This runs when userInfo changes
  useEffect(() => {
    if (userInfo) {
      props.history.push('/');
    }
    return () => {
      //  
    }; 
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

  return <div className='form'>
    <form onSubmit={ submitHandler }>
      <ul className='form-container'>
        <li>
          <h2> INICIAR SESIÓN </h2>
        </li>
        <li>
          { loading && <div> Loading... </div> }
          { error && <div> { error } </div> }
        </li>
        <li>
          <label htmlFor='email'> EMAIL </label>
          <input type='email' name='email' id='email' onChange={ (e) => setEmail(e.target.value)}></input>
        </li>
        <li>
          <label htmlFor='password'> CONTRASEÑA </label>
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
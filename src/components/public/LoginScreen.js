import React from "react";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../../actions/authActions";
import { useForm } from "../../hooks/useForm";
import "./login.css";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formLoginValues, handleLoginInputChanges] = useForm({
    lEmail: '',
    lPassword: '',
  });
  const [formRegisterValues, handleRegisterInputChanges] = useForm({
    rNick: '',
    rName: '',
    rSurname: '',
    rEmail: '',
    rPassword: ''
  });

  const { lEmail, lPassword } = formLoginValues;
  const { rNick, rName, rSurname, rEmail, rPassword } = formRegisterValues;
  
  const handleSumitLogin = ( e ) => {
    e.preventDefault();
    dispatch( loginAction( lEmail, lPassword) );
    console.log( e );
  }
  
  const handleSumiRegister = ( e ) => {
    e.preventDefault();
    dispatch( registerAction( rNick, rName, rSurname, rEmail, rPassword) );
  }
  
  return (
    <>
      <div className="login">
        <h1>Login to CV APP</h1>
        <form onSubmit={ handleSumitLogin } >
          <p>
            <input
              type="text"
              name="lEmail"
              autoComplete="off"
              value={lEmail}
              onChange={handleLoginInputChanges}
              placeholder="Repita la contraseña"
            />
          </p>
          <p>
            <input
              type="password"
              name="lPassword"
              autoComplete="off"
              value={lPassword}
              onChange={handleLoginInputChanges}
              placeholder="Repita la contraseña"
            />
          </p>
          <p className="submit">
            <input 
              type="submit"
              value="Login" 
            />
          </p>
        </form>
      </div>
      <div className="login">
        <h1>Register to CV APP</h1>
        <form onSubmit={ handleSumiRegister } >
          <p>
            <input
              autoComplete="off"
              type="text"
              name="rNick"
              value={ rNick }
              onChange={ handleRegisterInputChanges }
              placeholder="Enter your nick name"
            />
          </p>
          <p>
            <input
              autoComplete="off"
              type="text"
              name="rName"
              value={ rName }
              onChange={ handleRegisterInputChanges }
              placeholder="Enter your name"
            />
          </p>
          <p>
            <input
              autoComplete="off"
              type="text"
              name="rSurname"
              value={ rSurname }
              onChange={ handleRegisterInputChanges }
              placeholder="Enter your surname"
            />
          </p>
          <p>
            <input
              autoComplete="off"
              type="text"
              name="rEmail"
              value={ rEmail }
              onChange={ handleRegisterInputChanges }
              placeholder="Enter your Email"
            />
          </p>
          <p>
            <input
              autoComplete="off"
              type="password"
              name="rPassword"
              value={ rPassword }
              onChange={ handleRegisterInputChanges }
              placeholder="Enter your Password"
            />
          </p>
          <p className="submit">
            <input 
              type="submit"
              value="Login" 
            />
          </p>
        </form>
      </div>
    </>
  );
};

import React, { useState } from 'react';
import stussy_img from './assets/stussy-1-logo-svg-vector.svg'
import './App.css'

function App() {

    const [email, setEmail]= useState("")

    const [password, setPassword]= useState("")

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
              <span className="login-form-title">
                Bem-vindo!
              </span>
              <span className="login-form-title">
                <img src={stussy_img} alt="" />
              </span>

              <div className="wrap-input">
                <input 
                className={email !== "" ? 'has-val input' : 'input'} 
                type="email"
                required
                value={email}
                onChange={ e => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>

              <div className="wrap-input">
                <input 
                className={password !== "" ? 'has-val input' : 'input'} 
                type="password"
                required
                value={password}
                onChange={ e => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Senha"></span>
              </div>

              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>

              <div className="text-center">
                <span className="text1">Não possui conta?</span>
                <a href="#" className="text2">Criar conta</a>
              </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

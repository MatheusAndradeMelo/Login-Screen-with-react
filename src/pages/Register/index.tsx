import React, { useState } from 'react';
import { Layout } from '../../components/layout';
import stussy_img from '../../assets/stussy-1-logo-svg-vector.svg'
import { Link } from 'react-router-dom';
import './styles.css'

export const Register = () => {

    const [name, setName]= useState("")

    const [email, setEmail]= useState("")

    const [password, setPassword]= useState("")


    return (
        <Layout>
            <form className="login-form">
              <span className="login-form-title">
                Cadastro
              </span>
              <span className="login-form-title">
                <img src={stussy_img} alt="" />
              </span>

              <div className="wrap-input">
                <input 
                className={name !== "" ? 'has-val input' : 'input'} 
                type="email"
                required
                value={name}
                onChange={ e => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Nome"></span>
              </div>

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
                <button className="login-form-btn">Salvar</button>
              </div>

              <div className="text-center">
                <span className="text1">Já possui conta?</span>
                <Link className="text2" to={'/login'}>Acessar com Email e Senha</Link>
              </div>

          </form>
        </Layout>
    )
}
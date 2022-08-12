import styles from './Register.module.css'

import { useState, useEfect } from 'react'

import avatarCadaster from './avatarCadaster.png'

const Register = () => {
  return (
    <div className={styles.cadastro}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <div className={styles.form}>
        <form>
          <label>
            <span>Nome</span>
            <input
              type="text"
              name="displayName"
              required
              placeholder="Nome do usuário"
            />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required placeholder="E-mail" />
          </label>
          <label>
            <span>Senha</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Senha"
            />
          </label>
          <label>
            <span>Senha</span>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirme sua senha"
            />
          </label>
          <button className="btn">Cadastrar</button>
        </form>
        <div>
          <img src={avatarCadaster} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register

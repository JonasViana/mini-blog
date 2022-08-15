import styles from './Register.module.css'

import { useState, useEfect, useEffect } from 'react'

import avatarCadaster from './avatarCadaster.png'
import { useAuthentication } from '../../hooks/useAuthentication'

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async e => {
    e.preventDefault()

    setError('')

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError('As senhas não são iguais !')
      return
    }

    const res = await createUser(user)

    console.log(user)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.cadastro}>
      <h1>Cadastre-se para postar</h1>

      <p>Crie seu usuário e compartilhe suas histórias</p>
      <div className={styles.form}>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input
              type="text"
              name="displayName"
              required
              placeholder="Nome do usuário"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>Senha</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <label>
            <span>Senha</span>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </label>
          {!loading && <button className="btn">Cadastrar</button>}
          {loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {error && <p className={styles.error}>{error}</p>}
        </form>
        <div>
          <img src={avatarCadaster} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Register

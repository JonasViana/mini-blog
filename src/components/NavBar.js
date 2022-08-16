import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

import { useAuthentication } from '../hooks/useAuthentication'

import { useAuthValue } from '../context/AuthContext'

const NavBar = () => {
  const { user } = useAuthValue()

  const {logout} = useAuthentication()
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span> Blog </span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          {!user && (
            <>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Cadastro
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Login
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink
                to="/post/create"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Criar Post
              </NavLink>

              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? styles.active : '')}
              >
                Dashboard
              </NavLink>
            </>
          )}
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : '')}
          >
            About
          </NavLink>
        </li>
        {user &&(
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar

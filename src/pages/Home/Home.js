// CSS
import styles from './Home.module.css'

//hooks

import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import PostDetail from '../../components/PostDetails'

// components

const Home = () => {
  const [query, setQuery] = useState('')
  const { documents: posts, loading } = useFetchDocuments('posts')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
      <h1>Veja nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags"
          onChange={e => {
            setQuery(e.target.value)
          }}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div className={styles.post}>
        {loading && <p>Carregando...</p>}
        {posts && posts.map(post => <PostDetail key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>
              Não foram encontrados posts
              <Link to={'/post/create'} className={styles.button}>
                Criar primeiro post
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

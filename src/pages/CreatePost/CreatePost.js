import styles from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocuments'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState('')

  const { user } = useAuthValue()

  const navigate = useNavigate()

  const { insertDocument, response } = useInsertDocument('posts')

  const handleSubmit = e => {
    e.preventDefault()
    setFormError('')

    // validate image
    try {
      new URL(image)
    } catch (error) {
      setFormError('A imagem precisa ser uma URL.')
    }

    // create tags array
    const tagsArray = tags.split(',').map(tag => tag.trim().toLowerCase())

    // check values
    if (!title || !image || !tags || !body) {
      setFormError('Por favor, preencha todos os campos!')
    }

    console.log(tagsArray)

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    if (formError) return

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    })

    //redirect home page

    navigate('/')
  }
  return (
    <div className={styles.post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo</span>
          <input
            type="text"
            name="tittle"
            required
            placeholder="Titulo..."
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>Url da imagem</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem"
            onChange={e => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conte??do</span>
          <textarea
            name="body"
            required
            placeholder="Conte??do do post"
            onChange={e => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags</span>
          <input
            type="text"
            name="tag"
            required
            placeholder="Insira tags separados por virgula"
            onChange={e => setTags(e.target.value)}
            value={tags}
          />
        </label>
        {!response.loading && <button className="btn">Postar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className={styles.error}>{response.error}</p>}
        {formError && <p className={styles.error}>{formError}</p>}
      </form>
    </div>
  )
}

export default CreatePost

import { Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import amouo from '../images/amouo.jpeg'
import { ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState, useEffect } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;

}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    console.log('delete')
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={amouo} />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Frederico Silva</strong>
              <time title="12 de Agosto" dateTime="2022-08-12 08:08:08">
                Cerca de 30 minutos atrás
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar os comentarios"
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

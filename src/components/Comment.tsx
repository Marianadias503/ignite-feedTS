import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    ondeleteComment: (comment: string)=> void;
}
export function Comment ({content, ondeleteComment}:CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handeDeleteComment (){
        ondeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }
    return(
        <div className={styles.Comment}>

            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/126686223?v=4" alt="" />

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Mariana Dias</strong>
                                <time title="6 de maio às 12:24" dateTime="2024-05-06 12:24">Cerca de 1h atràs</time>
                            </div>

                            <button onClick={handeDeleteComment} title="Deletar comentário">
                                <Trash size={24}/>
                            </button>
                        </header>
                        <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                    </button>
                  Aplaudir <span>{likeCount}</span>
                </footer>
             </div>
        </div>
    )
}
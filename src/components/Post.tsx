import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name:string;
    role:string;
    avatarUrl:string;

}

interface Post{
    author: Author;
    publisheadAt: Date;
    content: Content[]
}
interface PostProps{
 post: Post
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}



export function Post({ post } :PostProps) {
    const [comments, setComments] = useState([
       'post muito bacana' 
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    const publisheadDateFormatted = format(post.publisheadAt, "d 'de' LLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publisheadDateRelativeToNow = formatDistanceToNow(post.publisheadAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');

    }

    function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        if(handleNewCommentChange === ' '){
            event.target.setCustomValidity('Esse campo é obrigatório!');
        } else {
            handleNewCommentChange.value;
        }
     
    }

    function deleteComment(commentToDelete:string){
        const commentsWithoutDeleteOne = comments.filter(comment=>{
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);

    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publisheadDateFormatted} dateTime={publisheadAt.toISOString()}>
                    {publisheadDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                }))}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button className={styles.submit} type="submit" disabled={newCommentText.length===0}  >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment => (
                    <Comment key={comment} content={comment} ondeleteComment={deleteComment} />
                )))}
            </div>
        </article>
    );
}

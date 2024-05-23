import { Header } from "./components/Header" ;
import {Post} from './components/Post';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

 
 const posts = [
  
  {
    id:1,
    author:{
     avatarUrl:'https://github.com/marianadias503.png',
     name: 'Mariana Dias',
     role: 'Front End Developer'

    },
    content: [
      {type:'paragraph', content: ' Fala galeraa 👋', },
  
      {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
 
      {type:'link', content: 'jane.design/doctorcare'},

    ],

    publisheadAt: new Date ('2024-05-08 09:00:00'),

  },
  {
    id:2,
    author:{
     avatarUrl:'https://github.com/diego3g.png',
     name: 'Diego Fernandes',
     role: 'CTO @Rocketseat'

    },
    content: [
      {type:'paragraph', content: ' Fala galeraa 👋', },
  
      {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
 
      {type:'link', content: 'jane.design/doctorcare'},

    ],

    publisheadAt: new Date ('2024-05-10 09:00:00'),

  },
 ];






function App() {
  

  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>
        
        <main>
   
        {posts.map(post =>{
          return (
           <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publisheadAt={post.publisheadAt}
          
          
          />)

        })}       


        </main>
      </div>



    </div>
  
  )
}

export default App

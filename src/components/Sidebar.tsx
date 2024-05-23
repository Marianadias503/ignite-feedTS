import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine}from 'phosphor-react';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1587620931276-d97f425f62b9?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
            />
            <div className={styles.profile}>
                <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/126686223?v=4"/>
                <strong>Mariana Dias</strong>
                <span>Web developer</span>
            </div>

            <footer>
          
                <a href="#">
                <PencilLine  size={20}/>
                Editar seu perfil </a>
            </footer>
        </aside>

    );
}
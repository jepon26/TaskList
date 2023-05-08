import React from 'react';
import '../CSS/Todos.css';
import {AiTwotoneDelete} from 'react-icons/ai';


function Todos({text, completed}){
    return (
      <div className={completed ? 'todo-container completed' : 'todo-container' }>
        <div className='todo-text'>
            {text}
        </div>
        <div className='todo-container-icons'>
            <AiTwotoneDelete className='todo-icon'/>
        </div>
      </div>
    );
}


export default Todos;

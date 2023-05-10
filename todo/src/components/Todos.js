import React from 'react';
import '../CSS/Todos.css';
import {AiTwotoneDelete} from 'react-icons/ai';


function Todos({id, text, completed, completeTodos, deleteTodos}){
    return (
      <div className={completed ? 'todo-container completed' : 'todo-container' }>
        <div className='todo-text'
        onClick={() => completeTodos(id)}>
          
            {text}
        </div>
        <div className='todo-container-icons'
        onClick={() => deleteTodos(id)}>
            <AiTwotoneDelete className='todo-icon'/>
        </div>
      </div>
    );
}


export default Todos;

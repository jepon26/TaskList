import React from 'react';
import '../CSS/Todo.css';
import {AiTwotoneDelete} from 'react-icons/ai';


function Todo({id, text, completed, completeTodo, deleteTodo}){
    return (
      <div className={completed ? 'todo-container completed' : 'todo-container' }>
        <div className='todo-text'
        onClick={() => completeTodo(id)}>
            {text}
        </div>
        <div className='todo-container-icons'
        onClick={() => deleteTodo(id)}>
            <AiTwotoneDelete className='todo-icon'/>
        </div>
      </div>
    );
}


export default Todo;

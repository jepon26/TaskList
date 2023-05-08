import React from 'react'
import '../CSS/Todos.css'


function Todos({text}){
    return (
      <div className='todo-container'>
        <div className='todo-text'>
            {text}
        </div>
        <div className='todo-icon'>
            Delete
        </div>
      </div>
    );
}


export default Todos;

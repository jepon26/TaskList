import React, {useState} from 'react';
import Todoform from './Todoform';
import '../CSS/Todolist.css'


function Todolist(){


    const[Todos, setTodos] = useState([]);

    return (
        <>
         <Todoform/>
         <div className='todo-list-container'>
              {
                Todos.map((Todos) => 
                <Todos 
                text={Todos.text}
                completed={Todos.completed}
                />
                )
              }
         </div>
        </>
    )

}




export default Todolist;
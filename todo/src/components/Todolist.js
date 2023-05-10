import React, {useState} from 'react';
import Todoform from './Todoform';
import '../CSS/Todolist.css';
import Todos from './Todos'


function Todolist(){


    const[Todos, setTodos] = useState([]);


    const addTodo = Todos => {
      if(Todos.text.trim()){
        Todos.text = Todos.text.trim();

        const UpdatedTodos = [Todos, ...Todos];
        setTodos(UpdatedTodos6);
      }
    }

    return (
        <>
         <Todoform onSubmit={addTodo}/>
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
import React, {useState} from 'react';
import Todoform from './Todoform';
import '../CSS/Todolist.css';
import Todos from './Todos'


function Todolist(){
    const[todos, setTodos] = useState([]);


    const addTodo   = newTodos => {
      if(newTodos.text.trim()){
        newTodos.text = newTodos.text.trim();
        const updatedTodos = [newTodos, ...todos];
        setTodos(updatedTodos);
      }
    }


    const deleteTodo = id => {
      const updatedTodos = todos.filter(todo =>  todo.id !== id);
      setTodos(updatedTodos)
    }


    const completeTodo = id => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.completed =  !todo.completed ;
        }
        return todo;
      });
      setTodos(updatedTodos);
    };




    return (
        <>
         <Todoform onSubmit={addTodo} />
      <div className="todo-list-container">
        {todos.map(todo => (
          <Todos
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}




export default Todolist;
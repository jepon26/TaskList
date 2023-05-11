import React, {useState} from 'react';
import '../CSS/Todoform.css';
import {v4 as uuidv4} from 'uuid'

function Todoform (props){

     const [input, setInput] =  useState('')


     const handleChange = e => {
        setInput(e.target.value);
     }


    const handleSubmit = e => {
        e.preventDefault();
        

        
        const newTodos ={
            id: uuidv4(),
            text: input,
            completed: false
        }

props.onSubmit(newTodos);
        
    }


    return(
        <form className='todo-form'
        onSubmit={handleSubmit}
        >
            <input className='todo-input' type='text' placeholder='write a todo' name='text'
            onChange={handleChange}
            />
            <button className='todo-button'>Add todo</button>
        </form>

    );
}





export default Todoform;
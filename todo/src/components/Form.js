import React from 'react';
import '../CSS/Form.css';

function Form (props){
    return(
        <form className='todo-form'>
            <input className='todo-input' type='text' placeholder='write a todo' name='text'/>
            <button className='todo-button'>Add todo</button>
        </form>

    )
}





export default Form;
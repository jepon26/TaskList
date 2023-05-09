import logo from './img//todologo.png';
import './App.css';
import Form from './components/Form.js';

function App() {
  return (
    <div className='todo-app'>
     <div className='todo-logo-container'>
        <img src={logo} className="todo-logo" alt="logo" />
        </div>
         <div className='main-todo-list'>
          <h1>My ToDos</h1>
          <Form/>
         </div>
    </div>
  );
}

export default App;

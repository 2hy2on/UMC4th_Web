import './App.css';
import React, {useState} from 'react';
import TodoBoard from './component/TodoBoard';
function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  const addItem=()=>{
    setTodoList([...todoList, inputValue])
  }

  return (
    <div className="App">
      <input value={inputValue} type='text' onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList}/>
    </div>
  );
}

export default App;

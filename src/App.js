import './App.css';
import React, { useState } from 'react';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';
function App() {

  const[listToDo, setListToDo] = useState([]);

  let addList = (inputText) => {
    if(inputText!=='')
    setListToDo([...listToDo, inputText])
  }

  const deleteListItem = (key) => {
    let newListTodo = [...listToDo];
    newListTodo.splice(key,1)
    setListToDo([...newListTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <Todoinput addList={addList}/>
        <h1 className='app-heading'>TODO</h1>
        <hr/>
        {listToDo.map((listItem,i) => {
          return(
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;

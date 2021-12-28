import React, {useEffect, useState} from 'react';
import TodoItem from './components/todoItem/TodoItem';
import Header from './components/header/Header';
import { getDataFromApi } from './hooks/api';



function App() {

  const [todos, setTodos] = useState([])
  const [lists, setLists] = useState([])

  useEffect(() => {
    const getData = async () => {

      const todosData = await getDataFromApi('todos')
      const listsData = await getDataFromApi('lists')
      setTodos(todosData.docs.map((doc) => ({...doc.data(), id: doc.id})))
      setLists(listsData.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getData()
  }, [])


  return (
    <div className="app">
    <Header lists={lists}/>
    <div className="container">

    {todos.map(todo => <TodoItem key={todo.id} title={todo.title} />)}

    </div>
    </div>
  );
}

export default App;

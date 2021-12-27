import React, {useEffect, useState} from 'react';
import {db} from './firebase';
import { collection, doc, getDocs } from "firebase/firestore";


function App() {
  const [todos, setTodos] = useState([])

  const todosCollectioRef = collection(db, 'todos')

  useEffect(() => {
    const getTodos = async () => {

      const todosData = await getDocs(todosCollectioRef);
      console.log(todosData);
      setTodos(todosData.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getTodos()
  }, [])


  return (
    <div className="App">
      {todos.map(todo => <h2 key={todo.id}>{todo.title}</h2>)}
    </div>
  );
}

export default App;

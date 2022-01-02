import React, {useEffect, useState} from 'react';
import Header from './components/header/Header';
import { getDataFromApi } from './hooks/api';
import { useRoutes } from './routes';

import DBContext from './context/db';



function App() {


  const [todos, setTodos] = useState([])
  const [lists, setLists] = useState([])

  const routes = useRoutes()

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
    <DBContext.Provider value={{todos, lists}}>
      <div className="app">
      <Header lists={lists}/>
      <div className="container">
        {routes}
      </div>
      </div>
    </DBContext.Provider>
  );
}

export default App;

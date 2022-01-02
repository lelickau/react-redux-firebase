import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import TodoItem from '../components/todoItem/TodoItem';
import TodoForm from '../components/todoForm/TodoForm';
import db from '../context/db';

import './todoList.scss';
import { addNew, getDataFromId,deleteTodo } from '../hooks/api';


const TodoList = () => {
    const [todos, setTodos] = useState([])
    const params = useParams();
    const DBContext = useContext(db);

    const updateData = async () => {
        const todosData = await getDataFromId('todos', params.listId);

        setTodos(todosData)
    }

    useEffect(() => {
        updateData()

    }, [params, updateData]);

    const list = DBContext.lists.find(list => list.id === params.listId)

    const handleSubmit = async (title) => {
        addNew('todos', {
            title,
            listId: list.id
        })
        updateData()
    }

    const handleDelete = async (todoId) => {
        deleteTodo('todos', todoId)
        updateData()
    }

    return (
        <div className="todo-list">
            {todos.map(todo => <TodoItem key={todo.id} title={todo.title} onDelete={handleDelete} todoId={todo.id} />)}

            <div className="todo-list__add">
                <TodoForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default TodoList;
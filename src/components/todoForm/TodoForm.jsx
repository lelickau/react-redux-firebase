import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './todoForm.scss'

const TodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(title)
        setTitle('')
    }
    const changeHandler = (e) => {
        e.preventDefault();
        setTitle(e.target.value)
    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-form__input" type="text"
            name="title"
            valie={title}
            onChange={changeHandler}
            placeholder='Добавить задачу...' />
            <button className="todo-form__btn"><FontAwesomeIcon icon="plus"></FontAwesomeIcon></button>
        </form>
    );
};

export default TodoForm;
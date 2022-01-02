import React from 'react';

import './todoItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoItem = ({title, onDelete, todoId}) => {
    const deleteTodo = () => {
        onDelete(todoId)
    }
    return (
        <article className='todo'>
        <div className="todo__content">
            <input type="checkbox" />
            <h2 className='todo__title'>{title}</h2>
        </div>
            <button
                className="todo__delete"
                onClick={deleteTodo}
            ><FontAwesomeIcon icon="trash-alt"></FontAwesomeIcon></button>
        </article>
    );
};

export default TodoItem;
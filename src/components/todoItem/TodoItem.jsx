import React from 'react';

import './todoItem.scss';

const TodoItem = ({title}) => {
    return (
        <article className='todo'>
            <h2 className='todo__title'>{title}</h2>
        </article>
    );
};

export default TodoItem;
import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({lists}) => {
    return (
        <header className='header'>
            <div className="header__logo">React Todo</div>
            <nav className="header__menu">
                <ul className="header__list">
                    {
                        [
                            {title: "Задачи", icoName: "tasks", to: '/', exact: true},
                            {title: "Важно", icoName: "star", to: '/important'},
                            {title: "Планы", icoName: "calendar-day", to: '/events'}
                        ].map(list => <li key={list.icoName} exact={list.exact} component={NavLink} to={list.to} className='header__item'>
                    <div className="header__ico-box">
                        <FontAwesomeIcon icon={list.icoName} className='header__ico' />
                    </div>
                    <span className='header__item-title' key={list.id}>{list.title}</span></li>)
                    }

                    <li className="header__line"></li>
                    {lists.map(list => <li component={NavLink} to={list.id} className='header__item'>
                    <div className="header__ico-box">
                        <FontAwesomeIcon icon={list.icoName} className='header__ico' />
                    </div>
                    <span className='header__item-title' key={list.id}>{list.title}</span></li>)}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
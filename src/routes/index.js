import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import TodoList from '../pages/TodoList';

export const useRoutes = () => {

        return (
            <Switch>
                <Route path="/:listId" exact>
                    <TodoList/>
                </Route>
                <Redirect to="/" />
            </Switch>
        )

}
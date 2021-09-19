import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ol  className="list-group">
            {
                todos.map((todo, i) => {
                    return <TodoListItem key={ todo.id } todo={ todo } index={ i } handleDelete={ handleDelete } handleToggle={ handleToggle }/>
                })
            }     
        </ol>
    )
}

import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Learn React',
    //     done: false
    // }];

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ desc }, handleInputChange, reset] = useForm({
        desc: ''
    });

    // Save localstorage todos
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    // handle Delete
    const handleDelete = (todoId) => {        
        // Action
        const action = {
            type: 'delete',
            payload: todoId
        };

        // Dispatch
        dispatch(action);
    }

    // Change toggle
    const handleToggle = (todoId) => {
        // Action
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (desc.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: desc,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
        reset();
    }

    return (
        <div>
            <h1>Todo App ({ todos.length })</h1>
            <hr/>

            <div className="row">
                <div className="col-6">
                    <ol  className="list-group">
                        {
                            todos.map((todo, i) => {
                                return <li className="list-group-item" key={ todo.id }>
                                    <p className={ `${ todo.done && 'complete' }` } onClick={ () => handleToggle(todo.id) }>{ i + 1 }. { todo.desc }</p>
                                    <button className="btn btn-danger" onClick={ () => handleDelete(todo.id) }>Borrar</button>
                                </li>
                            })
                        }     
                    </ol>
                </div>

                <div className="col-6">
                    <h4>Agregar</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit }>
                        <input type="text" className="form-control" name="desc" placeholder="Aprender..." autoComplete="off" value={ desc } onChange={ handleInputChange } />
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-outline-primary btn-block mt-1">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

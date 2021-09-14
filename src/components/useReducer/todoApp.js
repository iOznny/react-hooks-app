import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);
    console.log(todos);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'New homework',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch(action);
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
                                <li className="list-group-item" key={ todo.id }>
                                    <p className="text-center">{ i + 1 }. { todo.desc }</p>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            })
                        }     
                    </ol>
                </div>

                <div className="col-6">
                    <h4>Agregar</h4>
                    <hr/>

                    <form onSubmit={ handleSubmit }>
                        <input type="text" className="form-control" name="desc" placeholder="Aprender..." autoComplete="off" />
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-outline-primary btn-block mt-1">Agregar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

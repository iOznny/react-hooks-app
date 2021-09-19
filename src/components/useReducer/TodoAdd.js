import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { desc }, handleInputChange, reset ] = useForm({
        desc: ''
    });

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

        handleAddTodo(newTodo);
        reset();
    }

    return (
        <>
            <h4>Agregar</h4>
            <hr/>

            <form onSubmit={ handleSubmit }>
                <input type="text" className="form-control" name="desc" placeholder="Aprender..." autoComplete="off" value={ desc } onChange={ handleInputChange } />
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-outline-primary btn-block mt-1">Agregar</button>
                </div>
            </form>
        </>
    )
}

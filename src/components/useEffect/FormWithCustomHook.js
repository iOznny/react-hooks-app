import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    // Initialize form object
    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    // Destructuring the object formState
    const { name, email, password } = formValues;

    // Listening input email
    useEffect(() => {
        console.log('Email change');
    }, [email]);

    // Posting the form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Form With Custom Hook</h1>  
            <hr />

            <div className="form-group mb-3">
                <input 
                    type="text"
                    name="name" 
                    className="form-control" 
                    placeholder="Nombre Completo" 
                    autoComplete="off" 
                    value={ name } 
                    onChange={ handleInputChange } />
            </div>

            <div className="form-group mb-3">
                <input 
                    type="text"
                    name="email" 
                    className="form-control" 
                    placeholder="Correo Electrónico" 
                    autoComplete="off" 
                    value={ email } 
                    onChange={ handleInputChange } />
            </div>

            <div className="form-group mb-3">
                <input 
                    type="password"
                    name="password" 
                    className="form-control" 
                    placeholder="******"                    
                    value={ password } 
                    onChange={ handleInputChange } />
            </div>

            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
}

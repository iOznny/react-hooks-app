import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    // Initialize form object
    const [ formState, setFormState ] = useState({
        name: '',
        email: ''
    });

    // Destructuring the object formState
    const { name, email } = formState;

    // useEffect Permite ejecutar algun efecto secundario 
    // cuando algo sucesa en nuestros componentes.
    useEffect(() => {
        //console.log('Hey');
    }, []);

    // Listening the formState object
    useEffect(() => {
        //console.log('I change the formState');
    }, [formState]);

    // Listening to the email change
    useEffect(() => {
        //console.log('I change the email');
    }, [email]);


    // Change value input 'name'
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState, 
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>  
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

            { (name === '123') && <Message /> }
        </>
    )
}

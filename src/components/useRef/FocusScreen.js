import React, { useRef } from 'react';
import '../useEffect/effects.css';

export const FocusScreen = () => {

    // Hook useRef: Cambiar a lo que apunta el ref
    // sin disparar una renderización de React.
    const inputRef = useRef();    

    // Set focus in the input
    const handleClick = () => {       
        //document.querySelector('input').select();
        inputRef.current.focus();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className="form-control" 
                placeholder="Nombre" 
            />

            <button className="btn btn-outline-primary mt-4" onClick={ handleClick }>
                Focus
            </button>
        </div>
    )
}

import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // Read reference of context
    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Login Screen</h1>
            <hr/>

            <button className="btn btn-primary" 
                onClick={ () => setUser({
                    id: 12345,
                    name: 'Demo2'
                }) }>
                Login
            </button>
        </div>
    )
}

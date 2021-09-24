import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    // UserContext
    const { user, setUser } = useContext(UserContext);

    // Modify content of UserContext
    const handleClick = () => {
        setUser({});
    };

    return (
        <div>
            <h1>About Screen</h1>
            <hr/>

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>

            <button className="btn btn-danger" onClick={ handleClick }>Logout</button>
        </div>
    )
}

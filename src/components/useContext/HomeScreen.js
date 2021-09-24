import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    // useContext
    const context = useContext(UserContext);
    console.log(context);

    return (
        <div>
            <h1>Home Screen</h1>
            <hr/>
        </div>
    )
}

import React from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

export const MainApp = () => {

    const user = {
        id: 12345,
        name: 'Demo',
        email: 'a@b.c'
    };

    return (  
        <UserContext.Provider value={ user }>
            <AppRouter />       
        </UserContext.Provider>
    )
}

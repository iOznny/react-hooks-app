import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../useEffect/effects.css';

export const CallbackHook = () => {

    const [ counter, setCounter ] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    // Devolverá una versión memorizada del callback que solo cambia si una de las dependencias ha cambiado. 
    const increment = useCallback( (number) => {
        setCounter(c => c + number);        
    }, [setCounter]);

    return (
        <div>
            <h1>useCallBack Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />            
        </div>
    )
}

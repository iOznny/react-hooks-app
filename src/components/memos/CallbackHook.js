import React, { useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../useEffect/effects.css';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>useCallBack Hook</h1>
            <hr />

            <ShowIncrement increment={ increment } />            
        </div>
    )
}

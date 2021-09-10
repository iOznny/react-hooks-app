import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

import '../useEffect/effects.css';

export const Memorize = () => {

    // Initial counter object
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize</h1>
            <small>Counter: <Small value={ counter } />  </small>
            <hr />

            <button className="btn btn-primary" onClick={ increment }>+1</button>
            <button className="btn btn-outline-primary ml-1" onClick={ () => { setShow(!show) } }>Show / Hide { JSON.stringify(show) }</button>
        </div>
    )
}

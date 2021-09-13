import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

import '../useEffect/effects.css';

export const MemoHook = () => {

    // Initial counter object
    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Memorize <small>{ counter }</small></h3>            
            <hr />

            <button className="btn btn-primary" onClick={ increment }>+1</button>
            <button className="btn btn-outline-primary ml-1" onClick={ () => { setShow(!show) } }>Show / Hide { JSON.stringify(show) }</button>
        </div>
    )
}

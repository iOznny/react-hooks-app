import React, { useState } from 'react';
import './counter.css';

export const CounterApp = () => {

    const [state, setState] = useState({
        c1: 10,
        c2: 20,
    });

    const { c1, c2 } = state;

    return (
        <>
          <h1>Counter 1 { c1 }</h1>  
          <h1>Counter 2 { c2 }</h1>  
          <hr />

          <button className="btn btn-primary" onClick={ () => { setState({...state, c1: c1 + 1 }) }}>+1</button>
        </>
    )
}

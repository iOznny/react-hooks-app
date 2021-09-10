import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';

export const LayoutEffect = () => {

    // Conter Quotes
    const { counter, increment } = useCounter(1);

    // API request
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // !!data: Transformar con los !! un Null a un valor Booleano (False)
    const { quote } = !!data && data[0];

    // Search reference
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    
    // Get bounding client rect 
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote]);

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>

            <blockquote className="blockquote text-end">
                <p ref={ pTag } className="mt-2">{ quote }</p>                
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

                   
            <button className="btn btn-primary" onClick={ increment }>Next Quote</button>
        </div>
    )
}

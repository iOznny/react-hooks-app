import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../useEffect/effects.css';

export const MultipleCustomHooks = () => {

    // Conter Quotes
    const { counter, increment } = useCounter(1);

    // API request
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // !!data: Transformar con los !! un Null a un valor Booleano (False)
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) 
                : 
                    (
                        <blockquote className="blockquote text-end">
                            <p className="mt-2">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }

            <button className="btn btn-primary" onClick={ increment }>Next Quote</button>
        </div>
    )
}

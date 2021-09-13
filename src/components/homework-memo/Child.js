import React from 'react';

export const Child = React.memo(({ number, increment }) => {
    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => increment(number) }
        >
            { number }
        </button>
    )
})

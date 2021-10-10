import React, { useCallback } from 'react';
import { Child } from './Child';
import { useState } from 'react';
import '../useEffect/effects.css';

export const Dad = () => {

    const numbers = [2, 4, 6, 8, 10];
    const [ value, setValue ] = useState(0);

    // const increment = (num) => {
    //     setValue(value + num)
    // }

    const increment = useCallback((num) => {
        setValue(v => v + num);
    }, [setValue]);

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { value } </p>
            <hr />

            {
                numbers.map(n => (
                    <Child 
                        key={ n }
                        number={ n }
                        increment={ increment }
                    />
                ))
            }

            {/* <Child /> */}
        </div>
    )
}

import React, { useState } from 'react';
import { MultipleCustomHooks } from '../examples/MultipleCustomHooks';

import '../useEffect/effects.css';

export const RealExampleRef = () => {

    // Show and Hide Multiple Custom Hooks
    const [ show, setShow ] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button className="btn btn-outline-secondary mt-3" onClick={ () => setShow(!show) }>Show / Hide</button>

        </div>
    )
}

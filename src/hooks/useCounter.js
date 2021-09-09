import { useState } from "react";

export const useCounter = (initialState = 10) => {

    // Initial Object
    const [state, setState] = useState(initialState);

    // Increment initial state value
    const increment = (factor = 1) => {
        setState(state + factor);
    }

    // Reset state value
    const reset = () => {
        setState(initialState);
    }

    // Decrement initial state value
    const decrement = (factor = 1) => {
        setState(state - factor);
    }

    return {
        state,
        increment,
        reset,
        decrement
    };
}

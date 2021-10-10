import { useState } from "react";

export const useCounter = (initialState = 10) => {

    // Initial Object
    const [ counter, setCounter ] = useState(initialState);

    // Increment initial state value
    const increment = () => {
        setCounter(counter + 1);
    }

    // Reset state value
    const reset = () => {
        setCounter(initialState);
    }

    // Decrement initial state value
    const decrement = () => {
        setCounter(counter - 1);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    };
}

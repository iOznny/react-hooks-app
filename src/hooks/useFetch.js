import { useEffect, useState } from "react"

export const useFetch = (url) => {
    
    // Initial state object.
    const [state, setState] = useState({ data: null, loading: true, error: null});

    // Effect object
    useEffect(() => {

        // View the loading
        setState({ data: null, loading: true, error: null });

        // Get Api
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setState({
                loading: false,
                error: null,
                data
            });
        });
    }, [url]);

    return state;
}

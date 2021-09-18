import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    // useRef
    const isMounted = useRef(true);

    // Initial state object.
    const [ state, setState ] = useState({ data: null, loading: true, error: null});

    // Change status when dismounted
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    // Effect object
    useEffect(() => {

        // View the loading
        setState({ data: null, loading: true, error: null });

        // Get Api
        fetch(url)
        .then(res => res.json())
        .then(data => {
            if (isMounted.current) {                    
                setState({
                    loading: false,
                    error: null,
                    data
                });                
            }
        });
    }, [url]);

    return state;
}

import React, { useEffect, useState } from 'react'

export const Message = () => {

    // Coordinates
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const { x, y } = coords;

    // Syntax useEffect
    useEffect(() => {
        // Callback
        const mouseMove = (e) => {
            const coords = { x: e.x, y: e.y };
            setCoords(coords);
        }

        // Get coordinates of the view
        window.addEventListener('mousemove', mouseMove);

        return () => {
            // Remove event listener 'mousemove'
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);

    return (
        <>
            <h3>You are great</h3>  
            <p>
                x:{ x } y: { y }
            </p>
        </>
    )
}

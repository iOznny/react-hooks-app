import React from 'react';

export const Small = React.memo(({ value }) => {
    // Memo: Permite memorizar el componente para no redibujar nuevamente
    // solamente se vuelve a ejecutar cuando sus propiedades cambian.
    // caso contrario utiliza la version memorizada cuando tenga que redibujar algo.
    console.log(':(');

    return (
        <small>{ value }</small>
    )
})

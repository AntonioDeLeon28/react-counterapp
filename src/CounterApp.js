
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value  = 10 } ) => {

    const [ counter, setCounter ] = useState( value ); // Retorna un arreglo

    const handleAdd = (e) => {
        // console.log(e);
        // console.log('Hola Mundo');
        setCounter( counter + 1);
        // setCounter( (c) => c + 1 ); // Es otra forma de modificar el counter
    }

    const handleReset = () => setCounter( value );

    return ( // Forma corta de agegar un Fagment
        <> 
            <h1>CounterApp</h1>
            {/* <h2> { value } </h2> */}
            <h2> { counter } </h2>
            {/* es para poner un argumento en particular pero como solo nos interesa el primero pues le qutamos las "e" */}
            {/* <button onClick={ (e) => handleAdd (e) }> +1 </button> */} 
            {/* También podemos autoinvocar una función pero en la fución debemos de poner el return */}
            {/* <button onClick={ handleAdd() }> +1 </button>º */}
            <button onClick={ () => setCounter( counter - 1) }> -1 </button>
            <button onClick={ handleReset }> RESET </button>
            <button onClick={ handleAdd }> +1 </button>

        </>
    ); 

}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;

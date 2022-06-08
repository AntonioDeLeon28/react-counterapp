import React from 'react';
// import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
 
const PrimeraApp = ( { saludo3 = 'Hola Vegeta', subtitulo } ) => {

    const saludo = {
        nombre: 'Fernado',
        edad: 34
    }
    const saludo2 = 'Hola Antonio';
    return ( // Forma corta de agegar un Fagment
        <> 
            <pre>{ JSON.stringify( saludo, null, 3 ) }</pre>
            <h1>{ saludo2 }</h1> 
            <h1>{ saludo3 }</h1>
            {/* <p>Mi primera aplicación</p> */}
            <p>{ subtitulo }</p>
        </>
    ); 

}

PrimeraApp.propTypes = {
    saludo3: PropTypes.string.isRequired // No importa que pongamos valor por default en la función, va a marcar un error en la consola aunque sí va mostrar en la página web el valor por default
}

PrimeraApp.defaultProps = { // Es otra forma de darle valor por default a los argumentos que recibe una funión
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;


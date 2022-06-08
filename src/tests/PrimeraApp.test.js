import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => { 

    test('Debe de mostrar <PrimeraApp /> correctamente', () => { 

        const saludo = 'Hola, Soy Goku';
        const wrapper = shallow( <PrimeraApp saludo3={ saludo }/> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de mostrar el subtitulo enviado por props', () => { 

        const saludo = 'Hola, Soy Goku';
        const subTituloDeProps = 'Soy un subtitulo';
        const wrapper = shallow( <PrimeraApp saludo3={ saludo }/> ); //No le estamos enviando un subtitulo, así que lo va a sacar de default de props

        const textoParrafo = wrapper.find('p').text(); 
        console.log(textoParrafo);
        expect( textoParrafo ).toBe( subTituloDeProps );

    });

})
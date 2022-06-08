import '@testing-library/jest-dom';

import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp.test.js />', () => {

    let wrapper = shallow( <CounterApp /> ); // Esto se pone para no perder el intellisense después en cada prueba, osea que VSCode nos de las opciones cuando le ponemos el .toBe y así

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('Debe de mostrar <CounterApp /> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow( <CounterApp value = { 100 } /> )
        // const cuentaInicial = wrapper.find('h2').text(); // const cuentaInicial = wrapper.find('h2').text().trim(); // El trim quita los espacios de h2 para poder compararlos correctamente
        const cuentaInicial = wrapper.find('h2').text().trim();
        expect( cuentaInicial ).toBe( '100' );
        // expect( cuentaInicial ).toBe( ' 100 ' ); // Sin el trim debemos ponerle los espacios para que los compare correctamente

    });

    test('Debe de incrementar el contador + 1', () => { 

        wrapper.find('button').at(2).simulate('click'); // Del arreglo de botones quiero el tercero y que simule el click
        const cuentaInicial = wrapper.find('h2').text().trim();
        expect( cuentaInicial ).toBe('11');

    });

    test('Debe de decrementarel contador - 1', () => { 
        
        wrapper.find('button').at(0).simulate('click'); // Del arreglo de botones quiero el tercero y que simule el click
        const cuentaInicial = wrapper.find('h2').text().trim();
        expect( cuentaInicial ).toBe('9');

    });
    
    test('Debe de colocar el valoar por defecto con el btn reset', () => { 
        
        const wrapper = shallow( <CounterApp value = { 105 } /> )
        wrapper.find('button').at(2).simulate('click'); // + 1 al counter
        wrapper.find('button').at(1).simulate('click'); // Simula el click al reset
        const cuentaInicial = wrapper.find('h2').text().trim(); // Extre el valor del contador
        console.log(cuentaInicial);
        expect(cuentaInicial).toBe('105');

    });

})
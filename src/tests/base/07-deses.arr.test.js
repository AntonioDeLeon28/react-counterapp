import { retornaArreglo } from '../../base/07-deses-arr'


describe('Pruebas en desestructuración', () => { 

    test('Debe de reornar un string y un número', () => { 

        const [ letras, numeros] = retornaArreglo(); //['ABC', 123]

        expect( letras ).toBe( 'ABC' );
        expect( typeof letras).toBe( 'string' ); // Prueba por tipo de dato

        expect( numeros ).toBe( 123 );
        expect( typeof numeros).toBe( 'number' ); // Prueba por tipo de dato

     })

 })
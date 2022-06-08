
describe( 'Pruebas en el archivo demo.test.js', () => {
     
    test('Debende ser iguales los strings', () => { 
    
        // 1. Inicialización
        const mensaje = 'Hola mundo';
        
        // 2. Estimulo
        const mensaje2 = 'Hola mundo';
    
        // Observar el comportamiento
        expect ( mensaje ).toBe( mensaje2 );
    
    })

});
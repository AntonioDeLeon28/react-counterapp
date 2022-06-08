import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";



describe('Pruebas en funciones de heroes', () => {  

    test('Debe de retornar un heroe por id', () => { 
        
        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id === id);
        expect( heroe ).toEqual( heroeData );

     })

     test('Debe de retornar undefined si el heroe no existe', () => { 
        
        const id = 10;
        const heroe = getHeroeById( id );
        expect( heroe ).toBe( undefined );

     })

     test('Debe de retornar un arreglo filtrado con los heroes de DC', () => { 
        
        const owner = 'DC';
        const arrHeroeOwner = getHeroesByOwner( owner ); // Regresa un arreglo con los índices de los héreos pertenecientes a owner
        const heroeData = heroes.filter( (h) => h.owner === owner );
        expect( arrHeroeOwner ).toEqual( heroeData );

     })

     test('Debe de retornar un arreglo con los heroes de Marvel', () => { 
        
        const owner = 'Marvel';
        const arrHeroeOwner = getHeroesByOwner( owner ); // Regresa un arreglo con los índices de los héreos pertenecientes a owner
        expect( arrHeroeOwner.length ).toBe( 2 );

     })

})
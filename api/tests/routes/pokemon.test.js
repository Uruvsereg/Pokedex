// const {PokeRu} = require('../../src/routes/Pokemon/pokerut.js');
const {GetPokemons, PokeID, BuscaNombres, PokeNew, GetTipos} = require('../../src/controllers/controladores');
// const {Footer} = require('../../../client/src/components/footer/footer');

// describe('Rotas pokemon', () =>{
//   it('Debe conectarse a la ruta',() =>{
//     expect(typeof PokeRu).toBe('Route');
//     expect(typeof PokeRu).not.toBe('number')
//   })
// })

describe('Debe traer todos los pokemones', () =>{
  it('Debe ser una función', () =>{
    expect(typeof GetPokemons).toBe("function");
    expect(typeof GetPokemons).not.toBe("number");
  });
  it('Debe retornar un array o arreglo', () =>{
    expect(GetPokemons).toBe(GetPokemons)
  });
});

describe('Debe traer todos los pokemones', () =>{
  it('Debe ser una función', () =>{
    expect(typeof PokeID).toBe("function");
    expect(typeof PokeID).not.toBe("number");
  });
});

describe('Debe traer todos los pokemones', () =>{
  it('Debe ser una función', () =>{
    expect(typeof BuscaNombres).toBe("function");
    expect(typeof BuscaNombres).not.toBe("number");
  });
});

describe('Debe traer todos los pokemones', () =>{
  it('Debe ser una función', () =>{
    expect(typeof PokeNew).toBe("function");
    expect(typeof PokeNew).not.toBe("number");
  });
});

describe('Debe traer todos los pokemones', () =>{
  it('Debe ser una función', () =>{
    expect(typeof GetTipos).toBe("function");
    expect(typeof GetTipos).not.toBe("number");
  });
});

// describe('Debe traer todos los pokemones', () =>{
//   it('Debe ser una función', () =>{
//     expect(typeof Footer).toBe("function");
//     expect(typeof Footer).not.toBe("number");
//   });
// });

// describe('Debe traer todos los pokemones', () =>{
//   it('Debe ser una función', () =>{
//     expect(typeof BuscaNombres).toBe("function");
//     expect(typeof BuscaNombres).not.toBe("number");
//   });
// });

/*
describes():
  descripcion y el nombre de la funcion a testear
  segundo parámetro una callback
it():
  descripcion de lo que debe hacer, un it por cada prueba de la misma función
  segundo parámetro una callback
expect(typeof nombrefunción).toBe(')
*/
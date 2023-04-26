 const {sumar} = require('../../src/controllers/controladores');
describe('la función sumar', () =>{
    it('Debe ser una función', () =>{
      expect(typeof sumar).toBe("function");
      expect(typeof sumar).not.toBe('number');
    });
    it('Arrojar error en caso de no recibir un número', () =>{
      expect(() => sumar("string","uru")).toThrow("La función debe recibir 2 números");
      expect(() => sumar(2,"uru")).toThrow("La función debe recibir 2 números");
      expect(() => sumar("string",25)).toThrow("La función debe recibir 2 números");
      expect(() => sumar("uru",null)).toThrow("La función debe recibir 2 números");
      expect(() => sumar(null,"string")).toThrow("La función debe recibir 2 números");
      expect(() => sumar(15,[1,5])).toThrow("La función debe recibir 2 números");
      expect(() => sumar([5,"hola"],27)).toThrow("La función debe recibir 2 números");
    });
    it('Debe dar el resultado correcto',() =>{
      expect(sumar(14,17)).toBe(31);
      expect(sumar(24,5)).toBe(29);
      expect(sumar(18,15)).toBe(33);
      expect(sumar(5,85)).toBe(90);
      expect(sumar(200,-15)).toBe(185);
      expect(sumar(-15,-300)).toBe(-315);
    });
  });
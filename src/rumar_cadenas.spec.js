import sumar_cadenas from "./sumar_cadenas";

describe("Sumar", () => {
  it("deberia devolver el valor 0", () => {
    expect(sumar_cadenas("")).toEqual(0);
  });
  it("deberia devolver la suma de 1", () => {
    expect(sumar_cadenas("1")).toEqual(1);
  });
  it("deberia devolver la suma de 1 y 2", () => {
    expect(sumar_cadenas("1,2")).toEqual(3);
  });
  it("deberia devolver la suma de 2 o mas valores", () => {
    expect(sumar_cadenas("1,2,3,4,5")).toEqual(15);
  });
  it("deberia devolver 3a la suma de numeros separados por guion", () => {
    expect(sumar_cadenas("1-2")).toEqual(3);
  });
  it("deberia devolver la suma de la cadena separada con -", () => {
    expect(sumar_cadenas("1-2-3-4-5")).toEqual(15);
  });
  it("deberia devolver sumar de la cadena separada por guion o coma", () => {
    expect(sumar_cadenas("1,2,3-4-5")).toEqual(15);
  });
  it("deberia devolver suma la cadena separada por guion, coma o un delimitardor especial ", () => {
    expect(sumar_cadenas("//[;] 6,3-2;1")).toEqual(12);
  });
});
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
  it("deberia devolver sumar mas de 2 valores por guion", () => {
    expect(sumar_cadenas("1-2-3-4-5")).toEqual(15);
  });
});
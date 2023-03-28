import sumar_cadenas from "./sumar_cadenas";

describe("Sumar", () => {
  it("deberia devolver el valor 0", () => {
    expect(sumar_cadenas("")).toEqual(0);
  });
  it("deberia devolver la suma de 1", () => {
    expect(sumar_cadenas("1")).toEqual(1);
  });
});
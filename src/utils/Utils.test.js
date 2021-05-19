import React from 'react';
import { calcularDiferencaDeHorario } from './Utils';

describe("Utils", () =>{

  test('deve calcular a data trabalhada', () => {

    const entry = new Date('2021-05-01T08:00:00+0100');
    const launchIni =  new Date('2021-05-01T12:00:00+0100');
    const launchEnd =  new Date('2021-05-01T14:00:00+0100');
    const exit = new Date('2021-05-01T18:00:00+0100');

    const respostaEsperada = new Date('1970-01-01T07:00:00+0000');

    const resultado = calcularDiferencaDeHorario(entry, launchIni, launchEnd, exit)
    expect(resultado).toEqual(respostaEsperada)
  });
})

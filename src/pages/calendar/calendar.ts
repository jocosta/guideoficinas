import { Component } from '@angular/core';
import { Oficina } from '../../models/oficina';
import { AgendaSemana } from '../../models/agendaSemana';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  public semana: AgendaSemana[] = [];
  constructor() {

    //Segunda-Feira
    var segunda = new AgendaSemana();
    segunda.Dia = "Segunda-Feira";
    segunda.Oficinas = [];

    var card1 = new Oficina();
    card1.Periodo = "Pré-Aula";
    card1.Disciplina = "-";
    card1.Turma = "-";
    card1.Sala = "-";
    segunda.Oficinas.push(card1);

    var card2 = new Oficina();
    card2.Periodo = "1º Horário";
    card2.Disciplina = "-"
    card2.Turma = "-";
    card2.Sala = "-";
    card2.Lab = "-";
    segunda.Oficinas.push(card2);

    var card3 = new Oficina();
    card3.Periodo = "2º Horário";
    card2.Disciplina = "Excel I"
    card3.Turma = "Tec. Marketing 3A";
    card3.Sala = "716";
    card3.Lab = "-";
    segunda.Oficinas.push(card3);

    //Terça-Feira
    var terca = new AgendaSemana();
    terca.Dia = "Terça-Feira";
    terca.Oficinas = [];

    var card4 = new Oficina();
    card4.Periodo = "Pré-Aula";
    card4.Disciplina = "Project";
    card4.Turma = "-";
    card4.Sala = "206";
    terca.Oficinas.push(card4);

    var card5 = new Oficina();
    card5.Periodo = "1º Horário";
    card5.Disciplina = "-"
    card5.Turma = "-";
    card5.Sala = "-";
    card5.Lab = "-";
    terca.Oficinas.push(card5);

    var card6 = new Oficina();
    card6.Periodo = "2º Horário";
    card6.Disciplina = "Project"
    card6.Turma = "Tec. Proc. Ger. 2A/4A";
    card6.Sala = "726";
    card6.Lab = "-";
    terca.Oficinas.push(card6);

    //Quarta-Feira
    var quarta = new AgendaSemana();
    quarta.Dia = "Quarta-Feira";
    quarta.Oficinas = [];

    var card7 = new Oficina();
    card7.Periodo = "Pré-Aula";
    card7.Disciplina = "-";
    card7.Turma = "-";
    card7.Sala = "-";
    quarta.Oficinas.push(card7);

    var card8 = new Oficina();
    card8.Periodo = "1º Horário";
    card8.Disciplina = "Project"
    card8.Turma = "Tec. Processos Gerenciais 03";
    card8.Sala = "715";
    card8.Lab = "-";
    quarta.Oficinas.push(card8);

    var card9 = new Oficina();
    card9.Periodo = "2º Horário";
    card9.Disciplina = "Project"
    card9.Turma = "Tec. Jogos Digitais 01/05A";
    card9.Sala = "817";
    card9.Lab = "-";
    quarta.Oficinas.push(card9);

    //Quinta-Feira
    var quinta = new AgendaSemana();
    quinta.Dia = "Quinta-Feira";
    quinta.Oficinas = [];

    var card10 = new Oficina();
    card10.Periodo = "Pré-Aula";
    card10.Disciplina = "Project";
    card10.Turma = "-";
    card10.Sala = "206";
    quinta.Oficinas.push(card10);

    var card11 = new Oficina();
    card11.Periodo = "1º Horário";
    card11.Disciplina = "-"
    card11.Turma = "-";
    card11.Sala = "-";
    card11.Lab = "-";
    quinta.Oficinas.push(card11);

    var card12 = new Oficina();
    card12.Periodo = "2º Horário";
    card12.Disciplina = "Excel I"
    card12.Turma = "Tur./Tec. Hotelaria 1";
    card12.Sala = "729";
    card12.Lab = "-";
    quinta.Oficinas.push(card12);

    //Sexta-Feira
    var sexta = new AgendaSemana();
    sexta.Dia = "Sexta-Feira";
    sexta.Oficinas = [];

    var card13 = new Oficina();
    card13.Periodo = "Pré-Aula";
    card13.Disciplina = "-";
    card13.Turma = "-";
    card13.Sala = "-";
    sexta.Oficinas.push(card13);

    var card14 = new Oficina();
    card14.Periodo = "1º Horário";
    card14.Disciplina = "Excel I"
    card14.Turma = "Tec. Gestão Fin. 03B 04A";
    card14.Sala = "820";
    card14.Lab = "-";
    sexta.Oficinas.push(card14);

    var card15 = new Oficina();
    card15.Periodo = "2º Horário";
    card15.Disciplina = "-"
    card15.Turma = "-";
    card15.Sala = "-";
    card15.Lab = "-";
    sexta.Oficinas.push(card15);


    this.semana.push(segunda);
    this.semana.push(terca);
    this.semana.push(quarta);
    this.semana.push(quinta);
    this.semana.push(sexta);
  }
}
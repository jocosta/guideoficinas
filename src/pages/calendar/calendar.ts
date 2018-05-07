import { Component } from '@angular/core';
import { Oficina } from '../../models/oficina';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {

  public cards: Oficina[] = [];
  constructor() {

    var card1 = new Oficina();
    card1.Periodo = "Pré-Aula";
    card1.Disciplina = "Project";
    card1.Turma = "-";
    card1.Sala = "-";
    this.cards.push(card1);

    var card2 = new Oficina();
    card2.Periodo = "1º Horário";
    card2.Disciplina = "Excel I"
    card2.Turma = "Tec. Proc. Ger. 2A/4A";
    card2.Sala = "726";
    card2.Lab = "205";
    this.cards.push(card2);

    var card3 = new Oficina();
    card3.Periodo = "2º Horário";
    card2.Disciplina = "MS Project"
    card3.Turma = "Tec. Jogos Digitais 01/05A";
    card3.Sala = "817";
    card3.Lab = "203";
    this.cards.push(card3);
  }

}
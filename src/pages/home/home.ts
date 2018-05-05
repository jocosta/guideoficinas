import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalendarPage } from '../calendar/calendar';
import { SchedulePage } from '../schedule/schedule';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public profileTab: any;
  public scheduleTab: any;
  
  constructor(public navCtrl: NavController) {
    this.profileTab = CalendarPage;
    this.scheduleTab = SchedulePage;
  }

}

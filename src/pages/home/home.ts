import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CalendarPage } from '../calendar/calendar';
import { SchedulePage } from '../schedule/schedule';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public homeTab: any;
  public scheduleTab: any;
  public profileTab: any;

  constructor(public navCtrl: NavController) {
    this.homeTab = CalendarPage;
    this.profileTab = ProfilePage;
  }
}

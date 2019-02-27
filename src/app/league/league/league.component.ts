import { Component, OnInit, Input } from '@angular/core';
import { League } from '../../models/league';
import { Router } from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  @Input() league : League;
  constructor() { }

  ngOnInit() {
    if(!this.league.emblameUrl) {
      this.league.emblameUrl = "/assets/images/no-logo-league.png";
    }
  }

}

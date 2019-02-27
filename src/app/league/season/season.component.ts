import { Component, OnInit, Input } from '@angular/core';
import { Season } from '../../models/season';
import { Team } from '../../models/team';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  @Input() season : Season;
  endYear: string;
  winnerName : string;
  constructor() { }

  ngOnInit() {
    this.endYear = this.season.endDate.split("-")[0];
    if(!this.season.winner) {
        this.season.winner = new Team();
        this.season.winner.crestUrl = '/assets/images/no-logo-team.png';
        if(this.endYear === new Date().getFullYear().toString()) {
          this.winnerName = "Ongoing";
        } else {
          this.winnerName = "Unknown";
        }
    } else {
      this.winnerName = this.season.winner.name;
    }
  }

}

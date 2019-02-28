import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LeagueService } from '../../services/leagues/league.service';
import { League } from '../../models/league';

@Component({
  selector: 'app-league-info',
  templateUrl: './league-info.component.html',
  styleUrls: ['./league-info.component.scss']
})
export class LeagueInfoComponent implements OnInit {

  public leagueId : number;
  public league : League;
  constructor(public route: ActivatedRoute, public leagueService : LeagueService) { 

  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
        this.leagueId = params['id'];
        this.leagueService.getLeagueDetails(this.leagueId).subscribe((res) => {
          this.league = res.body;
          if(!this.league.emblameUrl) {
            this.league.emblameUrl = "/assets/images/no-logo-league.png";
          }
        })
    });
  }

}

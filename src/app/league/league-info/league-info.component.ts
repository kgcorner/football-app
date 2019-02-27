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

  private leagueId : number;
  private league : League;
  constructor(private route: ActivatedRoute, private leagueService : LeagueService) { 

  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
        this.leagueId = params['id'];
        this.leagueService.getLeagueDetails(this.leagueId).subscribe((res) => {
          this.league = res.body;
        })
    });
  }

}

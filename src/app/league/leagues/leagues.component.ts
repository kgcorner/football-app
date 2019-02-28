import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/leagues/league.service';
import { League } from '../../models/league';
import { Router, ActivatedRoute } from '@angular/router';
import { Plan } from '../../models/plan';
import { Store } from '@ngrx/store';
import { LeagueState } from '../rx/league.state';
import { LoadLeaguesAction } from '../rx/league.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {

  private leagues: Observable<Array<League>> = this.store.select('league');
  private current_page : number = 0;
  private max_league_count_per_page : number = 12;
  private pages : Array<any>;
  private paged_leagues : Array<League>
  /*constructor(private leagueService: LeagueService, private router: Router) {
    console.log("called constructor");
   }

  ngOnInit() {
    console.log("executing oninit")
    this.leagueService.getLeaguesByPlan(Plan.TIER_ONE).subscribe((res)=>{
      this.leagues = res.body["competitions"];
      if(this.leagues.length > this.max_league_count_per_page) {
         this.cropPage();
      } else {
        this.paged_leagues = this.leagues;
      }
      let pagesCount = this.leagues.length / this.max_league_count_per_page;
      this.pages = [];
      for(let i = 1; i<= pagesCount; i++) {
        this.pages.push(i);
      }
    }); 
  }*/


  constructor(private store : Store<LeagueState>, private router : ActivatedRoute) {}
  
  ngOnInit() {
    this.store.dispatch(new LoadLeaguesAction());
  }

  // changePage(p) {
  //   console.log("this is "+p)    
  //   this.current_page = p;
  //   this.cropPage();
  // }

  // cropPage() {
  //   let startFrom =  this.max_league_count_per_page * this.current_page + 1;
  //   let upto = (startFrom + this.max_league_count_per_page) > this.leagues.length ? this.leagues.length : startFrom + this.max_league_count_per_page;
  //   this.paged_leagues = this.leagues.slice(startFrom, upto);
  // }

  // showLeagueInfo(leagueId) {
  //   console.log("navigating to leagues/" + leagueId);
  //   this.router.navigate(['./leagues/' + leagueId]);
  // }

}

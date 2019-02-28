import { Injectable } from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import { LeagueService } from 'src/app/services/leagues/league.service';
import { LOAD_LEAGUES, LOAD_LEAGUES_SUCCESS } from './league.actions';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Plan } from 'src/app/models/plan';


@Injectable()
export class LeagueEffect {
    
    constructor(private action : Actions, private leagueService: LeagueService) { }

    @Effect()
    loadLeagues = this.action
                        .pipe(
                            ofType(LOAD_LEAGUES), 
                            mergeMap(() => this.leagueService.getLeaguesByPlan(Plan.TIER_ONE)
                            .pipe(
                                map((league)=> ({type: LOAD_LEAGUES_SUCCESS, payload: league.body["competitions"]}))
                            )
                                /*.pipe(
                                    map(leagues => ({type : LOAD_LEAGUES_SUCCESS, payload: leagues["competitions"]})),
                                    catchError(()=>EMPTY)
                                )*/
                            )
                        );

}
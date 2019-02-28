import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { League } from '../../models/league';
import { Plan } from '../../models/plan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private GET_ALL_LEAGUES_URL =  environment.api_host_address+'/competitions';
  private GET_LEAGUES_BY_AREA_URL =  environment.api_host_address+'/competitions?areas=%d';
  private GET_LEAGUES_BY_PLAN_URL =  environment.api_host_address+'/competitions?plan=%s';
  private GET_LEAGUES_BY_AREA_PLAN_URL =  environment.api_host_address+'/competitions?areas=%d&plan=%s';
  private GET_LEAGUE_DETAIL_URL =  environment.api_host_address+'/competitions/%d';
  
  constructor(private http : HttpService) { }

  /**
   * Returns list of all `League`
   */
  getAllLeagues() {
    return this.http.doGet<Array<League>>(this.GET_ALL_LEAGUES_URL, null);
  }

  /**
   * fetches list of `Leagues` which are played in an area
   * @param areaId id of the area in which leagues are played
   */
  getLeaguesByArea(areaId : number) {
    return this.http.doGet<Array<League>>(this.GET_LEAGUES_BY_AREA_URL.replace("%d", areaId+""), null);
  }

  /**
   * fetches list of `Leagues` which are played in an area and league level
   * @param areaId  id of the area in which leagues are played
   * @param plan level of the league eg: TIER_ONE
   */
  getLeaguesByAreaAndPlan(areaId : number, plan : Plan) {
    return this.http.doGet<Array<League>>(this.GET_LEAGUES_BY_AREA_PLAN_URL.replace("%d", areaId+"").replace("%s", plan.toString()), null);
  }

  /**
   * fetches list of `Leagues` by plan 
   * @param plan level of the league eg: TIER_ONE
   */
  getLeaguesByPlan(plan : Plan) {
    return this.http.doGet<Array<League>>(this.GET_LEAGUES_BY_PLAN_URL.replace("%s", Plan[plan]), null);
  }
  

  /**
   * Fetches details of league
   * @param leagueId league id
   */
  getLeagueDetails(leagueId : number) {
    return this.http.doGet<League>(this.GET_LEAGUE_DETAIL_URL.replace("%d", leagueId+""), null);
  }
}

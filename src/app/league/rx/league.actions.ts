import { Action } from '@ngrx/store';
import { League } from 'src/app/models/league';

export const LOAD_LEAGUES = "[LOAD LEAGUES] Load all leagues";
export const LOAD_LEAGUES_SUCCESS = "[LOAD LEAGUES SUCCESS] Succefully loaded all leagues";

export class LoadLeaguesAction implements Action  {
    type = LOAD_LEAGUES;    
}

export class LoadLeaguesSuccessAction implements Action  {
    type = LOAD_LEAGUES_SUCCESS;    
    constructor(payloads : League[]) {}
}

import { LeagueState } from './league.state';
import { Action } from '@ngrx/store';
import * as LeagueAction from './league.actions';


interface UnsafeAction extends Action {
    payload : any;
}
export const initialState : LeagueState = {
    leagues : [],
    seasons: [],
    teams: []
}
export function leagueReducer(state : LeagueState = initialState, action : UnsafeAction) {
    switch(action.type) {
        case LeagueAction.LOAD_LEAGUES_SUCCESS: {        
            let newState : LeagueState = {
                leagues : [...state.leagues, action.payload],
                seasons : state.seasons,
                teams : state.teams
            }
            return newState;
        }
    }
}
import { Team } from './team';

export class Season {
    id: number;
    startDate : string;
    endDate : string;
    currentMatchDay : number;
    winner : Team;
}
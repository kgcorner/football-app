import { Area } from './area';
import { Plan } from './plan';
import { Season } from './season';

export class League {
    id:number;
    area : Area;
    name : string;
    emblameUrl: string;
    plan: Plan;
    currentSeason: Season;
    numberOfAvailableSeasons: number;
    lastUpdated: Date;
    seasons: Array<Season>;
    code: string
}
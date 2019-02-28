import { League } from 'src/app/models/league';
import { Season } from 'src/app/models/season';
import { Team } from 'src/app/models/team';

export interface LeagueState {
    leagues : League[]
    seasons : Season[]
    teams : Team[]
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './league/league.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { ShareModule } from '../share/share.module';
import { LeagueInfoComponent } from './league-info/league-info.component';
import { SeasonComponent } from './season/season.component';

@NgModule({
  declarations: [LeagueComponent, LeaguesComponent, LeagueInfoComponent, SeasonComponent],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports:[LeaguesComponent, LeagueInfoComponent]
})
export class LeagueModule { }

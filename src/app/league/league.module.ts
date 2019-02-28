import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueComponent } from './league/league.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { ShareModule } from '../share/share.module';
import { LeagueInfoComponent } from './league-info/league-info.component';
import { SeasonComponent } from './season/season.component';
import { EffectsModule } from '@ngrx/effects';
import { LeagueEffect } from './rx/league.effect';
import { StoreModule } from '@ngrx/store';
import { leagueReducer } from './rx/league.reducer';

@NgModule({
  declarations: [LeagueComponent, LeaguesComponent, LeagueInfoComponent, SeasonComponent],
  imports: [
    CommonModule,
    ShareModule,
    StoreModule.forFeature('league', leagueReducer),
    EffectsModule.forFeature([LeagueEffect])
  ],
  exports:[LeaguesComponent, LeagueInfoComponent]
})
export class LeagueModule { }

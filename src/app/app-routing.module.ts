import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaguesComponent } from './league/leagues/leagues.component';
import { LeagueInfoComponent } from './league/league-info/league-info.component';

const routes: Routes = [
  {path : '', redirectTo:'leagues',pathMatch:'full'},
  {path : 'leagues', component: LeaguesComponent},
  {path : 'leagues/:id', component: LeagueInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

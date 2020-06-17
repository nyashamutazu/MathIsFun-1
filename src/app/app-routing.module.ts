import { ErrorComponent } from './error/error.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LoginComponent } from './auth/login/login.component';
import { DivisionComponent } from './lessons/division/division.component';
import { MultiplicationComponent } from './lessons/multiplication/multiplication.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { AboutComponent } from './about/about.component';
import { AdditionComponent } from './lessons/addition/addition.component';
import { SubtractionComponent } from './lessons/subtraction/subtraction.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'sign-up', component: SignUpComponent },
  // { path: 'leader-board', component: LeaderboardComponent },
  { path: 'lessons/addition', component: AdditionComponent },
  { path: 'lessons/multiplication', component: MultiplicationComponent },
  { path: 'lessons/division', component: DivisionComponent },
  { path: 'lessons/subtraction', component: SubtractionComponent },
  { path: '**', component: ErrorComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

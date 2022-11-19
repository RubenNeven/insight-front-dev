import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AthleteComponent} from "./athlete/athlete.component";
import {CreateAthleteComponent} from "./create-athlete/create-athlete.component";

const routes: Routes = [
  {
    path: '',
    component: AthleteComponent
  },
    {
      path: 'create',
      component: CreateAthleteComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

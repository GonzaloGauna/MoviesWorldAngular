import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesBoardComponent } from './movies-board.component';

const routes: Routes = [
    { path: '', component: MoviesBoardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesBoardRoutingModule { }
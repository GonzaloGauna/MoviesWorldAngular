import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'series', 
    loadChildren: () => import('./modules/home/components/series/series.module').then(m => m.SeriesModule)
  },
  {
    path: 'movies', 
    loadChildren: () => import('./modules/home/components/movies/movies.module').then(m => m.MoviesModule)
  },
  {
    path: 'movies-board', 
    loadChildren: () => import('./modules/home/components/movies-board/movies-board.module').then(m => m.MoviesBoardModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

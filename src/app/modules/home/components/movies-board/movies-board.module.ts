import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesBoardComponent } from './movies-board.component';
import { MoviesBoardRoutingModule } from './movies-board-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MoviesBoardComponent],
  imports: [
    CommonModule,
    MoviesBoardRoutingModule,
    HttpClientModule
  ]
})
export class MoviesBoardModule { }

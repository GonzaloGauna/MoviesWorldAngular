import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { movieRequest } from 'src/app/models/movieRequest.interface';
import { movieResponse } from 'src/app/models/movieResponse.interface';
import { GetMovieService } from 'src/app/services/getMovie.service';
import * as data from './../../../../data/moviesTop.json';

@Component({
  selector: 'app-movies-board',
  templateUrl: './movies-board.component.html',
  styleUrls: ['./movies-board.component.scss']
})
export class MoviesBoardComponent implements OnInit {

  private dataArray = ["tt0111161","tt0068646","tt0071562","tt0110912", "tt0060196", "tt0468569", "tt0050083", "tt0108052"];
  public dataResponseArray: movieResponse[];
  
  constructor( private getMovieService: GetMovieService ) {
    this.dataResponseArray = new Array;
  }

  ngOnInit(): void {
    this.dataArray.forEach( id => {
      this.movie(id);
    });
    
  }
  
  
  movie(id:string){
    
    const req: movieRequest = {
      title: "The Godfather",
      rank: "2",
      id: "tt0068646"
    }
    
    this.getMovieService.getMovie(id).subscribe((response: any) => {
      // this.dataResponseArray?.push(response);
      this.dataResponseArray.push(response);
    }, (error: HttpErrorResponse)=>{
      console.log(error);
    });

  }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { movieResponse } from '../models/movieResponse.interface';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class GetMovieService {
    baseUrl = "http://www.omdbapi.com/?i=";
    apiKey = "&apikey=2927b494"
    constructor(private http: HttpClient) { }

    public getMovie( movieId: string ):Observable<movieResponse>{
        let headers = new HttpHeaders ({});
        return this.http.get<movieResponse>(`${this.baseUrl+movieId+this.apiKey}`);
    }
}
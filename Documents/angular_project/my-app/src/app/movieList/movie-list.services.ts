import { IMovie } from './movie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MovieService
{
    constructor(private http:HttpClient){}
    movieUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=9b362e3e690674bb239092bc71c6c0a8&language=en-US&page=1";
    
    getMovies(): Observable<IMovie[]>
    {
            return this.http.get<IMovie[]>(this.movieUrl)
    }
}


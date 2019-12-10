import { ITV } from './tv';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TVService
{
    constructor(private http:HttpClient){}
    tvUrl = "https://api.themoviedb.org/3/tv/popular?api_key=9b362e3e690674bb239092bc71c6c0a8&language=en-US&page=1";

    getTVShows(): Observable<ITV[]>
    {
        return this.http.get<ITV[]>(this.tvUrl);
    }
}
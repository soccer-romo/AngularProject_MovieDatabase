import { Component } from '@angular/core';

import { IMovie } from '../movieList//movie';
import { MovieService } from '../movieList/movie-list.services';

import { ITV } from '../tvList/tv';
import { TVService } from '../tvList/tv-list.service';

@Component ({
    selector: "pm-home",
    templateUrl: "./home.component.html"
})

export class HomeComponent{
    pageTitle: string = "Home";
    movies: IMovie[] = [];
    tvShows: ITV[] = [];
    movieTitle: string;
    movieImg: string;


    constructor (private tvService: TVService, private movieService: MovieService){}

    ngOnInit():void
    {
        this.movies = this.getMovies();
        this.tvShows = this.getTvShows();   
    }
    getTvShows():any
    {
        return this.tvService.getTVShows().subscribe({
            next: TvShowObserved => this.tvShows = TvShowObserved});
    }
    getMovies():any
    {
        return this.movieService.getMovies().subscribe({
            next: movieObserved => this.movies = movieObserved});
    }


}
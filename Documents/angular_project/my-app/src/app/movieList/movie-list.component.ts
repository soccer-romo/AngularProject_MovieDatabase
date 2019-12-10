import { Component } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie-list.services';

@Component ({
    selector: "pm-movies",
    templateUrl: "./movie-list.component.html"
})

export class MovieListComponent{
    pageTitle: string =  "Movies";
    movies: IMovie[];
    cardWidth: number = 48;
    infoHeight: number = 100;
    imgUrl: string = "'https://image.tmdb.org/t/p/original' + movie.poster_path"
    constructor(private movieService: MovieService){}

    ngOnInit():void
    {
        this.movies = this.getMovies();
    }

    getMovies():any
    {
        return this.movieService.getMovies().subscribe({
            next: movieObserved => this.movies = movieObserved});
    }

    toggleMoreInfo():void
    {
        if(this.cardWidth == 23)
        {
            this.cardWidth = 100
            this.imgUrl = "movie.backdrop_path"
        }
        else
        {
            this.cardWidth = 23
            this.imgUrl = "'https://image.tmdb.org/t/p/original' + movie.poster_path"
        } 
            
    }

}
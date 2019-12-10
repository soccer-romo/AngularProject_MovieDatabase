import { Component } from '@angular/core';
import { ITV } from './tv';
import { TVService } from './tv-list.service'

@Component ({
    selector: "pm-shows",
    templateUrl: "./tv-list.component.html"
})

export class TVListComponent{
    pageTitle: string =  "Tv Shows";
    tvShows: ITV[] = [];
    constructor (private tvService: TVService){}

    ngOnInit():void
    {
        this.tvShows = this.getTvShows();
    }

    getTvShows():any
    {
        return this.tvService.getTVShows().subscribe({
            next: TvShowObserved => this.tvShows = TvShowObserved});
    }
}
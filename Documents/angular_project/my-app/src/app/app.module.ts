import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MovieListComponent } from './movieList/movie-list.component';
import { TVListComponent } from './tvList/tv-list.component';


import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    TVListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'movies', component: MovieListComponent},
      {path: 'tvShows', component: TVListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo:'home', pathMatch:'full'}
    ]
    )],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

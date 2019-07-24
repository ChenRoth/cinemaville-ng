import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GenreFilterComponent } from './genre-filter/genre-filter.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const API_URL = 'http://localhost:3000';

@NgModule({
    declarations: [
        AppComponent,
        MovieComponent,
        MoviesComponent,
        MovieDetailsComponent,
        GenreFilterComponent,
        NewMovieComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        MatCardModule,
        MatSelectModule,
        MatToolbarModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

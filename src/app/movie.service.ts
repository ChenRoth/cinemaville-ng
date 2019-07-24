import { Injectable } from '@angular/core';
import { Movie } from 'src/models/movie.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {API_URL} from './app.module';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private httpClient: HttpClient) { }

    getMoviesFromServer(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(`${API_URL}/movies`);
    }

    getMovieDetailsFromServer(id: string): Observable<Movie> {
        return this.httpClient.get<Movie>(`${API_URL}/movies/${id}`);
    }
}

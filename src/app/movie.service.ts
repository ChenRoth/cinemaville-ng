import { Injectable } from '@angular/core';
import { Movie } from 'src/models/movie.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor(private httpClient: HttpClient) { }

    getMoviesFromServer(): Observable<Movie[]> {
        return this.httpClient.get<Movie[]>(`${API_URL}/movies`);
    }
}

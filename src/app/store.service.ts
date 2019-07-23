import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from 'src/models/movie.model';
import { MovieService } from './movie.service';

export interface IState {
    movies: Movie[]
}

const initialState: IState = {
    movies: []
}

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private readonly _store = new BehaviorSubject<IState>(initialState);
    constructor(private movieService: MovieService) { }

    get currentState(): IState {
        return this._store.getValue();
    }

    getMovies() {
        this.movieService.getMoviesFromServer().subscribe(movies => {
            this._store.next({
                ...this.currentState,
                movies,
            });
        })
    }

    get movies(): Movie[] {
        return this.currentState.movies;
    }
}

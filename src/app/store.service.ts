import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from 'src/models/movie.model';
import { MovieService } from './movie.service';

export interface IState {
    movies: Movie[];
    selectedMovie: Movie;
}

const initialState: IState = {
    movies: [],
    selectedMovie: null
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

    setState(newState: Partial<IState>) {
        this._store.next({
            ...this.currentState,
            ...newState,
        })
    }

    getMovies() {
        this.movieService.getMoviesFromServer().subscribe(movies => {
            this.setState({
                movies,
            });
        })
    }

    get movies(): Movie[] {
        return this.currentState.movies;
    }

    get selectedMovie(): Movie {
        return this.currentState.selectedMovie;
    }

    getMovieById(id: string) {
        this.movieService.getMovieDetailsFromServer(id).subscribe(movie => {
            this.setState({
                selectedMovie: movie
            });
        });
    }
}

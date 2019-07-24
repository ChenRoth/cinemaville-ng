import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from 'src/models/movie.model';
import { MovieService } from './movie.service';
import {Genre} from '../models/genre.model';
import {GenreService} from './genre.service';

export interface IState {
    movies: Movie[];
    genres: Genre[];
    selectedMovie: Movie;
    selectedGenre: string;
}

const initialState: IState = {
    movies: [],
    selectedMovie: null,
    genres: [],
    selectedGenre: null,
}

@Injectable({
    providedIn: 'root'
})
export class StoreService {
    private readonly _store = new BehaviorSubject<IState>(initialState);
    constructor(
      private movieService: MovieService,
      private genreService: GenreService
    ) { }

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

    get filteredMovies(): Movie[] {
      if (!this.selectedGenre) {
        return this.movies;
      }
      return this.currentState.movies.filter(movie => movie.genre === this.selectedGenre);
    }

    get genres(): Genre[] {
        return this.currentState.genres;
    }

    get selectedGenre(): IState['selectedGenre'] {
        return this.currentState.selectedGenre;
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

    getGenres() {
      this.genreService.getGenresFromServer().subscribe(genres => {
        this.setState({
          genres,
        });
      });
    }

    setSelectedGenre(genreName: string) {
      this.setState({
        selectedGenre: genreName,
      });
    }

    addMovie(movie: Movie) {
      return this.movieService.addMovieToServer(movie).subscribe(movieFromServer => {
        // it's important to add the movieForm retrieved from the server cause it contains the server-generated id!
        this.setState({
          movies: this.movies.concat(movieFromServer),
        });
      });
    }
}

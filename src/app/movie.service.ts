import { Injectable } from '@angular/core';
import { Movie } from 'src/models/movie.model';
import { Observable, of } from 'rxjs';

const movies = [
    {
        name: 'Rocky III',
        genre: 'action',
        year: 1982,
        actors: ['Sylvester Stalone', 'Mr. T'],
        image: 'https://images-na.ssl-images-amazon.com/images/I/51WJBnip6-L.jpg',
        video: 'https://www.youtube.com/watch?v=q4FhoXt8lFk',
    },
    {
        name: 'Lion King',
        genre: 'animation',
        year: 1994,
        actors: ['James Earl Jones', 'Kid from Home Improvement'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwfebO0wboJcIYaFOyIPgMy9RPKWonCie-L4A2uzlS353azqC',
        video: 'https://www.youtube.com/watch?v=f0fReuRs890',
    },
];

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    constructor() { }

    getMoviesFromServer(): Observable<Movie[]> {
        return of(movies);
    }
}

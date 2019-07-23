import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/models/movie.model';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent {
    @Input() movie: Movie;

    get link(): string {
        return `/movie/${this.movie._id}`;
    }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';
import { Movie } from 'src/models/movie.model';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute, public store: StoreService) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.store.getMovieById(this.id);
    }
}

import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
    constructor(public store: StoreService) {

    }

    ngOnInit() {
        this.store.getMovies();
    }
}

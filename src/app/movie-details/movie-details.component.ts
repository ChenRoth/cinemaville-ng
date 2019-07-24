import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoreService} from '../store.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    id: string;

    constructor(private route: ActivatedRoute, public store: StoreService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.store.getMovieById(this.id);
    }

    get trailerLink(): SafeResourceUrl {
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.store.selectedMovie.video);
    }
}

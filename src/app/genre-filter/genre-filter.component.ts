import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {

  constructor(public store: StoreService) { }

  ngOnInit() {
  }

  selectGenre(e) {
    const genreName = e.target.value;
    this.store.setSelectedGenre(genreName);
  }

}

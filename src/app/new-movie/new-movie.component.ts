import {Component, OnInit} from '@angular/core';
import {StoreService} from '../store.service';
import {FormArray, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {
  constructor(private store: StoreService, private fb: FormBuilder, private router: Router) {
  }

  movieForm = this.fb.group({
    name: ['', Validators.required],
    year: ['', [Validators.required, Validators.min(1850)]],
    genre: ['', Validators.required],
    actors: this.fb.array(
      [
        this.fb.control('', Validators.required),
      ],
      Validators.required),
    image: ['', [Validators.required, Validators.pattern(URL_REGEX)]],
    video: ['', [Validators.required, Validators.pattern(URL_REGEX)]],
  });

  get actors() {
    return this.movieForm.get('actors') as FormArray;
  }

  addActor() {
    this.actors.push(this.fb.control(''));
  }

  removeActor(i: number) {
    this.actors.removeAt(i);
  }

  ngOnInit() {
    this.store.getGenres();
  }

  submitMovie() {
    this.store.addMovie(this.movieForm.value).add(() => {
      // navigate to home page when movie has been added
      this.router.navigateByUrl('');
    });
  }
}

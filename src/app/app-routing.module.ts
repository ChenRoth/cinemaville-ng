import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {NewMovieComponent} from './new-movie/new-movie.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/new', component: NewMovieComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: '**', redirectTo: 'movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

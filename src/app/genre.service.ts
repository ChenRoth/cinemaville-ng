import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Genre} from '../models/genre.model';
import {API_URL} from './app.module';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getGenresFromServer(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(`${API_URL}/genres`);
  }
}

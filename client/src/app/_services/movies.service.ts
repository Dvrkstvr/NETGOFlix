import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { title } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../_models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = environment.apiUrl;
  model: any;

  constructor(private http: HttpClient) { }

  getMovies()
  {
    return this.http.get<Movie[]>(this.baseUrl + 'movies')
  }

  getMovie(title)
  {
    return this.http.get<Movie>(this.baseUrl + 'movies/' + title);
  }

  addMovie(model: any)
  {
    return this.http.post(this.baseUrl + 'movies/movie-manager', model);
  }

  removeMovie(model: any)
  {
    return this.http.delete(this.baseUrl + 'movies/movie-manager', model);
  }
}

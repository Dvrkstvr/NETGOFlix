import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/_models/movie';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.css']
})
export class MovieCategoriesComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MoviesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies()
  {
    this.movieService.getMovies().subscribe(movies =>{
      this.movies = movies;
    })
  }
  
}

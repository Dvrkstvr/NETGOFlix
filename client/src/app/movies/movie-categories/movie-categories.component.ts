import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-categories',
  templateUrl: './movie-categories.component.html',
  styleUrls: ['./movie-categories.component.css']
})
export class MovieCategoriesComponent implements OnInit {
  movies: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies()
  {
    this.http.get('https://localhost:5001/api/movies').subscribe(response => {
      this.movies = response;
    }, error => {
      console.log(error);
    })
  }
  
}

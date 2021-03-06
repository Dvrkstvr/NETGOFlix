import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/_models/movie';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(private movieService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie()
  {
    this.movieService.getMovie(this.route.snapshot.paramMap.get('title')).subscribe(movie =>{
      this.movie = movie;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/_services/movies.service';

@Component({
  selector: 'app-movie-manager',
  templateUrl: './movie-manager.component.html',
  styleUrls: ['./movie-manager.component.css']
})
export class MovieManagerComponent implements OnInit {
  model: any = {};

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  addMovie(model: any)
  {
    this.moviesService.addMovie(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  removeMovie()
  {
    this.moviesService.removeMovie(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}

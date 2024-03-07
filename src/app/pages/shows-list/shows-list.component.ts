import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { Movie } from '../../types/movie';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss'
})
export class ShowsListComponent implements OnInit{

  constructor(private moviesService:MoviesService) {}

  showsList$: Observable<Movie[]> | null = null;

  ngOnInit() {
    this.showsList$ = this.moviesService.searchMovies(1);
  }

}

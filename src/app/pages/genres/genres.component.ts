import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies/movies.service'
import { Observable } from 'rxjs/internal/Observable'
import { Genre, GenresDTO } from '../../types/movie'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit{

  genres$: Observable<Genre[]> | null = null

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.genres$ = this.moviesService.getMoviesGenres();
  }

}

import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies/movies.service'
import { Observable } from 'rxjs/internal/Observable'
import { Genre, Movie } from '../../types/movie'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genre[]> | null = null
  shows$: Observable<Movie[]> | null = null

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.genres$ = this.moviesService.getMoviesGenres()
  }

  findByGenre(genreId: string) {
    this.shows$ = this.moviesService.getMoviesByGenre(genreId, 1)
  }
}

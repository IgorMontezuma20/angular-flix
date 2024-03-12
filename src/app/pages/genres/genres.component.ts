import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies/movies.service'
import { Observable } from 'rxjs/internal/Observable'
import { Genre, Movie } from '../../types/movie'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genre[]> | null = null
  shows$: Observable<Movie[]> | null = null
  genreId: string = ''

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId']
      this.shows$ = this.moviesService.getMoviesByGenre(this.genreId)
    })
    this.genres$ = this.moviesService.getMoviesGenres()
  }
}

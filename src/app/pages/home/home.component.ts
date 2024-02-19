import { TvshowsService } from '../../services/tv_shows/tvshow.service'
import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies/movies.service'
import { map } from 'rxjs'
import { mapToMovies } from '../../types/tvShow'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private movieService: MoviesService,
    private tvShowsService: TvshowsService
  ) {}

  popularMovies$ = this.movieService.getMoviesByType('popular', 12)
  upcomingMovies$ = this.movieService.getMoviesByType('upcoming', 12)
  topRatedMovies$ = this.movieService.getMoviesByType('top_rated', 12)
  popularTvShows$ = this.tvShowsService.getTvShowsByType('popular', 12).pipe(
    map(mapToMovies)
  )
}

import { MoviesService } from '../../services/movies/movies.service'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, map } from 'rxjs'
import { Movie } from '../../types/movie'
import { IMAGES_SIZES } from '../../constants/images-sizes'
import { Video } from '../../types/video'
import { Image } from '../../types/image'
import { Actor } from '../../types/credits'
import { mapToMovie, mapToMovies } from '../../types/tvShow'
import { TvshowsService } from '../../services/tv_shows/tvshow.service'

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = ''
  imagesSizes = IMAGES_SIZES

  showType: 'tv' | 'movie' = 'movie'

  show$: Observable<Movie> | null = null
  showVideos$: Observable<Video[]> | null = null
  showImages$: Observable<Image[]> | null = null
  showCast$: Observable<Actor[]> | null = null
  similarShows$: Observable<Movie[]> | null = null;

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,
    private tvService: TvshowsService,
  ) {}

  ngOnInit(): void {
    this.showId = this.router.snapshot.params['id']
    this.showType = this.router.snapshot.params['type']

    if (this.showType === 'movie') {
      this.show$ = this.moviesService.getMovieById(this.showId)
      this.showVideos$ = this.moviesService.getMovieVideos(this.showId)
      this.showImages$ = this.moviesService.getMovieImages(this.showId)
      this.showCast$ = this.moviesService.getMovieCast(this.showId)
      this.similarShows$ = this.moviesService.getSimilarMovies(this.showId)
    }

    if (this.showType === 'tv') {
      this.show$ = this.tvService.getTvShowById(this.showId).pipe(map(mapToMovie))
      this.showVideos$ = this.tvService.geTvShowVideos(this.showId)
      this.showImages$ = this.tvService.geTvShowImages(this.showId)
      this.showCast$ = this.tvService.geTvShowCast(this.showId)
      this.similarShows$ = this.tvService
        .getSimilarTvShows(this.showId)
        .pipe(map(mapToMovies));
    }
  }
}

import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies/movies.service'
import { MoviesDTO } from '../../types/movie'
import { Observable, map } from 'rxjs'
import { PaginatorState } from 'primeng/paginator'
import { ActivatedRoute } from '@angular/router'
import { TvshowsService } from '../../services/tv_shows/tvshow.service'
import {  mapToMovieDTO } from '../../types/tvShow'

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private tvShowService: TvshowsService
  ) {}

  showsList$: Observable<MoviesDTO> | null = null
  searchValue = ''
  rows = 20
  showType: 'movie' | 'tv' = 'movie'

  ngOnInit() {
    this.showType = this.route.snapshot.params['type']
    this.getPagedShows(this.showType, 1)
  }

  getPagedShows(
    showsType: 'movie' | 'tv',
    page: number,
    searchKeyword?: string
  ) {
    if (showsType === 'movie') {
      this.showsList$ = this.moviesService.searchMovies(page, searchKeyword);
    }
    if (showsType === 'tv') {
      this.showsList$ = this.tvShowService
        .searchTvShow(page, searchKeyword)
        .pipe(map(mapToMovieDTO));
    }
  }

  searchMovie() {
    this.getPagedShows(this.showType, 1, this.searchValue)
  }

  onPageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1
    this.getPagedShows(this.showType, pageNumber, this.searchValue)
  }
}

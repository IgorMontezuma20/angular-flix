import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies/movies.service'
import { Movie } from '../../types/movie'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrl: './shows-list.component.scss',
})
export class ShowsListComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  showsList$: Observable<Movie[]> | null = null
  searchValue = ''
  rows = 20
  totalRecords = 120

  ngOnInit() {
    this.getPagedShows(1)
  }

  getPagedShows(page: number, searchKeyword?: string) {
    this.showsList$ = this.moviesService.searchMovies(page, searchKeyword)
  }

  searchMovie(){
    this.getPagedShows(1, this.searchValue)
  }

  onPageChange(event: any) {
    this.getPagedShows(event.page + 1, this.searchValue)
  }
}

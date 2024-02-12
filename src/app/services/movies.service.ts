import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDTO } from '../types/movie'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private api_url = 'https://api.themoviedb.org/3'
  private api_key = '60dc3814ec88818f2a6b586ca2c952f5'

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDTO>(
      `${this.api_url}/movie/popular?api_key=${this.api_key}`
    )
  }

  getUpcomingMovies() {
    return this.http.get<MoviesDTO>(
      `${this.api_url}/movie/upcoming?api_key=${this.api_key}`
    )
  }
}

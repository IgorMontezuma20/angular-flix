import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDTO } from '../types/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies(){
    return this.http.get<MoviesDTO>('https://api.themoviedb.org/3/movie/popular?api_key=60dc3814ec88818f2a6b586ca2c952f5')
  }
}

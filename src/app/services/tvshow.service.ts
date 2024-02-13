import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesDTO } from '../types/movie';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  private api_url = 'https://api.themoviedb.org/3'
  private api_key = '60dc3814ec88818f2a6b586ca2c952f5'
  private tv_show_language = 'pt-BR'

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20){
    return this.http.get<MoviesDTO>(
      `${this.api_url}/tv/${type}?api_key=${this.api_key}&language=${this.tv_show_language}`
    ).pipe(map((response) => response.results.slice(0, count)));
  }

}

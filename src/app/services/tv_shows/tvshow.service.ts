import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CreditsDTO } from '../../types/credits';
import { ImageDTO } from '../../types/image';
import { VideoDTO } from '../../types/video';
import { Tvshow, TvshowsDto } from '../../types/tvShow';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  private api_url = 'https://api.themoviedb.org/3'
  private api_key = '60dc3814ec88818f2a6b586ca2c952f5'
  private tv_show_language = 'pt-BR'

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20){
    return this.http.get<TvshowsDto>(
      `${this.api_url}/tv/${type}?api_key=${this.api_key}&language=${this.tv_show_language}`
    ).pipe(map((response) => response.results.slice(0, count)));
  }

  getTvShowById(id: string) {
    return this.http.get<Tvshow>(
      `${this.api_url}/tv/${id}?api_key=${this.api_key}&language=${this.tv_show_language}`
    );
  }

  geTvShowVideos(id: string) {
    return this.http.get<VideoDTO>(
      `${this.api_url}/tv/${id}/videos?api_key=${this.api_key}&language=${this.tv_show_language}`
    )
    .pipe(map((response) => response.results));
  }

  geTvShowImages(id: string) {
    return this.http.get<ImageDTO>(
      `${this.api_url}/tv/${id}/images?api_key=${this.api_key}`
    )
    .pipe(map((response) => response.backdrops));
  }
  geTvShowCast(id: string) {
    return this.http.get<CreditsDTO>(
      `${this.api_url}/tv/${id}/credits?api_key=${this.api_key}`
    )
    .pipe(map((response) => response.cast));
  }
  getSimilarTvShows(id: string) {
    return this.http
      .get<TvshowsDto>(`${this.api_url}/tv/${id}/similar?api_key=${this.api_key}&language=${this.tv_show_language}`)
      .pipe(map((data) => data.results.slice(0, 12)));
  }
  searchTvShow(page: number, searchKeyword?: string) {
    const uri = searchKeyword ? '/search/tv' : '/tv/popular';
    return this.http.get<TvshowsDto>(`${this.api_url}${uri}?page=${page}&query=${searchKeyword}&api_key=${this.api_key}&language=${this.tv_show_language}`);
  }
}


import { Movie } from "./movie";

export type TvShow = {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
  name: string;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
}

export type TvShowsDTO = {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}

export function mapToMovies(tvShows: TvShow[]): Movie[]{
  return tvShows.map((tvShow: TvShow) => {
    return {
      ...tvShow,
      title: tvShow.name,
      original_title: tvShow.original_name,
    }
  })
}

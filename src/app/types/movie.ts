export type Movie = {
  id: number;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  poster_path: string;
  title: string;
  name?: string;
  vote_average: number;
  vote_count: number;
}

export type MoviesDTO = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

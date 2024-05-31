interface Genre {
  id: number;
  name: string;
}

export interface AllMovieDetails {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  status?: string;
  production_companies?: Genre[];
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  runtime?: number;
  genres?: Genre[];
}

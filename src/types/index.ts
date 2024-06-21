export type Endpoint = "auth" | "now_playing" | "top_rated";

export type AuthResponse = {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
};

export type UseFetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  fetchData: () => void;
};

type DateRange = {
  maximum: string;
  minimum: string;
};

export type Movie = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
};

export type MovieDetail = {
  id: number;
  backdrop_path: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline: string;
  title: string;
  vote_average: number;
  vote_count: number;
};

export type NowPlayingResponse = {
  dates: DateRange;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type TopRatedResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type RecommendationsResponse = TopRatedResponse;

export type MovieStore = Movie;

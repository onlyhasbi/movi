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

export type Endpoint = "auth" | "now_playing" | "top_rated";

import { useCallback, useState } from "react";
import { getRequest } from "../services/base.service";
import { Endpoint, UseFetchResult } from "../types/base";

type Props<T> = {
  key: Endpoint | "recommendations";
  series_id?: string;
  callback?: {
    onSuccess?: (data: T) => void;
    onError?: (err: string) => void;
  };
};

function useFetch<T>({
  key,
  series_id,
  callback,
}: Props<T>): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(() => {
    setIsLoading(true);
    setError(null);

    getRequest(key, series_id)
      .then((response) => response.json())
      .then((data) => {
        callback?.onSuccess?.(data);
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        callback?.onError?.(err);
        setError(err.message || "Something went wrong");
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, series_id]);

  return { data, isLoading, error, fetchData };
}

export default useFetch;

import { useCallback, useState } from "react";
import { getAuthService } from "../services/base.service";
import { AuthResponse } from "../types/base";

const useAuth = ({ enabled }: { enabled: boolean }) => {
  const [authenticated, setAuthenticated] = useState<AuthResponse>(
    {} as AuthResponse
  );
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const authenticate = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await getAuthService;
      setAuthenticated((await res.json()) as AuthResponse);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return { authenticated, error, isLoading, authenticate };
};

export default useAuth;

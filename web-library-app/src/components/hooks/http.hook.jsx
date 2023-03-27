import { useState, useCallback } from "react";

const useHttp = () => {
  // states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // methods
  const onRequest = useCallback(
    async (
      url,
      method = "GET",
      headers = { "Content-Type": "application/vnd.api+json" },
      body = null
    ) => {
      setLoading(true); // each request method our loading must be turn own state on true
      setError(false);

      try {
        const req = await fetch(url, { method, headers, body });

        if (!req.ok) {
          setLoading(true);
          return await req.json();
        }

        setLoading(false);
        return await req.json();
      } catch (err) {
        setLoading(false);
        setError(true);
        return err;
      }
    },
    []
  );

  const clearError = () => (error ? setError(false) : null);

  return { loading, error, onRequest, clearError };
};

export { useHttp };

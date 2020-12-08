import { useState, useCallback } from 'react';

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PUT';

const useFetch = <R>(url: string, method: Methods = 'GET'): [R, any, boolean, (body?: any) => Promise<void>] => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const requestUrl = url;

  const callFetch = useCallback(
    async (body?: any) => {
      try {
        const data =
          method === 'GET'
            ? await fetch(requestUrl)
            : await fetch(requestUrl, {
                method,
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
              });

        if (!data.ok) {
          throw new Error('data not ok');
        }
        const json = await data.json();
        setResponse(json);
      } catch (err) {
        setError(true);
      } finally {
       setLoading(false);
      }
    },
    [method, requestUrl]
  );

  return [response, error, loading, callFetch];
};

export default useFetch;

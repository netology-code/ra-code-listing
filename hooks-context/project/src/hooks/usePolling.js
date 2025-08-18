import { useEffect, useRef, useState } from 'react';

export default function usePolling(url, intervalMs = 5000, initialData = []) {
  const [data, setData] = useState(initialData);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);
  const tsRef = useRef();

  useEffect(() => {
    let canceled = false;

    const fetchData = async () => {
      const ts = Date.now();
      tsRef.current = ts;
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(res.statusText);
        const next = await res.json();
        if (!canceled && tsRef.current === ts) {
          setData(next);
          setError(null);
        }
      } catch (e) {
        if (!canceled) setError(e);
      } finally {
        if (!canceled) setLoading(false);
      }
    };

    fetchData();
    const id = setInterval(fetchData, intervalMs);
    return () => {
      canceled = true;
      clearInterval(id);
    };
  }, [url, intervalMs]);

  return { data, isLoading, hasError };
}
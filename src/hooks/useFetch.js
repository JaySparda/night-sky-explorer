import { useState, useEffect } from "react";
import { buildUrl, fetchData } from "../api/api";

export default function useFetch(endpoint, params = {}) {
  const [requestId, setRequestId] = useState(0);

  const [result, setResult] = useState({
    key: null,
    data: null,
    loading: true,
    error: null,
  });

  const url = buildUrl(endpoint, params);
  const key = `${url}::${requestId}`;

  function retry() {
    setRequestId((previous) => previous + 1);
  }

  useEffect(() => {
    const controller = new AbortController();

    async function loadData() {
      setResult({
        key,
        data: null,
        loading: true,
        error: null,
      });

      try {
        const data = await fetchData(url, controller.signal);

        if (!controller.signal.aborted) {
          setResult({
            key,
            data,
            loading: false,
            error: null,
          });
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setResult({
            key,
            data: null,
            loading: false,
            error: err.message || "Unable to load data.",
          });
        }
      }
    }

    loadData();

    return () => controller.abort();
  }, [url, key]);

  // Prevent outdated results from being displayed
  const isCurrent = result.key === key;

  return {
    data: isCurrent ? result.data : null,
    loading: !isCurrent || result.loading,
    error: isCurrent ? result.error : null,
    retry,
  };
}

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useURLParams(queryString = 'pathname') {
  const location = useLocation();
  const [query, setQuery] = useState(location[queryString]);

  useEffect(() => {
    if (queryString === 'search') {
      const searchParams = new URLSearchParams(location.search);
      const newParams = {};

      for (const [key, value] of searchParams) {
        newParams[key] = value;
      }
      setQuery(newParams);
    } else {
      const param = location[queryString].slice(1);
      setQuery(param);
    }
  }, [location]);

  return query;
}

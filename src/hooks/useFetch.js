import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [verbs, setVerbs] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setVerbs(json.data);
        setIsLoading(false);
      });
  }, [url]);

  return { verbs, isLoading };
};

export default useFetch;

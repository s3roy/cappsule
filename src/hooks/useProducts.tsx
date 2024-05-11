import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '@/utils/constant';

const useProducts = (query: string) => {
  const [data, setData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return; // Don't fetch if the query is empty

    setLoading(true);
    axios
      .get(`${BASE_URL}/new_search?q=${query}&pharmacyIds=1,2,3`)
      .then((response) => {
        setData(response.data.data); // Adjust according to actual API response structure
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [query]); // Refetch when query changes

  return { data, loading, error };
};

export default useProducts;

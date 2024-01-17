// CustomHook.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiData = (apiUrl) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
      try {
        setLoading(true);

        // Use axios for the API request
        axios.post(apiUrl)
        .then( res => {
          if( res.status === 200 ){
            setData(res.data)
          }
        })
        .catch(error => {
          setError(error)
        })

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    
  }, [apiUrl]);

  return { data, loading, error };
};

export default useApiData;

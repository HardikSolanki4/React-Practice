import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendRequest = useCallback(async (requestPara, returnResponse) => {
    try {
      setIsLoading(true);
      const response = await fetch(requestPara.url, {
        method: requestPara.method ? requestPara.method : 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: requestPara.body ? JSON.stringify(requestPara.body) : null,
      });

      console.log(response);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        throw new Error('API Fail:', Error);
      }

      const data = await response.json();
      setIsLoading(false);
      returnResponse(data);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      throw new Error('API Fail:', Error);
    }
  }, []);

  return {
    isError,
    isLoading,
    sendRequest,
  };
};

export default useHttp;

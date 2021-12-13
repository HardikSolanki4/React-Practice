import { useCallback, useReducer } from 'react';

function httpsReducer(state, action) {
  if (action.type === 'SEND') {
    return {
      status: 'pending',
      data: null,
      error: null,
    };
  }
  if (action.type === 'SUCCESS') {
    return {
      status: 'completed',
      data: action.responseData,
      error: null,
    };
  }
  if (action.type === 'ERROR') {
    return {
      status: 'completed',
      data: null,
      error: action.error,
    };
  }
  return state;
}

const useHttps = (requestFunction, startWithPending = false) => {
  const [httpState, httpDispatch] = useReducer(httpsReducer, {
    status: startWithPending ? 'pending' : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData) => {
      httpDispatch({ type: 'pending' });
      try {
        const responseData = await requestFunction(requestData);
        httpDispatch({ type: 'SUCCESS', responseData });
      } catch (error) {
        httpDispatch({
          type: 'ERROR',
          errorMessage: error.message || 'Some thing went wrong',
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttps;

import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../components/hooks/use-http';
import { addQuote } from '../components/lib/api';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuotes = () => {
  const history = useHistory();

  const { sendRequest, status } = useHttp(addQuote);

  useEffect(() => {
    if (status === 'completed') {
      history.push('/quotes');
    }
  }, [status, history]);

  const addQuoteHandler = (data) => {
    sendRequest(data);
  };
  return (
    <div>
      <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    </div>
  );
};

export default NewQuotes;

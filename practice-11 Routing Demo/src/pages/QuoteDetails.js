import { useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import useHttp from '../components/hooks/use-http';
import { getSingleQuote } from '../components/lib/api';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetails = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quotesId } = params;

  const {
    status,
    data: loadSingleQuote,
    error,
    sendRequest,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quotesId);
  }, [sendRequest, quotesId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className='centered focused'>{error}</div>;
  }

  if (!loadSingleQuote.text || !loadSingleQuote.author) {
    return <div className='centered focused'>No Quotes Found</div>;
  }

  return (
    <div>
      <HighlightedQuote
        text={loadSingleQuote.author}
        author={loadSingleQuote.text}
      />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}comment`}>
            Load Comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.url}/comment`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;

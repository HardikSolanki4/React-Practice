import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
// import AllQuotes from './pages/AllQuotes';
// import NewQuotes from './pages/NewQuotes';
// import QuoteDetails from './pages/QuoteDetails';
// import NotFound from './pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

// lazy loading
const NewQuotes = React.lazy(() => import('./pages/NewQuotes'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className='centred'>
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:quotesId'>
            <QuoteDetails />
          </Route>
          <Route path='/add-quotes'>
            <NewQuotes />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;

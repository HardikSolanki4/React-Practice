import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuotes';
import QuoteDetails from './pages/QuoteDetails';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;

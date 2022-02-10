import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderNavBar from '../component/NavBar/NavBar';
import { Container } from 'react-bootstrap';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HeaderNavBar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;

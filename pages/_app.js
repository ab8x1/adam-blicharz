import App from '../src/components/App';
import '../src/styles/global.css';

function MyApp({ Component, pageProps }) {
  return(
    <App>
        <Component {...pageProps} />
    </App>
  )
}

export default MyApp

import '../styles/globals.css';

import { GlobalStyles } from 'twin.macro';

function App({ children }) {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  );
}

function Render({ Component, pageProps }) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default Render;

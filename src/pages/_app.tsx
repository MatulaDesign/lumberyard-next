import '../styles/globals.css';

import { GlobalStyles } from 'twin.macro';

const App = ({ children }) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
);

const Render = ({ Component, pageProps }) => (
  <App>
    <Component {...pageProps} />
  </App>
);

export default Render;

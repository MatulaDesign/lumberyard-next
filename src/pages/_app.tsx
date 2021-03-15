import { GlobalStyles } from 'twin.macro';

import '@styles/globals.css';

import { Position } from '@containers';

const App = ({ children }) => (
  <Position>
    <GlobalStyles />
    {children}
  </Position>
);

const Render = ({ Component, pageProps }) => (
  <App>
    <Component {...pageProps} />
  </App>
);

export default Render;

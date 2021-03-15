import { GlobalStyles } from "twin.macro";

import "../styles/globals.css";

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

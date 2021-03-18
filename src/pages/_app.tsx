import { GlobalStyles } from 'twin.macro';
import { FuegoProvider } from '@nandorojo/swr-firestore';

import 'firebase/firestore';
import 'firebase/auth';

import '@styles/globals.css';

import { remote } from '@storage';
import { Position, Visitor, Persona } from '@containers';

const Structure = ({ children }) => (
  <FuegoProvider fuego={remote.firebase}>
    <Position>
      <Visitor>
        <Persona>
          <GlobalStyles />
          {children}
        </Persona>
      </Visitor>
    </Position>
  </FuegoProvider>
);

const Render = ({ Component, pageProps }) => (
  <Structure>
    <Component {...pageProps} />
  </Structure>
);

export default Render;

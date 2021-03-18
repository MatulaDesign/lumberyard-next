import * as React from 'react';
import { useDocument } from '@nandorojo/swr-firestore';

import { store, cookies } from '@storage';

export default function Persona({ children }) {
  const persona = store.use(store.get.visitor).data.persona;
  const firstVisit = cookies.get('persona') !== persona?.uuid;

  const { set } = useDocument<IVisitorCert>(
    firstVisit && persona ? `visitors/${persona.uid}` : null,
  );

  React.useEffect(() => {
    if (firstVisit) {
      set(persona);
    }
  }, [persona]);

  return <>{children}</>;
}

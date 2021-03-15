import * as React from 'react';

import { position } from '@geo';

export default function Position({ children }) {
  React.useEffect(() => {
    position.get();
  }, []);

  return <>{children}</>;
}

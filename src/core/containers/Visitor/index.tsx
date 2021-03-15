import * as React from 'react';

import { store } from '@storage';
import seeVisitor from './see-visitor';
import checkVisitor from './check-visitor';

export default function Visitor({ children }) {
  const { data, status } = store.use(store.get.visitor);

  React.useEffect(() => {
    if (!data.isSeen && status.type !== 'loading') seeVisitor();
    else if (!data.persona) checkVisitor();
  }, [data.isSeen, status.type]);

  return <>{children}</>;
}

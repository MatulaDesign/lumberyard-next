import email from './email';

import { remote, store } from '@storage';

const auth = {
  ...email,
  signout: () => {
    store.set.status('user', 'loading');
    remote.firebase
      .auth()
      .signOut()
      .then(() => {
        store.set.user((data) => {
          data.profile = null;
        });
        store.set.status('user', 'idle');
      })
      .catch((error) => {
        store.set.status('user', 'error', error);
      });
  },
};

export default auth;

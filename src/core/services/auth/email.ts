import { certificate } from '@helpers';
import { remote, store } from '@storage';

const operator = {
  signup: (creds: ICreds) => {
    store.set.status('user', 'loading');
    remote.firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then((user) => {
        const pos = store.get.geo.data.position;
        store.set.user((data) => {
          data.profile = certificate.user(user, pos);
        });
        store.set.status('user', 'success');
      })
      .catch((error) => {
        store.set.status('user', 'error', error);
      });
  },
  signin: (creds: ICreds) => {
    store.set.status('user', 'loading');
    remote.firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then((user) => {
        const pos = store.get.geo.data.position;
        store.set.user((data) => {
          data.profile = certificate.user(user, pos);
        });
        store.set.status('user', 'success');
      })
      .catch((error) => {
        store.set.status('user', 'error', error);
      });
  },
  reset: (email: string) => {
    remote.firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // TODO send to alert system that reset email was sent
      })
      .catch((error) => {
        store.set.status('user', 'error', error);
      });
  },
};

export default operator;

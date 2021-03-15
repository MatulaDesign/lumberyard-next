import { remote, store } from '@storage';

export default function seeVisitor() {
  store.set.status('visitor', 'loading');
  remote.firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      store.set.visitor((data) => {
        data.isSeen = true;
      });
    })
    .catch((error) => {
      store.set.status('visitor', 'error', error);
    });
}

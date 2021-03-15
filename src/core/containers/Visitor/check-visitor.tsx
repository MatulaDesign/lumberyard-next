import { remote, store } from '@storage';
import { prepareCertificate } from '@helpers';

export default function checkVisitor() {
  remote.firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.set.visitor((data) => {
        data.persona = prepareCertificate(user);
      });
      store.set.status('visitor', 'success');
    }
  });
}

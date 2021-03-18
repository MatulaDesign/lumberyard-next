import { remote, store, cookies } from '@storage';
import { certificate } from '@helpers';

export default function checkVisitor() {
  remote.firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const pos = store.get.geo.data.position;
      const persona = certificate.visitor(user, pos);
      store.set.visitor((data) => {
        data.persona = persona;
      });
      cookies.set('persona', persona.uuid);
      store.set.status('visitor', 'success');
    }
  });
}

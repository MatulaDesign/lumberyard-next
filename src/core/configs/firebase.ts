import firebase from 'firebase/app';

const FirebaseInitialConfig = {
  apiKey: 'AIzaSyDUhxFOLlrP5hROuOgZvvFHDB6Dus7q6tc',
  authDomain: 'equiterra-core.firebaseapp.com',
  projectId: 'equiterra-core',
  storageBucket: 'equiterra-core.appspot.com',
  messagingSenderId: '680948771760',
  appId: '1:680948771760:web:a9a8066afaab7a918c4475',
  measurementId: 'G-0MKXT40SZV',
};

type Config = Parameters<typeof firebase.initializeApp>[0];

export default class FirebaseConfig {
  public db: ReturnType<firebase.app.App['firestore']>;
  public auth: typeof firebase.auth;
  public functions: typeof firebase.functions;
  public storage: typeof firebase.storage;
  public api: typeof firebase;

  constructor(config: Config = FirebaseInitialConfig) {
    this.db = !firebase.apps.length
      ? firebase.initializeApp(config).firestore()
      : firebase.app().firestore();
    this.auth = firebase.auth;
    this.functions = firebase.functions;
    this.storage = firebase.storage;
    this.api = firebase;
  }
}

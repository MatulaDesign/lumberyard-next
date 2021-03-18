# @lumberyard/lumberyard-core API

## Menu:

| [1. configs](#1.-configs)<br>
|-- [1.1 firebase](#1.1-firebase)<br>
| [2. services](#2.-services)<br>
|-- [2.1 storage](#2.1.1-store)<br>
|---- [2.1.1 store](#2.1.1-store)<br>
|------ [store example](#store-example)<br>
|---- [2.1.2 cookies](#2.1.2-cookies)<br>
|---- [2.1.3 remote](#2.1.3-remote)<br>

## 1. configs

`Configs API` is a module that holds various configurations used in this project.

### `1.1 import { FirebaseConfig } from "@configs"`

## 2. services

`Services API` consists of application's internal services.

### `2.1 import { store, remote, cookies } from "@storage"`

`@storage` is a bundle of various modules that persist data

#### `2.1.1 store`

`store` is based on [valtio]() plugin. Valtio is a proxy that listens to data changes and allows for both react and vanillaJS data operations.

##### `store.get` - returns `store` object with state properties

##### `store.set` - returns `store` object with state properties

##### `store.use` - hijacks valtio's `useSnapshot` hook - !!!use inside react components!!!

##### store example:

```typescript
import { proxy, useSnapshot } from 'valtio';

const stateOne = { one: null };
const stateTwo = { two: false };

const store = {
  one: proxy(stateOne),
  two: proxy(stateTwo),
};

const operator = {
  get: store,
  set: {
    status: (key, type, msg = undefined) => {
      store[key].status = { type, msg };
    },
    geo: (update) => update(store.geo.data),
    visitor: (update) => update(store.visitor.data),
  },
  use: useSnapshot,
};

export default operator;
```

#### `2.1.2 cookies`

`cookies` is based on [js-cookie](https://github.com/js-cookie/js-cookie) plugin. This internal module is just a hijack of `import Cookies from 'js-cookie'`, so that it matches syntactically to the rest of the `storage` API

#### `2.1.3 remote`

`remote` provides connection to external storages

##### `remote.firebase` - creates new instance of FirebaseConfig class

`FirebaseConfig` sets up firebase connection using `FirebaseInitialConfig` which should be an object with `{ apiKey: ..., authDomain: ..., etc }` and plugs into `firebase`'s internal API.

```typescript
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
```

### `2.2 import { position } from "@geo"`

`@geo` is responsible from grabbing visitor's position

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

import { proxy, useSnapshot } from 'valtio';

const extendState = <T = unknown>(data: T): IState<T> => ({
  data,
  status: { type: 'idle' },
});

const state = extendState({ position: undefined });

const store = {
  state: proxy(state),
};

type S = typeof store;
type State = (data: S['state']['data']) => void;

const operator = {
  get: store as S,
  set: {
    status: (key: keyof S, type: IStatus['type'], msg?: IStatus['msg']) => {
      store[key].status = { type, msg };
    },
    state: (update: State) => update(store.state.data),
  },

  use: useSnapshot,
};

export default operator;

import { proxy, useSnapshot } from 'valtio';

const stateStatus = <T = unknown>(data: T): IState<T> => ({
  data,
  status: { type: 'idle' },
});

const geoState = stateStatus<IGeo>({ position: null });

const store = {
  geo: proxy(geoState),
};

type S = typeof store;
type Geo = (data: S['geo']['data']) => void;

const operator = {
  get: store as S,
  set: {
    status: (key: keyof S, type: IStatus['type'], msg?: IStatus['msg']) => {
      store[key].status = { type, msg };
    },
    geo: (update: Geo) => update(store.geo.data),
  },

  use: useSnapshot,
};

export default operator;

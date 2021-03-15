import { proxy, useSnapshot } from 'valtio';

const stateStatus = <T = unknown>(data: T): IState<T> => ({
  data,
  status: { type: 'idle' },
});

const geoState = stateStatus<IGeo>({ position: null });
const visitorState = stateStatus<IVisitor>({ isSeen: false, persona: null });

const store = {
  geo: proxy(geoState),
  visitor: proxy(visitorState),
};

type S = typeof store;
type Geo = (data: S['geo']['data']) => void;
type Vis = (data: S['visitor']['data']) => void;

const operator = {
  get: store as S,
  set: {
    status: (key: keyof S, type: IStatus['type'], msg?: IStatus['msg']) => {
      store[key].status = { type, msg };
    },
    geo: (update: Geo) => update(store.geo.data),
    visitor: (update: Vis) => update(store.visitor.data),
  },

  use: useSnapshot,
};

export default operator;

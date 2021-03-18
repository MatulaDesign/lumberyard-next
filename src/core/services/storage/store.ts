import { proxy, useSnapshot } from 'valtio';

const stateStatus = <T = unknown>(data: T): IState<T> => ({
  data,
  status: { type: 'idle' },
});

const geoState = stateStatus<IGeo>({ position: null });
const userState = stateStatus<IUser>({ profile: null });
const visitorState = stateStatus<IVisitor>({ isSeen: false, persona: null });

const store = {
  geo: proxy(geoState),
  user: proxy(userState),
  visitor: proxy(visitorState),
};

type S = typeof store;
type Geo = (data: S['geo']['data']) => void;
type User = (data: S['user']['data']) => void;
type Vis = (data: S['visitor']['data']) => void;

const operator = {
  get: store as S,
  set: {
    status: (key: keyof S, type: IStatus['type'], msg?: IStatus['msg']) => {
      store[key].status = { type, msg };
    },
    geo: (update: Geo) => update(store.geo.data),
    user: (update: User) => update(store.user.data),
    visitor: (update: Vis) => update(store.visitor.data),
  },

  use: useSnapshot,
};

export default operator;

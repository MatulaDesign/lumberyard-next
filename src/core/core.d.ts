type IStatus = {
  type: 'idle' | 'loading' | 'success' | 'error';
  msg?: Error | string;
};
type IState<T = unknown> = { data: T; status: IStatus };

type IGeo = {
  position: GeolocationPosition | null;
};

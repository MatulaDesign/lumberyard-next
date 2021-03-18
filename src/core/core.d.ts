type IStatus = {
  type: 'idle' | 'loading' | 'success' | 'error';
  msg?: Error | string;
};
type IState<T = unknown> = { data: T; status: IStatus };

type IGeo = {
  position: GeolocationPosition | null;
};

interface IVisitorCert {
  uid: string;
  uuid: string;
  email: string | null;
  position?: IGeo['position'];
}
interface IUserCert extends IVisitorCert {
  photoURL: string | null;
  isAnonymous: boolean;
  displayName: string | null;
  emailVerified: boolean;
  refreshToken: string;
}

type IVisitor = Partial<{
  isSeen: boolean;
  persona: IVisitorCert;
}>;

type IUser = Partial<{
  profile: IUserCert | null;
}>;

type ICreds = {
  email: string;
  password: string;
};

type IStatus = {
  type: 'idle' | 'loading' | 'success' | 'error';
  msg?: Error | string;
};
type IState<T = unknown> = { data: T; status: IStatus };

type IGeo = {
  position: GeolocationPosition | null;
};
type IUserCertificate = {
  uid: string;
  email: string | null;
  photoURL: string | null;
  isAnonymous: boolean;
  phoneNumber: string | null;
  displayName: string | null;
  emailVerified: boolean;
  refreshToken: string;
} | null;
type IVisitor = Partial<{
  isSeen: boolean;
  persona: IUserCertificate;
}>;

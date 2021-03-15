export default function prepareCertificate(user: any): IUserCertificate {
  return user
    ? {
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous,
        phoneNumber: user.phoneNumber,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        refreshToken: user.refreshToken,
      }
    : null;
}

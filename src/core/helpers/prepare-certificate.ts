import uuid from 'uuid-random';

function visitor(vis: any, pos = undefined): IVisitorCert {
  return {
    uuid: uuid(),
    uid: vis.uid,
    email: vis.email,
    position: pos,
  };
}

function user(vis: any, pos = undefined): IUserCert {
  return {
    ...visitor(vis, pos),
    displayName: vis.displayName,
    emailVerified: vis.emailVerified,
    refreshToken: vis.refreshToken,
    photoURL: vis.photoURL,
    isAnonymous: vis.isAnonymous,
  };
}

export default { visitor, user };

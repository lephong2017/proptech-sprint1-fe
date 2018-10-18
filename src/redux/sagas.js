import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import userSagas from './admin/user/saga';
import blogSagas from './admin/blog/saga';
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    userSagas(),
    blogSagas(),
  ]);
}

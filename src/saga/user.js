import { takeEvery, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { GET_USER_INFO, SET_USER_INFO } from '@/actions/user';

function* handleSetUser(action) {
  // 调用API什么，有副总用的操作都可以在saga中完成
  console.log('设置用户信息saga');
  yield call(delay, 3000);
  const user = {
    name: '李杰',
    age: 20
  };
  yield put({type: SET_USER_INFO, user})
}

function* userSaga(action) {
  yield takeEvery(GET_USER_INFO, handleSetUser)
}

export default userSaga;
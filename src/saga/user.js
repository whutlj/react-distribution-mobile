import { takeEvery, call, put, select, take } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { getUser } from '@/assets/js/mockApi';
import {
  GET_USER_INFO,
  SET_USER_INFO,
  SET_USER_STATUS,
  UPDATA_USER_STATUS
} from '@/actions/user';

function* handleSetUser(action) {
  // 调用API什么，有副总用的操作都可以在saga中完成
  const param = {
    token: 'editor'
  };
  const user = yield call(getUser, param);
  yield put({ type: SET_USER_INFO, user });
}

function* getStateTest(action) {
  const state = yield select(); // 获取state
  console.log(state);
}

function* serUserStatus(action) {
  yield put({ type: UPDATA_USER_STATUS, status: action.status });
}
// (push模式)使用takeEvery情况，被调用的任务无法控制何时被调用，在匹配时一次一次呗调用，并且无法控制何时停止监听。action被推向任务处理函数
function* userSaga(action) {
  yield takeEvery(GET_USER_INFO, handleSetUser);
  yield takeEvery(SET_USER_STATUS, serUserStatus);
  yield takeEvery('take_task', getStateTest);
  yield LoginFlow();
}
// (pull模式)使用take将暂停generator，直到对应的action触发，Saga主动拉取action
function* LoginFlow() {
  while (true) {
    yield take('LOGIN');
    console.log('登录了');
    yield take('LOGOUT');
    console.log('退出了');
  }
}
export default userSaga;

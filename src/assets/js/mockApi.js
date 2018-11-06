import { normalRequest } from './fetch';

export function getUser(param) {
  return normalRequest.get('/user/getUserInfo', param);
}

export function getBannerList() {
  return normalRequest.get('/home/getBannerList');
}
export function getHotSource() {
  return normalRequest.get('/home/getHotSource');
}

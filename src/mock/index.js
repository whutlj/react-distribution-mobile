import Mock from 'mockjs';
import userApi from './user';
import homeApi from './home';

Mock.mock(/\/user\/getUserInfo/, 'get', userApi.getUserInfo);
Mock.mock(/\/home\/getBannerList/, 'get', homeApi.getBannerList);
Mock.mock(/\/home\/getHotSource/, 'get', homeApi.getHotSource);
console.log('mock------------');

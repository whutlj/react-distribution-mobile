import { param2Obj } from '@/utils';
const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    token: 'editor',
    introduction: '我是编辑',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
};

export default {
  getUserInfo: (options) => {
    // get接口获取url，post接口获取body
    const { token } = param2Obj(options.url);
    if (userMap[token]) {
      return userMap[token];
    } else {
      return false;
    }
  }
};

import Cookie from 'js-cookie';

export default {
  setCookie(name, value) {
    Cookie.set(name, value);
  },
  getCookie(name) {
    Cookie.get(name);
  },
  removeCookie(name) {
    Cookie.remove(name);
  }
};

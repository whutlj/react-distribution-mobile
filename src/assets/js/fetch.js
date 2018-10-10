import axios from 'axios';
import md5 from 'blueimp-md5';
import qs from 'qs';
import memory from './memory.js';
const AppKey = 'joker';

const setNonce = () => {
  const data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  let result = '';
  for (let j = 0; j < 500; j++) {
    result = '';
    for (let i = 0; i < 9; i++) {
      let r = Math.floor(Math.random() * 16);
      result += data[r];
    }
  }
  return result;
};

/**
 * 参数加密
 * @param {String} 访问的url
 * @param {Object}
 */
const sortOptions = (url, options = {}) => {
  const arr = [];
  for (let o in options) {
    if (typeof o === 'object') {
      arr.push(o.trim());
    } else {
      arr.push(o.trim());
    }
  }
  arr.sort();
  let objParameter = {};
  let code = '';
  if (url.indexOf('http://') === 0) {
    code += url.slice(url.indexOf('/', 7)) + '?AppKey=' + AppKey;
  } else if (url.indexOf('https://') === 0) {
    code += url.slice(url.indexOf('/', 8)) + '?AppKey=' + AppKey;
  } else {
    code = url + '?AppKey=' + AppKey;
  }
  for (let i = 0; i < arr.length; i++) {
    let _this = arr[i];
    objParameter[_this] = options[_this];
    code += '&' + _this + '=' + options[_this];
  }
  let nonce = setNonce();
  objParameter['nonce'] = nonce;
  code += '&nonce=' + nonce;
  objParameter['xyz'] = md5(code);
  return {
    objParameter: objParameter
  };
};

const CancelToken = axios.CancelToken;
const pending = {};
const createApi = (options = {}) => {
  const formData = typeof options.formData === 'boolean' ? options.formData : true;
  const conf = Object.assign(
    {},
    {
      transformRequest: [
        (data) => {
          if (formData) {
            return qs.stringify(data);
          }
          return data;
        }
      ]
    },
    options
  );
  const instance = axios.create(conf);

  instance.interceptors.request.use((config) => {
    if (config.url) {
      const url = config.url;
      if (!config.noCancel) {
        removePending(url);
        config.cancelToken = new CancelToken((cancel) => {
          pending[url] = cancel;
        });
      }
      // 处理参数
      if (config.method === 'post') {
        config.data = sortOptions(url, config.data).objParameter;
      }
      if (config.method === 'get') {
        config.params = sortOptions(url, config.params).objParameter;
      }
    }
    return config;
  });

  instance.interceptors.response.use((response) => {
    const res = response.data.value;
    const code = res.code;
    const message = res.message;
    const data = res.data;
    let resData = '';
    if (code === '000000') {
      resData = data;
    } else if (code === '000999') {
      window.location.href = 'http://dev.main.newrank.cn/public/login/login.html?back=' + encodeURIComponent(window.location.href);
    } else if (code === '000998') {
      resData = { tips: true, message: message };
    } else if (code === '000997') {
      window.location.href = memory.rootUrl.esc + 'u.html';
    } else if (code === '000001' || code === '999999') {
      window.location.href = memory.rootUrl.main + 'error.html';
    } else if (code === '000995') {
      var resError = res;
      resError.businessError = 'businessError';
      resData = resError;
    } else {
      resData = res;
    }
    response.data = resData;
    if (!response.config.noCancel && response.config.url) {
      removePending(response.config.url);
    }
    return response;
  });
  return instance;
};
/**
 * 避免多次调用
 * @param {String} 访问的url
 */
const removePending = (url) => {
  if (pending[url]) {
    pending[url]();
    delete pending[url];
  }
};

const api = createApi();
const noCancelApi = createApi({ noCancel: true });
const request = {};
const requestNoCancel = {};
request.post = async (url, param) => {
  const result = await api.post(url, param);
  return result.data;
};
request.get = async (url, param) => {
  const result = await api.get(url, { params: param });
  return result.data;
};
requestNoCancel.post = async (url, param) => {
  const result = await noCancelApi.post(url, param);
  return result.data;
};
requestNoCancel.get = async (url, param) => {
  const result = await noCancelApi.get(url, { params: param });
  return result.data;
};
const normalRequest = {};
normalRequest.get = async (url, param) => {
  const result = await axios({
    url: url,
    method: 'get',
    params: param
  });
  return result.data;
};
normalRequest.post = async (url, param) => {
  const result = await axios({
    url: url,
    method: 'post',
    data: param
  });
  return result.data;
};

export { api, request, requestNoCancel, normalRequest };

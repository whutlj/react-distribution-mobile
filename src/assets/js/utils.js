import { Toast } from 'antd-mobile';

function typeOf(obj) {
  const toString = Object.prototype.toString;
  const map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}

function deepCopy(data) {
  const t = typeOf(data);
  let o;

  if (t === 'array') {
    o = [];
  } else if (t === 'object') {
    o = {};
  } else {
    return data;
  }

  if (t === 'array') {
    for (let i = 0; i < data.length; i++) {
      o.push(deepCopy(data[i]));
    }
  } else if (t === 'object') {
    for (let i in data) {
      o[i] = deepCopy(data[i]);
    }
  }
  return o;
}

function round(num, len) {
  const re = Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
  return re;
}

function vw(props) {
  const result = props.replace(/(\d+)px/g, (match, group) => {
    return round(parseFloat(group) / 3.75, 5) + 'vw';
  });
  return result;
}

function loadingOpen(content) {
  Toast.loading(content || '加载中', 0);
}

function loadingClose() {
  Toast.hide();
}

/**
 * 根据后台返回的课程type，返回类型名称
 */
function num2Type(type) {
  let result = '';
  type = type.split(',')[0];
  switch (type) {
    case '1':
      result = '课程';
      break;
    case '2':
      result = '漫画';
      break;
    case '3':
      result = '小说';
      break;
    case '4':
      result = '创新课程';
      break;
    default:
      result = '课程';
  }
  return result;
}

export { deepCopy, vw, loadingOpen, loadingClose };

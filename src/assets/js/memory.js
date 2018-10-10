/**
 * Created by liufeng on 2018/3/10.
 */
const globalObj = (function() {
  String.HasText = function(str) {
    try {
      if (typeof str === 'undefined') return false;
      if (str === null) return false;
      if (str === 'null') return false;
      if (str === 'undefined') return false;

      if (typeof str === 'string') str = str.replace(/(^\s*)|(\s*$)/g, '');
      if (str === '') return false;
    } catch (e) {
      return false;
    }
    return true;
  };

  String.Trim = function(str) {
    if (String.HasText(str)) str = str.replace(/(^\s*)|(\s*$)/g, '');
    return str;
  };

  String.prototype.startWith = function(s) {
    if (s === null || s === '' || this.length === 0 || s.length > this.length) {
      return false;
    }
    if (this.trim().substr(0, s.length) === s) {
      return true;
    } else {
      return false;
    }
  };

  String.changeUrl = function(str, backgroundUrl, type, percent) {
    if (!str || typeof str !== 'string') return;
    if (backgroundUrl) {
      if (type === 'code') {
        return 'https://open.weixin.qq.com/qr/code?username=' + str;
      }
      return 'url(https://open.weixin.qq.com/qr/code?username=' + str + ') center/' + (percent ? percent : '500%') + ' no-repeat scroll';
    }
    var stype = 'head';
    if (type && typeof type === 'string') stype = type;
    var url = '';
    var a = str;
    if (str.length > 4) {
      url =
        a
          .substr(a.length - 4, a.length)
          .split('')
          .reverse()
          .join('/') +
        '/' +
        str;
    } else {
      url = 'a/' + str;
    }
    url = stype + '/' + url + '.png';
    if (stype === 'code') {
      return 'https://img-weixin-url.newrank.cn/img/' + url;
    }
    return 'url(https://img-weixin-url.newrank.cn/img/' + url + ') center/100% no-repeat scroll';
  };

  Date.prototype.Format = function(fmt) {
    var o = {
      'M+': this.getMonth() + 1, //月份
      'd+': this.getDate(), //日
      'h+': this.getHours(), //小时
      'm+': this.getMinutes(), //分
      's+': this.getSeconds(), //秒
      'q+': Math.floor((this.getMonth() + 3) / 3), //季度
      S: this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    return fmt;
  };

  String.prototype.parse = function() {
    if (!this) return '';
    return Date.parse(this.replace(/-/g, '/'));
  };
  (function() {
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function(callback, type, quality) {
          var binStr = atob(this.toDataURL(type, quality).split(',')[1]),
            len = binStr.length,
            arr = new Uint8Array(len);

          for (var i = 0; i < len; i++) {
            arr[i] = binStr.charCodeAt(i);
          }

          callback(new Blob([arr], { type: type || 'image/png' }));
        }
      });
    }
  })();

  // const url = {
  //   "login": 'http://localhost:200/',
  //   "main": 'http://dev.main.newrank.cn/',
  //   "admin":'http://localhost:84/',
  //   "edit":'http://localhost:81/',
  //   "copyright":'http://localhost:85/',
  //   "data":'http://localhost:86/',
  //   "common": "http://localhost:201/",
  //   "pay" : "http://localhost:202/",
  //   "report": "http://localhost:89/",
  //   "zz": "http://localhost:96/",
  //   "annual" : "http://localhost:204/",
  //   "demo" : "http://localhost:98/",
  //   "shop" : "http://localhost:206/",
  //   "original": "http://localhost:208/",
  //   "ade": "http://dev.a.newrank.cn",
  //   "kol": "http://localhost:212/",
  //   "esc":"http://localhost:213/"
  // };
  const rootUrl = {
    main: 'http://dev.main.newrank.cn/',
    ade: 'http://dev.a.newrank.cn/',
    esc: 'http://dev.esc.newrank.cn/',
    edit: 'http://dev.edit.newrank.cn/'
  };
  return {
    rootUrl: rootUrl,
    AppKey: 'joker',
    mdValue: 'daddy'
  };
})();

export default globalObj;

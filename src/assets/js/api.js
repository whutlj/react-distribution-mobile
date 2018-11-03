import { request, requestNoCancel, normalRequest } from './fetch';
const rootUrl = '/xdnphb/';
// const adeUrl = rootUrl + 'ade/v1/api/flowPacket/media/indent/';
// const accountUrl = rootUrl + 'ade/v1/api/flowPacket/media/account/';
// const oldUrl = rootUrl + 'ade/v1/api/flowPacket/';
// const verifyUrl = rootUrl + 'user/card/';
// const imgUrl = rootUrl + 'ade/v1/api/flowPacket/appeal/';
const phoneKnowUrl = rootUrl + 'knowledgepay/v1/api/distribution/phone/';
const knowUrl = rootUrl + 'knowledgepay/v1/api/distribution/';
const loginUrl = rootUrl + 'login/new/';
// const financeUrl = rootUrl + 'ade/v1/api/financeaccount/';
// const bankUrl = rootUrl + 'user/bank/';
// const profileUrl = rootUrl + 'user/profile/';
// const patchUrl = rootUrl + 'ade/v1/api/flowPacket/media/paster/';
// const tenderUrl = rootUrl + 'ade/v1/api/media/indent/manage/';
// const tixian_url = rootUrl + 'ade/v1/api/tixian/';
// const ade_new_url = rootUrl + 'ade/v1/api/media/account/';
// const financeCashUrl = rootUrl + 'ade/v1/api/financeaccount/account/';
// const codeUrl = rootUrl + 'login/new/';
// const timeUrl = rootUrl + 'ade/v1/api/adeInfo/';
// const authoredWeixinUrl = rootUrl + 'bind/weixin/';
// const mediaCenterUrl = rootUrl + 'ade/v1/api/media/user/center/';
// const bindWxUrl = rootUrl + 'login/wxyz/';
// const bindPhoneUrl = rootUrl + 'user/profile/';
// const AdeApi = {
//   common: {
//     getUser: async () => {
//       const url = rootUrl + 'common/account/get';
//       const result = await api.post(url);
//       return result.data;
//     }
//   }
// };

const getUser = () => {
  const url = rootUrl + 'common/account/get';
  return request.get(url);
};

/**
 *
 * @param {url} 获取分销列表
 * @param {param} 参数
 */
const getSource = (param) => {
  const url = phoneKnowUrl + 'get_source';
  return request.get(url, param);
};

/**
 * 获取分销数量
 */
const getSourceCount = (param) => {
  const url = phoneKnowUrl + 'get_source_count';
  return request.get(url, param);
};
/**
 *
 * @param {url} 获取分析子类型
 * @param {param} 参数
 */
const getType = () => {
  const url = knowUrl + 'getType';
  return request.get(url);
};
/**
 * 微信登录
 */
const weixinLoginPhone = (param) => {
  return request.post(`${loginUrl}weixinLoginPhone`, param);
};

/**
 * 获取分销精选课程
 */
const getHotSource = () => {
  return request.get(`${phoneKnowUrl}getHotSource`);
};

/**
 * param = {
 *  username: '',
 *  ticket: ''
 * }
 * 用户选择登录
 */
const loginChoose = (param) => {
  return request.post(`${loginUrl}loginChoose`, param);
};

/**
 * 加入分销
 */
const selectSourceForUrl = (param) => {
  return request.post(`${knowUrl}select_source_for_url`, param);
};

/**
 * 获取已选分销项目
 */
const getSelectSource = (param) => {
  return request.get(`${knowUrl}get_select_source`, param);
};

/**
 * 获取可提现金额
 */
const getStaticsData = (param) => {
  return request.get(`${knowUrl}get_statistics_indent_data`, param);
};

/**
 * 获取制作分销模板
 */
const getPosterList = (param) => {
  return request.get(`${knowUrl}getPosterList`, param);
};
/**
 *
 * @param {imgPath} 根据imgPath获取转化为base64位图片
 */
const getImageByte = (param) => {
  return requestNoCancel.get(`${knowUrl}getImageByte`, param);
};
/**
 *
 * @param {days} 时间分布图
 */
const getTimeDistribution = (param) => {
  return requestNoCancel.get(`${phoneKnowUrl}getTimeDistribution`, param);
};
/**
 *
 * @param 订单列表
 */
const getDistributionList = (param) => {
  return requestNoCancel.get(`${phoneKnowUrl}getDistributionList`, param);
};
/**
 *
 * @param {currentDay, nextPage} 订单详情
 */
const getDistributionIndentDetial = (param) => {
  return requestNoCancel.get(
    `${phoneKnowUrl}getDistributionIndentDetial`,
    param
  );
};

/**
 *
 * @param 获取banner
 */
const getBannerList = () => {
  return requestNoCancel.get(`${phoneKnowUrl}getBannerList`);
};

/**
 *
 * @param 获取当前账号个数
 */
const getSysUerSize = (param) => {
  return requestNoCancel.post(`${loginUrl}getSysUerSize`, param);
};

/**
 *
 * @param 获取模板渲染后的图片， '1' 代表成功
 */
const createShareAdeImage = (param) => {
  return requestNoCancel.post(`${phoneKnowUrl}createShareAdeImage`, param);
};

/**
 *
 * @param 查看订单详情后，时间区间选择
 */
const getUserIndentTimeArea = () => {
  return requestNoCancel.get(`${phoneKnowUrl}getUserIndentTimeArea`);
};
/**
 *
 * @param 查看订单详情后，时间区间选择
 */
const getSelectSourceCount = (param) => {
  return requestNoCancel.get(`${knowUrl}get_select_source_count`, param);
};

/**
 *
 * @param {value} 添加搜索记录
 */
const addSearchHistory = (param) => {
  return request.post(`${phoneKnowUrl}addSearchHistory`, param);
};

/**
 *
 * @param  获取搜索记录
 */
const getSerachHistoryList = (param) => {
  return request.post(`${phoneKnowUrl}getSerachHistoryList`, param);
};

/**
 *
 * @param 清空搜索记录
 */
const delAllSearchHistory = (param) => {
  return request.get(`${phoneKnowUrl}delAllSearchHistory`, param);
};
/**
 *
 * @param 根据id删除搜索记录
 */
const delSearchHistory = (param) => {
  return request.post(`${phoneKnowUrl}delSearchHistory`, param);
};

/**
 *
 * @param {url} 分享给朋友和朋友圈
 */
const getWxShare = (param) => {
  return normalRequest.get(`${rootUrl}login/wxyz/showdata`, param);
};

export {
  getSource,
  getType,
  getUser,
  weixinLoginPhone,
  getHotSource,
  getSourceCount,
  loginChoose,
  selectSourceForUrl,
  getSelectSource,
  getStaticsData,
  getPosterList,
  getImageByte,
  getTimeDistribution,
  getDistributionList,
  getDistributionIndentDetial,
  getBannerList,
  getSysUerSize,
  createShareAdeImage,
  getUserIndentTimeArea,
  getSelectSourceCount,
  addSearchHistory,
  getSerachHistoryList,
  delAllSearchHistory,
  getWxShare,
  delSearchHistory
};

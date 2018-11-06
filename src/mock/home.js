const bannerList = [
  {
    click_url: 'http://test.a.newrank.cn/distribution/catalog',
    img_name: '佣金高',
    img_url:
      'https://newranktest.oss-cn-hangzhou.aliyuncs.com/mainBanner/index/2018/09/19/4ad76388c6d04310a49955efe7f2628c.png?uuid=1537323571944.295',
    order_index: '10'
  },
  {
    click_url:
      'https://edit.newrank.cn/detail.html?uuid=F378C1B66D9305712927D92E376D64A8',
    img_name: '手机端操作指南',
    img_url:
      'https://newranktest.oss-cn-hangzhou.aliyuncs.com/mainBanner/index/2018/09/07/9aac8ae746ab44829b653af90f3d7ac2.png?uuid=1536304371061.6018',
    order_index: '0'
  },
  {
    click_url: 'http://test.a.newrank.cn/distribution/catalog',
    img_name: '操作简单',
    img_url:
      'https://newranktest.oss-cn-hangzhou.aliyuncs.com/mainBanner/index/2018/09/19/235914b7360a4bf98f3dd2afab9d71c2.png?uuid=1537323628982.0232',
    order_index: '5'
  }
];
export default {
  getBannerList: (options) => {
    console.log(bannerList);
    return bannerList;
  },
  getHotSource: (options) => {
    return [];
  }
};

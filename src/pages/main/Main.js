import React from 'react';
import { getBannerList, getHotSource } from '@/assets/js/api';
import { Carousel, Toast } from 'antd-mobile';
import Loadable from 'react-loadable';
import LoadingComponent from '@/components/common/LoadingComponent';
import PropTypes from 'prop-types';
import { loadingOpen, loadingClose } from '@/assets/js/utils';
import styled from 'styled-components';
import { vw } from '@/assets/js/utils';
// import '@/assets/css/home/main.css';
import cx from './img/cx_m.svg';
import kc from './img/kc_m.svg';
import xs from './img/xs_m.svg';
import mh from './img/mh_m.svg';

const HotSoure = Loadable({
  loader: () => import('./HotSource'),
  loading: LoadingComponent
});
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [],
      carousel: { show: false },
      sourceList: [],
      loading: false
    };
    this.initData = this.initData.bind(this);
    this.link2Catalog = this.link2Catalog.bind(this);
    this.link2Banner = this.link2Banner.bind(this);
  }

  componentDidMount() {
    this.initData();
  }

  initData() {
    this.setState({ loading: true });
    const bannderPromise = getBannerList();
    const hotPromise = getHotSource();
    const resultArray = Promise.all([bannderPromise, hotPromise]);
    resultArray.then((arr) => {
      this.setState({
        bannerList: arr[0],
        sourceList: arr[1],
        loading: false,
        carousel: {
          show: true
        }
      });
    });
  }

  link2Catalog(type) {
    this.props.history.push(`/catalog/${type}`);
  }

  link2Banner(url) {
    window.location.href = url || 'https://www.baidu.com';
  }

  componentDidUpdate() {
    if (this.state.loading) {
      loadingOpen();
    } else {
      loadingClose();
    }
  }

  render() {
    const chooseItems = [
      { icon: kc, name: '课程', type: 'kc' },
      { icon: cx, name: '其他', type: 'cx' },
      { icon: xs, name: '小说', type: 'xs' },
      { icon: mh, name: '漫画', type: 'mh' }
    ];
    if (this.state.loading) return null;
    return (
      <MainWrapper>
        <CarouselWrapper>
          {this.state.carousel.show ? (
            <Carousel autoplay={true} infinite>
              {this.state.bannerList.map((item, index) => {
                return (
                  <div
                    className="banner"
                    key={index}
                    onClick={this.link2Banner.bind(this, item.click_url)}
                  >
                    <img src={item.img_url} alt="" className="img" />
                  </div>
                );
              })}
            </Carousel>
          ) : null}
        </CarouselWrapper>
        <ChooseWrapper>
          {chooseItems.map((item, index) => (
            <ChooseItem
              onClick={this.link2Catalog.bind(this, item.type)}
              key={index}
            >
              <div className="icon-svg">
                <img src={item.icon} alt="" />
              </div>
              <div className="text">{item.name}</div>
            </ChooseItem>
          ))}
        </ChooseWrapper>
        <ListWrapper>
          <HotSoure
            loading={this.state.loading}
            sourceList={this.state.sourceList}
          />
        </ListWrapper>
      </MainWrapper>
    );
  }
}

Main.contextTypes = {
  router: PropTypes.object.isRequired
};

// 样式
const MainWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  background-color: #f5f5f5;
`;

const CarouselWrapper = styled.div`
  padding: ${vw('15px 14px')};
  .banner {
    width: 100%;
    height: 140px;
    border-radius: 6px;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
    }
  }
`;

const ChooseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${vw('18px 33px 10px')};
  background-color: #ffffff;
`;
const ChooseItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #262626;
  line-height: 20px;
  .icon-svg {
    width: ${vw('37px')};
    height: ${vw('37px')};
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .text {
    margin-top: 8px;
  }
`;

const ListWrapper = styled.div`
  margin-top: ${vw('50px')};
`;

export default Main;

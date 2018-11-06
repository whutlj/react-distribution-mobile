import React from 'react';
import router from '@/router';
import '@/assets/css/home/home.css';
import { Route, Switch } from 'react-router-dom';
import { TabBar } from 'antd-mobile';
import styled from 'styled-components';
import { setCurrentRoute } from '@/actions/routeStore';
import { vw } from '@/assets/js/utils';
import home from './img/home.svg';
import homeSt from './img/home_s.svg';
import select from './img/select.svg';
import selectSt from './img/select_s.svg';
import user from './img/user.svg';
import userSt from './img/user_s.svg';
import search from './img/search.svg';
import searchSt from './img/search_s.svg';
import { connect } from 'react-redux';
class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barList: [
        { title: '首页', icon: home, selectedIcon: homeSt, type: 'home' },
        { title: '搜索', icon: search, selectedIcon: searchSt, type: 'search' },
        { title: '已选', icon: select, selectedIcon: selectSt, type: 'select' },
        { title: '我的', icon: user, selectedIcon: userSt, type: 'user' }
      ],
      currentTab: ''
    };
    this.changeBar = this.changeBar.bind(this);
  }

  changeBar(type) {
    this.setState({
      currentTab: type
    });
    const { history, dispatch } = this.props;
    history.push(`/${type}`);
    dispatch(setCurrentRoute(type));
  }
  componentWillMount() {
    // 根据当前路由判断route值
    const { location, dispatch } = this.props;
    let res = '';
    switch (location.pathname) {
      case '/home':
      case '/search':
      case '/select':
      case '/user':
        res = location.pathname.substr(1);
        break;
      default:
        res = 'home';
        break;
    }
    dispatch(setCurrentRoute(res));
    this.setState({ currentTab: res });
  }
  componentDidMount() {}

  render() {
    const { match } = this.props;
    return (
      <div className="home-wrapper">
        <Switch>
          {router.routes[1].children.map((route, index) => {
            return (
              <Route
                path={`${match.path}${route.path}`.substr(1)}
                exact={route.exact}
                component={route.component}
                key={index}
              />
            );
          })}
        </Switch>
        <TabWrapper>
          <TabBar
            unselectedTintColor="#8c8c8c"
            tintColor="#ff6023"
            barTintColor="white"
          >
            {this.state.barList.map((bar, index) => {
              return (
                <TabBar.Item
                  key={bar.title}
                  selected={this.state.currentTab === bar.type}
                  icon={
                    <img
                      src={bar.icon}
                      style={{
                        width: `${vw('20px')}`,
                        height: `${vw('20px')}`
                      }}
                      alt=""
                    />
                  }
                  selectedIcon={
                    <img
                      src={bar.selectedIcon}
                      style={{
                        width: `${vw('20px')}`,
                        height: `${vw('20px')}`
                      }}
                      alt=""
                    />
                  }
                  title={bar.title}
                  onPress={this.changeBar.bind(this, bar.type)}
                />
              );
            })}
          </TabBar>
        </TabWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    route: state.route
  };
};

const TabWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${vw('49px')};
`;
// 创建容器组件
export default connect(mapStateToProps)(HomePage);

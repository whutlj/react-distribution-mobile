import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd-mobile';
import { vw } from '@/assets/js/utils';

export default class NoMatch extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <Wrap>
        <Pic />
        <Text1>页面出错了</Text1>
        <Text2>知识分销不知道迷路去了哪里，刷新试试？</Text2>
        <GoHome type="primary" onClick={() => history.replace('/')}>
          返回首页
        </GoHome>
      </Wrap>
    );
  }
}

const Wrap = styled.section`
  overflow: hidden;
  text-align: center;
`;
const Pic = styled.div`
  height: ${vw('112px')};
  width: ${vw('134px')};
  background: url(${require('./404.svg')}) center/cover no-repeat;
  background-size: 100% 100%;
  margin: ${vw('140px auto 22px')};
`;
const Text1 = styled.div`
  font-size: ${vw('24px')};
  color: #595959;
  font-weight: bolder;
`;
const Text2 = styled.div`
  color: #595959;
  font-size: ${vw('14px')};
  margin-top: ${vw('10px')};
`;
const GoHome = styled(Button)`
  margin: ${vw('22px auto 0')};
  width: ${vw('128px')};
`;

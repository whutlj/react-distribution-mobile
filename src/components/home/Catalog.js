import React from 'react';
import '@/assets/css/home/main.css';
import { vw } from '@/assets/js/utils';
import styled from 'styled-components';
import { Button } from 'antd-mobile';
class Catalog extends React.Component {
  render() {
    return (
      <div className="main">
        the is catalog
        <DemoComponent name="#f00"> i am demo component </DemoComponent>
        <div className="test" />
        <MyButton>我的按钮</MyButton>
      </div>
    );
  }
}

export default Catalog;

const DemoComponent = styled.div`
  background-color: #44014c;
  width: ${vw('300px')};
  min-height: ${vw('200px')};
  margin: ${vw('20px')} auto;
  color: ${(props) => props.name || '#fff'};
  :hover {
    color: red;
  }
  ::before {
    content: '🚀';
  }
`;

const MyButton = styled(Button)`
  color: #ff7800 !important;
  margin-top: 20px;
`;

import React from 'react';
import '@/assets/css/home/main.css';
import { vw } from '@/assets/js/utils';
import styled from 'styled-components';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.testSaga = this.testSag.bind(this);
  }

  testSag() {
    console.log('testSaga');
    const { dispatch } = this.props;
    // dispatch({ type: 'take_task' });
    if (this.state.status) {
      dispatch({ type: 'LOGOUT' });
    } else {
      dispatch({ type: 'LOGIN' });
    }
    this.setState((preSate) => {
      return {
        status: !preSate.status
      };
    });
  }

  render() {
    return (
      <div className="main">
        the is catalog
        <DemoComponent name="#f00"> i am demo component </DemoComponent>
        <div className="test" />
        <MyButton onClick={this.testSaga}>我的按钮</MyButton>
      </div>
    );
  }
}

export default connect()(Catalog);

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

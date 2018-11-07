import React from 'react';
import { InputItem } from 'antd-mobile';
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <InputItem type="text">
          <div>
            <div>用户名</div>
            <div>密码</div>
          </div>
        </InputItem>
      </div>
    );
  }
}

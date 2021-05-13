import React from 'react';
import { Layout, Row } from 'antd';

import './index.less';

const { Header } = Layout;

const Component = () => (
  <Header className="navbar">
    <Row align="middle" justify="center">
      <img className="logo" alt="logo" src="/logo.png" />
    </Row>
  </Header>
);

export default Component;

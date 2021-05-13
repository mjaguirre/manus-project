import React from 'react';

import { Layout, Row } from 'antd';

import Navbar from '../src/components/organisms/Navbar';
import CardGrid from '../src/components/organisms/CardGrid';

const CenterView = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Navbar />
    <Row justify="center">
      <CardGrid />
    </Row>
  </Layout>
);

export default CenterView;

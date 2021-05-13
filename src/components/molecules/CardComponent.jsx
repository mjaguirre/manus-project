/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'antd';

import Description from './CardContent';

const { Meta } = Card;

const Component = ({ item }) => (
  <Card style={{ width: '100%' }} cover={<img alt={item.name} src={item.image} />}>
    <Meta
      title={item.name}
      description={
        <Description gender={item.gender} status={item.status} location={item.location.name} />
      }
    />
  </Card>
);

export default Component;

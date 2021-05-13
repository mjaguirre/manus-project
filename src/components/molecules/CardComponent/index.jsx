/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

import Description from '../CardContent';

import './index.less';

const { Meta } = Card;

const Component = ({ item }) => {
  const [loadingInfo, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <Card
      loading={loadingInfo}
      cover={
        loadingInfo ? (
          <img alt={item.name} src="/user.png" />
        ) : (
          <img alt={item.name} src={item.image} />
        )
      }
    >
      <Meta
        title={item.name}
        description={
          <Description gender={item.gender} status={item.status} location={item.location.name} />
        }
      />
    </Card>
  );
};

export default Component;

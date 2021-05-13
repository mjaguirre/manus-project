/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';

import Description from '../CardContent';

const { Meta } = Card;

const Component = ({ item }) => {
  const [loadingInfo, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Card
      style={{ width: '100%' }}
      loading={loadingInfo}
      cover={<img alt={item.name} src={item.image} />}
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

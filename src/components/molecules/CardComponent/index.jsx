import React, { useEffect, useState } from 'react';
import { Col, Card, Row, Modal, Button, List, Divider } from 'antd';
import Description from '../CardContent';

import './index.less';

const { Meta } = Card;

const Component = ({ item }) => {
  const [loadingInfo, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 300);
  }, []);

  const handleClick = () => {
    setVisible(true);
  };

  return (
    <div>
      <Card
        loading={loadingInfo}
        cover={
          loadingInfo ? (
            <img alt={item.name} src="/user.png" />
          ) : (
            <img alt={item.name} src={item.image} />
          )
        }
        onClick={handleClick}
        hoverable
      >
        <Meta
          title={item.name}
          description={
            <Description gender={item.gender} status={item.status} location={item.location.name} />
          }
        />
      </Card>
      {visible && (
        <Modal
          title={item.name}
          centered
          visible={visible}
          onCancel={() => setVisible(false)}
          width={1000}
          footer={[
            <Button key="back" onClick={() => setVisible(false)}>
              Return
            </Button>,
          ]}
        >
          <Row justify="space-between">
            <Col xs={24} md={12}>
              {loadingInfo ? (
                <img className="image" alt={item.name} src="/user.png" />
              ) : (
                <img className="image" alt={item.name} src={item.image} />
              )}
            </Col>
            <Col xs={24} md={11} className="infoContainer">
              <Description
                gender={item.gender}
                status={item.status}
                location={item.location.name}
              />
              <Divider orientation="center">Appears In</Divider>
              <List
                bordered
                dataSource={item.episode}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
          </Row>
        </Modal>
      )}
    </div>
  );
};

export default Component;

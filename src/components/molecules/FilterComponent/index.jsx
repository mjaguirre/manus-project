import React from 'react';
import { Button, Col, Input, Row, Select, Form } from 'antd';

import './index.less';

const { Option } = Select;

const Component = ({ action }) => {
  const [form] = Form.useForm();

  const onFinish = () => {
    action(form.getFieldsValue());
  };

  const clearFilters = () => {
    form.resetFields();
    action(form.getFieldsValue());
  };

  return (
    <Col span={20}>
      <Form form={form} onFinish={onFinish}>
        <Row justify="space-between">
          <Col xs={24} xl={5}>
            <Form.Item name="name">
              <h4>Search by Name</h4>
              <Input
                size="medium"
                type="text"
                onChange={(e) => form.setFieldsValue({ name: e.target.value })}
              />
            </Form.Item>
          </Col>
          <Col xs={24} xl={5}>
            <Form.Item name="status">
              <h4>Filter by Status</h4>
              <Select defaultValue="All" onChange={(e) => form.setFieldsValue({ status: e })}>
                <Option value="Alive">Alive</Option>
                <Option value="Dead">Dead</Option>
                <Option value="Unknown">Unknown</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} xl={5}>
            <Form.Item name="species">
              <h4>Filter by Species</h4>
              <Input
                size="medium"
                type="text"
                onChange={(e) => form.setFieldsValue({ species: e.target.value })}
              />
            </Form.Item>
          </Col>
          <Col xs={24} xl={5}>
            <Form.Item name="gender">
              <h4>Filter by Gender</h4>
              <Select defaultValue="All" onChange={(e) => form.setFieldsValue({ gender: e })}>
                <Option value="Female">Female</Option>
                <Option value="Male">Male</Option>
                <Option value="Unknown">Unknown</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row className="buttonsRow" justify="center">
          <Col xs={6} md={4} xl={2}>
            <Form.Item name="submit">
              <Button loading={false} disabled={false} htmlType="submit" size="small">
                Filter
              </Button>
            </Form.Item>
          </Col>
          <Col xs={6} md={4} xl={2} offset={1}>
            <Form.Item name="submit">
              <Button
                loading={false}
                disabled={false}
                htmlType="submit"
                size="small"
                onClick={clearFilters}
              >
                Clear
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};
export default Component;

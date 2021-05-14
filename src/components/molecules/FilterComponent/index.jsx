import React, { useState } from 'react';
import { Button, Col, Input, Row, Select } from 'antd';

import './index.less';

const { Option } = Select;

const Component = ({ actionName, actionStatus, actionSpecies, actionGender }) => {
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  const onFinish = () => {
    actionName(nameFilter);
    actionStatus(statusFilter);
    actionSpecies(speciesFilter);
    actionGender(genderFilter);
  };

  const clearFilters = () => {
    setNameFilter('');
    setSpeciesFilter('');
    setStatusFilter('');
    setGenderFilter('');
    onFinish();
  };

  return (
    <Col span={20}>
      <Row justify="space-between">
        <Col xs={24} xl={5}>
          <h4>Search by Name</h4>
          <Input size="medium" type="text" onChange={(e) => setNameFilter(e.target.value)} />
        </Col>
        <Col xs={24} xl={5}>
          <h4>Filter by Status</h4>
          <Select defaultValue="All" onChange={(e) => setStatusFilter(e)}>
            <Option value="Alive">Alive</Option>
            <Option value="Dead">Dead</Option>
            <Option value="Unknown">Unknown</Option>
          </Select>
        </Col>
        <Col xs={24} xl={5}>
          <h4>Filter by Species</h4>
          <Input size="medium" type="text" onChange={(e) => setNameFilter(e.target.value)} />
        </Col>
        <Col xs={24} xl={5}>
          <h4>Filter by Gender</h4>
          <Select defaultValue="All" onChange={(e) => setGenderFilter(e)}>
            <Option value="Female">Female</Option>
            <Option value="Male">Male</Option>
            <Option value="Unknown">Unknown</Option>
          </Select>
        </Col>
      </Row>
      <Row className="buttonsRow" justify="center">
        <Col xs={6} md={4} xl={2}>
          <Button
            loading={false}
            disabled={false}
            htmlType="submit"
            size="small"
            onClick={onFinish}
          >
            Filter
          </Button>
        </Col>
        <Col xs={6} md={4} xl={2} offset={1}>
          <Button
            loading={false}
            disabled={false}
            htmlType="submit"
            size="small"
            onClick={clearFilters}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Col>
  );
};
export default Component;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Pagination, Spin, Modal } from 'antd';

import { fetchCharactersThunk } from '../../../store/base/baseSlice';

import CardComponent from '../../molecules/CardComponent';
import Filter from '../../molecules/FilterComponent';

import './index.less';

const CardGrid = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [gender, setGender] = useState('');
  const [visible, setVisible] = useState(false);
  const { currentList, loading, count, pageSize } = useSelector((state) => state.base);

  useEffect(() => {
    dispatch(
      fetchCharactersThunk({
        page: 1,
        species,
        gender,
        status,
        name,
      })
    );
  }, [name, status, species, gender]);

  useEffect(() => {
    dispatch(
      fetchCharactersThunk({
        page,
        species,
        gender,
        status,
        name,
      })
    );
  }, [page]);

  const onChange = (e) => {
    setPage(e);
  };

  return (
    <div className="container">
      <Row justify="center">
        {loading ? (
          <Spin size="large" />
        ) : (
          <Col span={24}>
            <Modal
              title="Modal 1000px width"
              centered
              visible={visible}
              onOk={() => setVisible(false)}
              onCancel={() => setVisible(false)}
              width={1000}
            >
              <p>some contents...</p>
              <p>some contents...</p>
              <p>some contents...</p>
            </Modal>
            <Row justify="space-around" className="filterContainer">
              <Filter
                actionName={setName}
                actionStatus={setStatus}
                actionSpecies={setSpecies}
                actionGender={setGender}
              />
            </Row>
            <Row justify="center" className="paginationContainer">
              <Pagination
                size="small"
                total={count}
                pageSize={pageSize}
                showSizeChanger={false}
                onChange={onChange}
                defaultCurrent={page}
              />
            </Row>

            <Row justify="space-around">
              {currentList?.map((item) => (
                <Col className="cardContainer" xs={10} md={7} xl={5} xxl={4}>
                  <CardComponent item={item} />
                </Col>
              ))}
            </Row>
            <Row justify="center" className="paginationContainer">
              <Pagination
                size="small"
                total={count}
                pageSize={pageSize}
                showSizeChanger={false}
                onChange={onChange}
                defaultCurrent={page}
              />
            </Row>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default CardGrid;

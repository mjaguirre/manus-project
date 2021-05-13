import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Pagination } from 'antd';

import { fetchCharactersThunk } from '../../../store/base/baseSlice';

import CardComponent from '../../molecules/CardComponent';

const CardGrid = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { currentList, loading, count, pageSize } = useSelector((state) => state.base);

  useEffect(() => {
    dispatch(fetchCharactersThunk(page));
  }, [page]);

  const onChange = (e) => {
    setPage(e);
  };

  return (
    <div className="container">
      <Row justify="center">
        {loading ? (
          <h1>Cargando</h1>
        ) : (
          <Col span={24}>
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
                <Col xs={10} md={7} xl={5} xxl={4} style={{ margin: '10px' }}>
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

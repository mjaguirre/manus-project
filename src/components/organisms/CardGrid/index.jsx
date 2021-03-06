import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Pagination, Spin } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import { fetchCharactersThunk } from '../../../store/base/baseSlice';

import CardComponent from '../../molecules/CardComponent';
import Filter from '../../molecules/FilterComponent';

import './index.less';

const CardGrid = () => {
  const [page, setPage] = useState(1);
  const [values, setValues] = useState({
    name: undefined,
    status: undefined,
    species: undefined,
    gender: undefined,
  });

  const dispatch = useDispatch();
  const { currentList, loading, count, pageSize, error } = useSelector((state) => state.base);

  useEffect(() => {
    setPage(1);
    dispatch(fetchCharactersThunk({ ...values, page: 1 }));
  }, [values]);

  useEffect(() => {
    dispatch(fetchCharactersThunk({ ...values, page }));
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
            <Row justify="space-around" className="filterContainer">
              <Filter action={setValues} />
            </Row>

            {error ? (
              <>
                <Row justify="center">
                  <Col>
                    <FontAwesomeIcon icon={faExclamation} size="6x" className="errorIcon" />
                  </Col>
                  <Col span={24}>
                    <h3 className="errorText">
                      No matches found for the last search. Please try with a diferent filter.
                    </h3>
                  </Col>
                </Row>
              </>
            ) : (
              <>
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
              </>
            )}
          </Col>
        )}
      </Row>
    </div>
  );
};

export default CardGrid;

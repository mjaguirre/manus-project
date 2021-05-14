import React from 'react';
import { Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSkullCrossbones,
  faMapMarked,
  faTransgenderAlt,
} from '@fortawesome/free-solid-svg-icons';

import './index.less';

const Description = ({ gender, location, status }) => (
  <Col>
    <h4>
      <FontAwesomeIcon icon={faMapMarked} /> {location}
    </h4>
    <h4>
      <FontAwesomeIcon icon={faSkullCrossbones} /> {status}
    </h4>
    <h4>
      <FontAwesomeIcon icon={faTransgenderAlt} /> {gender}
    </h4>
  </Col>
);

export default Description;

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Provider } from 'react-redux';

import { ConfigProvider, Grid } from 'antd';
import es from 'antd/lib/locale/es_ES';
import store from '../src/store/index';

import 'antd/dist/antd.less';
import '../styles/theme/antd.less';

const { useBreakpoint } = Grid;

function MyApp({ Component, pageProps, path }) {
  const screens = useBreakpoint();

  return (
    <>
      <ConfigProvider locale={es}>
        <Provider store={store}>
          <div className={screens.xs ? 'mobile' : 'web'}>
            <Component {...pageProps} />
          </div>
        </Provider>
      </ConfigProvider>
    </>
  );
}

export default MyApp;

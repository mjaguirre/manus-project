/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

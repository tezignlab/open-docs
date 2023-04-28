import React from 'react';
import Layout from '@theme/Layout';
import $styles from './index.module.css';

function OpenApi() {
  return (
    <Layout
      title="特赞服务端开放能力"
      wrapperClassName={$styles.layout}
      noFooter
    >
      <iframe
        src="https://tz-open-api.apifox.cn"
        style={{
          height: '100%',
          width: '100%',
        }}
        referrerPolicy="same-origin"
      ></iframe>
    </Layout>
  );
}

export default OpenApi;

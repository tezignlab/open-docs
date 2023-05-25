import React from 'react';
import Layout from '@theme/Layout';
import $styles from './index.module.css';
import { useLocation } from '@docusaurus/router';

function OpenApi() {
  const location = useLocation();

  const afp = new URLSearchParams(location.search).get('afp'); // apifox path
  const src = `https://tz-open-api.apifox.cn${afp ?? ''}`;

  return (
    <Layout
      title="特赞服务端开放能力"
      wrapperClassName={$styles.layout}
      noFooter
    >
      <iframe
        key={src}
        src={src}
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

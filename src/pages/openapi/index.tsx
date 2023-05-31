import React, { useLayoutEffect, useState } from 'react';
import Layout from '@theme/Layout';
import $styles from './index.module.css';
import { useLocation } from '@docusaurus/router';

function OpenApi() {
  const location = useLocation();
  const search = location.search;

  const [src, setSrc] = useState('https://tz-open-api.apifox.cn');
  useLayoutEffect(() => {
    const afp = new URLSearchParams(location.search).get('afp'); // apifox path
    setSrc(`https://tz-open-api.apifox.cn${afp ?? ''}`);
  }, [search]);

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
          height: 'calc(100vh - 60px)',
          width: '100%',
        }}
        referrerPolicy="same-origin"
      ></iframe>
    </Layout>
  );
}

export default OpenApi;

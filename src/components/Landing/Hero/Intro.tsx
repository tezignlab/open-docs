import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

export function Intro(props: { to: string }) {
  return (
    <div className="text-center flex items-center justify-center h-full px-[30px]">
      <div className="overflow-auto">
        <h1 className="text-white text-5xl">特赞开放平台</h1>
        <h2 className="text-base text-[#dce1e5]">
          使用数字资产管理平台可插拔的
          API、插件、SDK，便捷高效地开发你自己的应用
        </h2>
        <Link
          className={clsx(
            'bg-white shadow-[0_2px_0_rgba(0,0,0,0.016)] rounded-[6px] p-[8px_24px] border-0 text-base text-black cursor-pointer inline-block no-underline',
            'hover:no-underline hover:text-black',
          )}
          to={props.to}
        >
          开始使用
        </Link>
      </div>
    </div>
  );
}

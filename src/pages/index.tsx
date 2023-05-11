import React, { useMemo } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Context as DocusaurusContext } from '@docusaurus/core/lib/client/docusaurusContext';
import { useHistory } from '@docusaurus/router';
import LayoutProvider from '@theme/Layout/Provider';
import Navbar from '@theme/Navbar';
import { LandingCard } from '../components/Landing/Card';
import { Intro, Background } from '../components/Landing/Hero';
import IconFe from './assets/fe.svg';
import IconBe from './assets/be.svg';
import IconEvent from './assets/event.svg';
import IconNote from './assets/note.svg';
import clsx from 'clsx';

export default function Home(): JSX.Element {
  const docusaurusContext = useDocusaurusContext();
  const history = useHistory();
  const isHomePage = history.location.pathname === '/';

  const context = useMemo(() => {
    const logo = (docusaurusContext.siteConfig.themeConfig.navbar as any).logo;
    if (isHomePage) {
      logo.src = 'img/logo-dark.svg';
    } else {
      logo.src = 'img/logo-light.svg';
    }
    (docusaurusContext.siteConfig.themeConfig.navbar as any).logo = { ...logo };
    return { ...docusaurusContext };
  }, [docusaurusContext, isHomePage]);

  return (
    <DocusaurusContext.Provider value={context}>
      <LayoutProvider>
        {/*Inject global CSS without a wrapper to make NavBar `fixed` work.*/}
        <style>{`:root { background-color: white; } #__docusaurus { --ifm-navbar-background-color: #0f0f14; --ifm-navbar-link-color: white; --ifm-menu-color: white; --ifm-navbar-link-hover-color: white; } .navbar__toggle.clean-btn { color: white; }`}</style>
        <Navbar />
        <div className="h-[57vh] relative">
          <Background />
          <Intro to={'/docs/frontend'} />
        </div>

        <div className="flex-grow">
          <div className="flex justify-center mt-[-64px] px-[24px]">
            <section className="flex flex-wrap max-w-[994px] justify-center gap-[24px]">
              <LandingCard
                icon={<IconFe />}
                title="前端开放能力"
                description="前端开放能力说明性文字前端开放接口"
                to="/docs/frontend"
              />
              <LandingCard
                icon={<IconBe />}
                title="服务端开放接口"
                description="后端开放能力说明性文字前端开放接口"
                to="/openapi"
              />
              <LandingCard
                icon={<IconEvent />}
                title="事件订阅"
                description="事件订阅说明性文字前端开放接口"
                to="/docs/webhook"
              />
              <LandingCard
                icon={<IconNote />}
                title="更新日志"
                description="更新日志接口说明性文字前端开放接口"
                to="/changelog"
              />
            </section>
          </div>
        </div>

        <div
          className={clsx(
            'text-[#B1B8C2] text-center text-xs py-[20px]',
            'bg-[#F3F5F7] shadow-[inset_0_1px_0_#DCE1E5] mt-[43px]',
          )}
        >
          {(docusaurusContext.siteConfig.themeConfig.footer as any).copyright}
        </div>
      </LayoutProvider>
    </DocusaurusContext.Provider>
  );
}

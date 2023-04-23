// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "特赞开放平台",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://open.tezign.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tezignlab", // Usually your GitHub org/user name.
  projectName: "open-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          path: "changelog",
          blogTitle: "更新日志",
          blogDescription: "特赞开放平台更新日志",
          routeBasePath: "/changelog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    async function tailwindcss(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-frontend",
        path: "docs/frontend",
        routeBasePath: "/docs/frontend",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-webhook",
        path: "docs/webhook",
        routeBasePath: "/docs/webhook",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        // disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // algolia搜索
      // https://docusaurus.io/docs/search#using-algolia-docsearch
      //
      // Replace with your project's social card
      // image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Tezign开放平台",
        logo: {
          alt: "Site Logo",
          src: "img/logo-light.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            to: "/docs/frontend",
            position: "left",
            label: "前端开放能力",
          },
          {
            to: "/open-api",
            position: "left",
            label: "服务端开放接口",
          },
          {
            to: "/docs/webhook",
            position: "left",
            label: "事件订阅",
          },
          { to: "/changelog", label: "更新日志", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "前端开放能力",
            items: [
              {
                label: "素材选择器",
                to: "/docs/frontend/category/asset-selector",
              },
              {
                label: "素材上传",
                to: "/docs/frontend/category/asset-uploader",
              },
              {
                label: "埋点SDK",
                to: "/docs/frontend/category/dam-track",
              },
              {
                label: "DAM Plugin",
                to: "/docs/frontend/category/dam-plugin",
              },
            ],
          },
          {
            title: "服务端开放能力",
            items: [
              {
                label: "开放接口",
                to: "/open-api",
              },
              {
                label: "事件订阅",
                to: "/docs/webhook",
              },
            ],
          },
        ],
        copyright: `©${new Date().getFullYear()} 特赞（上海）信息科技有限公司 沪ICP备15021426号`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java"],
      },
    }),
};

module.exports = config;

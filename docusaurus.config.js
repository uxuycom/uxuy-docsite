// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UXUY Docs",
  tagline: "Follow Smart Money",
  favicon: "img/favicon.ico",
  trailingSlash: true,
  noIndex: false,

  // Set the production url of your site here
  url: "https://doc.uxuy.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "uxuy", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/uxuycom/uxuy-docsite/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/uxuycom/uxuy-docsite/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: false,
      }),
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "UXUY Docs",
        logo: {
          alt: "UXUY",
          src: "img/logo.png",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/facebook/docusaurus",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: 'UXUY Logo',
          src: 'img/logo.png',
          href: 'https://uxuy.com',
          width: 96,
        },
        links: [
          {
            title: "About Us",
            items: [
              {
                label: "About",
                to: "/",
              },
              {
                label: "Terms of Service",
                to: "term-of-service/",
              },
              {
                label: "Privacy Policy",
                to: "privacy/",
              },
            ],
          },
          {
            title: "Products",
            items: [
              {
                label: "Protocol",
                to: "category/uxuy-protocol",
              },
              {
                label: "Swap",
                to: "https://uxuy.com/swap",
              },
              {
                label: "API",
                to: "developers/swap-api/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/uxuycom",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/uxuy/",
              },
              {
                label: "Blog",
                href: "https://medium.com/uxuy-protocol",
              }
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/uxuycom",
              },
            ],
          },
          {
            title: "Learn",
            items: [
              {
                label: "How to Create A Wallet",
                href: "learn/how-to-wallet/",
              },
              {
                label: "How to Make a Cross-chain Swap",
                href: "learn/how-to-cross-chain/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UXUY All Rights Reserved.`,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [require.resolve("docusaurus-lunr-search")],
};

module.exports = config;

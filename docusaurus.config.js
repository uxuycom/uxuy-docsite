// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "UXUY Docs",
  tagline: "Follow the Smart Money",
  favicon: "img/favicon.ico",
  trailingSlash: true,
  noIndex: false,

  // Set the production url of your site here
  url: "https://docs.uxuy.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "uxuycom", // Usually your GitHub org/user name.
  projectName: "uxuy-docsite", // Usually your repo name.

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
        gtag: {
          trackingID: 'G-QS19J7PT2B',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Docs",
        logo: {
          alt: "UXUY",
          src: "img/logo.png",
        },
        items: [
          { to: "https://uxuy.com", label: "Home", position: "left" },
          { to: "https://uxuy.com/exchange", label: "Exchange", position: "left" },
          { to: "https://uxuy.com/wallet", label: "Wallet", position: "left" },
          { to: "https://uxuy.com/protocol", label: "Protocol", position: "left" },
          { to: "https://blog.uxuy.com/", label: "Blog", position: "left" },
          { to: "https://learn.uxuy.com/", label: "Learn", position: "left" },
          { to: "https://github.com/uxuycom", label: "Github", position: "left" },
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
          // {
          //   title: "Products",
          //   items: [
          //     { label: "UXUY Exchange", to: "https://uxuy.com/exchange", },
          //     { label: "UXUY Wallet", to: "https://uxuy.com/wallet", },
          //     { label: "UXUY Protocol", to: "https://uxuy.com/protocol", },
          //   ],
          // }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UXUY All Rights Reserved.`,
      },
      metadata: [{name: "keywords", content: "uxuy, dex, wallet, web3, crypto"}],
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

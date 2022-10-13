// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Foresight',
  tagline: 'Foresight provides full visibility and deep insights into the health and performance of your tests and CI/CD pipelines.',
  url: 'https://docs.runforesight.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'thundra', // Usually your GitHub org/user name.
  projectName: 'foresight', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      navbar: {
        title: 'Foresight',
        logo: {
          alt: ' ',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://app.runforesight.com/signup',
            label: 'Get Started',
            position: 'right',
            className: 'navbar-get-started',
          },
          {
            href: 'https://changelog.runforesight.com',
            label: 'Changelog',
            position: 'left',
          },
          {
            href: 'https://app.runforesight.live',
            label: 'Playground',
            position: 'left',
          },
          {
            href: 'https://runforesight.com/pricing',
            label: 'Pricing',
            position: 'left',
          },
          {
            href: 'https://discord.gg/bCtCmzP2ge',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Thundra, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    

    plugins: [
       './plugins/tailwind-config.js',
       './plugins/heap.js',
       './plugins/optimize.js'
     ], 
    
};

module.exports = config;

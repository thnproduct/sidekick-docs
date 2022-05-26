// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/nightOwl');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Foresight',
  tagline: 'CI Monitoring for GitHub Actions',
  url: 'https://foresight.thundra.io',
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
          src: 'img/alogo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Changelog', position: 'left'},
          {to: '#', label: 'Community', position: 'right'},
          {to: '#', label: 'Sign up', position: 'right'},
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
       './plugins/heap.js'
     ], 
    
};

module.exports = config;

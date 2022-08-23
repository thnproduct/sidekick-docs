
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','a87'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','d62'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','d09'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','192'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/','eeb'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','206'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/advanced-configuration/test-kit',
        component: ComponentCreator('/advanced-configuration/test-kit','898'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/advanced-configuration/workflow-kit',
        component: ComponentCreator('/advanced-configuration/workflow-kit','a37'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/examples',
        component: ComponentCreator('/examples','b2d'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/features/analyze-code-change-impact',
        component: ComponentCreator('/features/analyze-code-change-impact','6c6'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/features/highlights',
        component: ComponentCreator('/features/highlights','ad8'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/features/process-trace-chart',
        component: ComponentCreator('/features/process-trace-chart','ef1'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/features/team-management',
        component: ComponentCreator('/features/team-management','e02'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/features/test-logs',
        component: ComponentCreator('/features/test-logs','6bf'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/features/test-runs',
        component: ComponentCreator('/features/test-runs','01c'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/features/workflow-metrics',
        component: ComponentCreator('/features/workflow-metrics','9a5'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/features/workflow-runs',
        component: ComponentCreator('/features/workflow-runs','c2d'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/how-to/badges',
        component: ComponentCreator('/how-to/badges','97a'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/how-to/get-api-key',
        component: ComponentCreator('/how-to/get-api-key','cc6'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/how-to/troubleshooting',
        component: ComponentCreator('/how-to/troubleshooting','27e'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/integrations/slack',
        component: ComponentCreator('/integrations/slack','222'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/step-by-step-guide',
        component: ComponentCreator('/step-by-step-guide','f0e'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/use-cases/detect-failed-tests',
        component: ComponentCreator('/use-cases/detect-failed-tests','831'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/use-cases/identify-flaky-tests',
        component: ComponentCreator('/use-cases/identify-flaky-tests','3c0'),
        exact: true,
        'sidebar': "sidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];

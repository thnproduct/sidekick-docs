
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/','aae'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/','206'),
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
        path: '/features/highlights',
        component: ComponentCreator('/features/highlights','ad8'),
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
        path: '/features/workflow-runs',
        component: ComponentCreator('/features/workflow-runs','c2d'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/other/faq',
        component: ComponentCreator('/other/faq','5c7'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/other/troubleshooting',
        component: ComponentCreator('/other/troubleshooting','8fa'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/step-by-step-guide',
        component: ComponentCreator('/step-by-step-guide','59c'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/use-cases/analyze-code-change-impact',
        component: ComponentCreator('/use-cases/analyze-code-change-impact','78d'),
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
        path: '/use-cases/find-bottlenecks',
        component: ComponentCreator('/use-cases/find-bottlenecks','bbf'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/use-cases/identify-flaky-tests',
        component: ComponentCreator('/use-cases/identify-flaky-tests','3c0'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/use-cases/monitor-costs',
        component: ComponentCreator('/use-cases/monitor-costs','3b3'),
        exact: true,
        'sidebar': "sidebar"
      },
      {
        path: '/use-cases/optimize-duration',
        component: ComponentCreator('/use-cases/optimize-duration','275'),
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

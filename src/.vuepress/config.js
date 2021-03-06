const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Signar Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      {
        text: 'Release Notes',
        link: '/release-notes/'
      },
      {
        text: 'Soporte',
        link: 'https://soporte-lyris.atlassian.net/servicedesk/customer/portals'
      },
      {
        text: 'Ir a Signar',
        link: 'https://signar.com.ar'
      }
    ],
    sidebar: {
      // '/repositorio/': [
      //   {
      //     title: '',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'using-vue',
      //     ]
      //   }
      // ],
      '/release-notes/': [
        {
          title: 'Release Notes',
          collapsable: false,
          children: [
            '',
            {
            title: 'Último release',
            collapsable: false,
            children: [
              '12.6'
            ]
          },
          {
            title: 'Historial',
            collapsable: false,
            children: [
                '12.5',
                '12.4',
                '12.3',
                '12.2',
                '12.1',
                '12.0',
                '11.0',
                '10.2',
                '10.1',
                '10.0'
              ]
            }
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-chart'
  ]
}

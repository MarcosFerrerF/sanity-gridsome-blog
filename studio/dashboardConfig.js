export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6210614c132c873e7ca529d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-6w2g3s2t',
                  apiId: '71481c59-f273-40b9-9081-43754f2402c8'
                },
                {
                  buildHookId: '6210614cfbd1b840d6e91736',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-4p82kt61',
                  apiId: 'a856a024-f1b1-4ec7-96fa-ca365087e3f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarcosFerrerF/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-4p82kt61.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

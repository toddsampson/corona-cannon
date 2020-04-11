// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Corona Cannon',
  templates: {
    // Model: '/models/:slug__current'
  },
  plugins: [
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: 'gqr3e19k',
        dataset: 'production',
        // token: '<tokenWithReadRights>',
        overlayDrafts: false,
        watchMode: false
      }
    },
  ],
}

const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    header: {
      logotype: {
        text: 'NHSnotes'
      },
      productName: ""
    },
    footer: {
      copyright: {
        text: '© 2024'
      }
    }
  })

  // Collections
  eleventyConfig.addCollection('post', (collection) => {
    return collection.getFilteredByGlob('app/posts/*.md')
  })


  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts'
    },
    pathPrefix: process.env.GITHUB_ACTIONS ? '/nhsnotes/' : '/'
  }
};

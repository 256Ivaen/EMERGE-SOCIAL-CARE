/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://devbydev.co.uk/',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    outDir: 'out',
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  }
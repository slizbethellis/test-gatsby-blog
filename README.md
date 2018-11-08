# Test Gatsby Blog

This repo contains my work in progress on building a blog with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org): **[Demo Link](https://gatsby-netlify-cms.netlify.com/)**. Blog post search uses [gatsby-plugin-elasticlunr](https://www.gatsbyjs.org/packages/@gatsby-contrib/gatsby-plugin-elasticlunr-search/). The dynamic Instagram post component on the sidebar uses axios and cheerio for scraping (since the Instagram public API is going to be depreciated). Scraping Instagram posts is based on some code from [gatsby-source-instagram](https://www.gatsbyjs.org/packages/gatsby-source-instagram) plugin, but the styling of the component is my own work.

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution. This repo is intended solely to showcase the design and coding work I have done in building my website for my craft presence. The code for the final version of my blog will be stored in a private GitLab repo.

## Things left to do:
* make a pattern page that either pulls patterns from Ravelry's API or add a category in the CMS
* add comments to blog posts
* make a working carousel for the home page (stretch goal)
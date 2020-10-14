// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");
const dotenv = require('dotenv');

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "./src/assets/sass/_globals.sass"),
        // or if you use scss
        path.resolve(__dirname, "./src/assets/sass/_globals.scss"),
        // you can also use a glob if you'd prefer
        path.resolve(__dirname, "./src/assets/sass/*.sass"),
        // or scss
        path.resolve(__dirname, "./src/assets/sass/*.scss")
      ]
    });
}

module.exports = {
  siteName: "JobHulpMaatje Den Haag",
  siteUrl: "https://www.jobhulpmaatjedenhaag.nl",
  plugins: [
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Main",
        baseDir: "./content/main",
        template: './src/templates/Main.vue', // Optional
        remark: {
          // remark options
        }
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Verhaal",
        baseDir: "./content/verhalen",
        template: './src/templates/Verhaal.vue', // Optional
        remark: {
          // remark options
        }
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        config: {
          "/": {
            changefreq: 'yearly',
            priority: 1.0,
            lastmod: '2020-10-14'
          },
          "/over-ons": {
            changefreq: 'monthly',
            priority: 0.8,
            lastmod: '2020-10-14'
          },
          "/over-ons/*": {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-10-14'
          },
          "/verhalen/*": {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2020-10-14'
          },
          "/de-maatjes": {
            changefreq: 'monthly',
            priority: 0.8,
            lastmod: '2020-10-14'
          },
          "/ik-word-maatje": {
            changefreq: 'yearly',
            priority: 0.4,
            lastmod: '2020-10-14'
          },
          "/ik-wil-hulp": {
            changefreq: 'yearly',
            priority: 0.4,
            lastmod: '2020-10-14'
          },
          "/contact": {
            changefreq: 'yearly',
            priority: 0.5,
            lastmod: '2020-10-14'
          },  
        }
      }
    }
  ],
  

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];


    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type))
    });
  }
};

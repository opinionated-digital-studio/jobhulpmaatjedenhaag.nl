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
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  },

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];


    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule("scss").oneOf(type))
    });
  }
};

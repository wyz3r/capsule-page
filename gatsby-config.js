module.exports = {
  siteMetadata: {
    title: `Capsule`,
    menuLinks:[
      {
         name:'Home',
         link:'/'
      },
      {
         name:'Brian the brain',
         link:'/brain'
      },
      {
        name:'Explorer',
        link:'/explorer'
     },
     {
        name:'Consumer',
        link:'/consumer'
      },
      {
        name:'MOTA',
        link:'/mota'
      },
      {
        name:'Descargables',
        link:'/descargables'
      }
    ],
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `HSS`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options:
        {
          name: `images`,
          path: `${__dirname}/src/images`,
        }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-remove-serviceworker',
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
       
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat:400,800,900']
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
    siteMetadata: {
        title: `Karo Muradyan's <br/> Page`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@Muradyan`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kar`,
                short_name: `Kar`,
                start_url: `/`,
                background_color: `#8cc0fd`,
                theme_color: `#8cc0fd`,
                display: `minimal-ui`,
                icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/locale`,
                languages: [`en`, `ru`],
                defaultLanguage: `en`
            },
        },
        `gatsby-plugin-postcss`,
        {
            resolve: 'gatsby-plugin-minify-html',
            options: {
                config: {
                    // Enabled default by this plugin
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true,
                    removeComments: true,
                    removeScriptTypeAttributes: false,
                    removeStyleLinkTypeAttributes: false,
                    // Disabled default by html-minifier
                    sortAttributes: true,
                    useShortDoctype: true
                }
            }
        }
    ],
}

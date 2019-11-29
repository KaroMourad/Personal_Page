import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
    <Layout>
        <SEO title="About" />
        <h2>Hi from the About page</h2>
        <AniLink swipe="true" diraction="left" to="/">Go back to the homepage</AniLink>
    </Layout>
);

export default SecondPage

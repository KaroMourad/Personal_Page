import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
    <Layout>
        <SEO title="Projects" />
        <h1>Here my Projects</h1>
        <AniLink swipe="true" diraction="left" to="/">Go back to the homepage</AniLink>
    </Layout>
);

export default ThirdPage

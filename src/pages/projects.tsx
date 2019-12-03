import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <h1><FormattedMessage id="here_my_projects" /></h1>
        <AniLink swipe="true" diraction="left" to="/"><FormattedMessage id="go_back_to_the_homepage" /></AniLink>
    </Layout>
);

export default injectIntl(Projects);

import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import LinkWithAni from "../components/LinkWithAni";

const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <h1><FormattedMessage id="here_my_projects" /></h1>
        <LinkWithAni swipe="true" diraction="left" to="/"><FormattedMessage id="go_back_to_the_homepage" /></LinkWithAni>
    </Layout>
);

export default injectIntl(Projects);

import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "../components/LinkWithAni";

const Projects = () => (
    <Layout>
        <SEO title="Projects" />
        <h2 style={styles.pageGreeting}><FormattedMessage id="here_my_projects" /></h2>
        <section style={styles.contentContainer}>
            <LinkWithAni swipe="true" diraction="left" to="/"><FormattedMessage id="go_back_to_the_homepage" /></LinkWithAni>
        </section>
    </Layout>
);

export default injectIntl(Projects);

const styles = {
    pageGreeting: {
        paddingTop: "1.45rem"
    },
    contentContainer: {
        flex: 1,
        padding: "1.45rem",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "flex-end"
    }
};
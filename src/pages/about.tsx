import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "../components/LinkWithAni";

const SecondPage = () => (

    <Layout>
        <SEO title="About" />
        <h2 style={styles.pageGreeting}>
            <FormattedMessage id="about" />{" "}
            <FormattedMessage id="me" />
        </h2>
        <section style={styles.contentContainer}>
            <LinkWithAni swipe="true" diraction="left" to="/"><FormattedMessage id="go_back_to_the_homepage" /></LinkWithAni>
            <h3 style={styles.about}>
                Junior-Mid Front-End Developer. I have experience in Html, CSS, Javascript, React, Gatsby, TypesCript currently studying for Master’s degree in Physics. Have a problem-solving mindset and quantitative skills.
            </h3>
        </section>
    </Layout>
);

export default injectIntl(SecondPage);

const styles = {
    pageGreeting: {
        paddingTop: "1.45rem",
        flex: 1
    },
    contentContainer: {
        flex: 2,
        padding: "1.45rem",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "flex-end"
    },
    about: {
        margin: "1.45rem",
        letterSpacing: "0.1vw",
        lineHeight: 1.4,
        fontWeight: 400,
    }
};
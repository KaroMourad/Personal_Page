import * as React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "../components/LinkWithAni";

const IndexPage = () =>
{
    return (
        <Layout>
            <SEO title="Home" />
            <div style={styles.imageContainer}>
                <Image name="myImage" />
            </div>
            <section style={styles.contentContainer}>
                <h1><FormattedMessage id="hi" /></h1>
                <nav style={styles.nav}>
                    <li>
                        <LinkWithAni to="/about" swipe="true" direction="left" >
                            <FormattedMessage id="go_to" />{" "}
                            <FormattedMessage id="about" />
                        </LinkWithAni>
                    </li>
                    <li>
                        <LinkWithAni to="/projects" swipe="true" direction="left" >
                            <FormattedMessage id="go_to" />{" "}
                            <FormattedMessage id="projects" />
                        </LinkWithAni>
                    </li>
                </nav>
            </section>
        </Layout>
    );
};

export default injectIntl(IndexPage);

const styles = {
    imageContainer: {
        width: "15vw",
        maxWidth: `15vw`,
        marginBottom: `1.45rem`,
        paddingTop: `1.45rem`
    },
    contentContainer: {
        flex: 1,
        padding: "1.45rem",
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "flex-end"
    },
    nav: {
        listStyleType: "none",
        textAlign: "right" as "right"
    }
};

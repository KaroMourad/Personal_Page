import * as React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const IndexPage = () => 
{
    return (
        <Layout>
            <SEO title="Home" />
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image name="myImage" />
            </div>
            <h1><FormattedMessage id="hi" /></h1>
            <nav style={{ listStyleType: "none" }}>
                <li>
                    <AniLink swipe="true" direction="left" to="about">
                        <FormattedMessage id="go_to" />{" "}
                        <FormattedMessage id="about" />
                    </AniLink>
                </li>
                <li>
                    <AniLink swipe="true" direction="left" to="projects">
                        <FormattedMessage id="go_to" />{" "}
                        <FormattedMessage id="projects" />
                    </AniLink>
                </li>
            </nav>
        </Layout>
    );
}

export default injectIntl(IndexPage);

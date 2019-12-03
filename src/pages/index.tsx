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
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image name="myImage" />
            </div>
            <h1><FormattedMessage id="hi" /></h1>
            <nav style={{ listStyleType: "none" }}>
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
        </Layout>
    );
};

export default injectIntl(IndexPage);

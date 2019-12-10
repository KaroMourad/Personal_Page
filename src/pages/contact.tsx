import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "../components/LinkWithAni";

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <h2 className="my-5"><FormattedMessage id="contact" /></h2>
        <section className="flex flex-1 flex-col items-end p-5" >
            <LinkWithAni swipe="true" diraction="left" to="/"><FormattedMessage id="go_back_to_the_homepage" /></LinkWithAni>
        </section>
    </Layout>
);

export default injectIntl(Contact);

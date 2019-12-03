import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "../components/LinkWithAni";

const SecondPage = () => (

    <Layout>
        <SEO title="About" />
        <h2>
            <FormattedMessage id="hi_from_the_page" />
            {" "}<FormattedMessage id="about" />
        </h2>
        <LinkWithAni swipe="true" diraction="left" to="/"><FormattedMessage id="go_back_to_the_homepage" /></LinkWithAni>
    </Layout>
);

export default injectIntl(SecondPage);

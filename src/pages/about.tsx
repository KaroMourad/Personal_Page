import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Layout from "../components/layout"
import SEO from "../components/seo"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

const SecondPage = () => (

    <Layout>
        <SEO title="About" />
        <h2>
            <FormattedMessage id="hi_from_the_page" />
            {" "}<FormattedMessage id="about" />
        </h2>
        <AniLink swipe="true" diraction="left" to="/"><FormattedMessage id="go_back_to_the_homepage" /></AniLink>
    </Layout>
);

export default injectIntl(SecondPage);

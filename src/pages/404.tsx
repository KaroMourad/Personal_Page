import * as React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import fadeIn from "../components/fadeIn";
import {injectIntl} from "gatsby-plugin-intl";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found"/>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
);

export default injectIntl(fadeIn(NotFoundPage));

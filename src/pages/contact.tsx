import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {FormattedMessage, injectIntl} from "gatsby-plugin-intl";

const Contact = () => (
    <Layout>
        <SEO title="Contact"/>
        <h2 className="my-5"><FormattedMessage id="contact"/></h2>
        <section className="flex flex-1 flex-col items-end p-5">
        </section>
    </Layout>
);

export default injectIntl(Contact);

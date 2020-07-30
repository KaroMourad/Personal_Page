import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import {FormattedMessage, injectIntl} from "gatsby-plugin-intl";
import fadeIn from "../components/fadeIn";

const Contacts = () => (
    <Layout>
        <SEO title="Contacts"/>
        <h2 className="my-5"><FormattedMessage id="contacts"/></h2>
        <section className="flex flex-1 flex-col items-end p-5"/>
    </Layout>
);

export default injectIntl(fadeIn(Contacts));

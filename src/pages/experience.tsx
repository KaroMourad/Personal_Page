import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "../components/LinkWithAni";

const Experience = () => (
    <Layout>
        <SEO title="Experience" />
        <section className="p-5 pr-0 flex flex-1 items-end flex-col">
            <h3 className="m-5 tracking-wide leading-snug font-normal">
                I have experience in Html, CSS, Javascript, React, Gatsby, TypesCript.
            </h3>
        </section>
    </Layout>
);

export default injectIntl(Experience);

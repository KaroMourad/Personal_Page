import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "../components/LinkWithAni";

const Experience = () => (
    <Layout>
        <SEO title="Experience" />
        <h2 className="pt-5">
            <FormattedMessage id="experience" />
        </h2>
        <section className="p-5 pr-0 flex flex-1 items-end flex-col">
            <LinkWithAni swipe="true" diraction="left" to="/"><FormattedMessage id="homepage" /></LinkWithAni>
            <h3 className="m-5 tracking-wide leading-snug font-normal">
                I have experience in Html, CSS, Javascript, React, Gatsby, TypesCript.
            </h3>
            studying for Master’s degree in Physics.
        </section>
    </Layout>
);

export default injectIntl(Experience);

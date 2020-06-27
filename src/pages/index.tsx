import * as React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import {FormattedMessage, injectIntl} from "gatsby-plugin-intl";

const IndexPage = () =>
{
    return (
        <Layout>
            <SEO title="Home"/>
            <div className="mt-2 w-1/4 max-w-xs inline-block float-right">
                <Image name="myImage"/>
            </div>
            <section className="md:pl-5 inline-block w-full md:w-2/3 pr-0 sm:pr-5 overflow-hidden ">
                <div className="text-base sm:text-lg font-semibold" style={{lineHeight: "calc(1.3rem + 0.5vw)"}}>
                    <div className="capitalize text-3xl my-3"><FormattedMessage id="hi"/></div>
                    I'm Software Developer involved in programming during last 2-3 years.
                    Have a problem-solving mindset and quantitative skills.
                </div>
            </section>
        </Layout>
    );
};

export default injectIntl(IndexPage);

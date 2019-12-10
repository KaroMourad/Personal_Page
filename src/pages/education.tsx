import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import Image from "../components/image";
import { style } from "typestyle";

const Education = () => (
    <Layout>
        <SEO title="Education" />
        <h2 className="pt-5">
            <FormattedMessage id="education" />
        </h2>
        <section className="p-5 pr-0 flex flex-1 items-end flex-col">
            <div className="flex m-5 tracking-wide leading-snug font-normal text-xl">
                <div className={`${styles.roundInnerBorder} inline-block w-32`} >
                    <Image name="fizmatlogo" />
                </div>
                Physics and Mathematics Specialized School named after Artashes Shahinyan <br />2008-2012
            </div>
            <div className="flex m-5 tracking-wide leading-snug font-normal text-xl">
                <div className={`${styles.roundInnerBorder} inline-block w-32`} >
                    <Image name="raulogo" />
                </div>
                Russian-Armenian University<br />2012-2016
            </div>
            <div className="flex m-5 tracking-wide leading-snug font-normal text-xl">
                <div className={`${styles.roundInnerBorder} inline-block w-32`} >
                    <Image name="raulogo" />
                </div>
                Russian-Armenian University<br />2018-2020
            </div>
            <div className="flex m-5 tracking-wide leading-snug font-normal text-xl">
                <div className={`${styles.roundInnerBorder} inline-block w-32`} >
                    <Image name="acalogo" />
                </div>
                Armenian Code Academy<br />2018 - 2019
            </div>
        </section>
    </Layout>
);

export default injectIntl(Education);

const styles = {
    roundInnerBorder: style({
        $nest: {
            "& > .gatsby-image-wrapper": {
                borderRadius: "50%"
            }
        }
    })
};
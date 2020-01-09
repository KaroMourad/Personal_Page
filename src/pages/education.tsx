import * as React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { injectIntl } from "gatsby-plugin-intl";
// import CarouselEducation from "../components/CarouselEducation";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "../components/image";
import { style } from "typestyle";
import fadeIn from "../components/fadeIn";

const Education = () => (
    <Layout>
        <SEO title="Education" />
        <section className="pr-0 flex flex-1 flex-col h-full overflow-y-auto overflow-x-hidden" style={{ height: "calc(100vh - 14.5rem)" }}>
            {/* <CarouselEducation /> */}
            <div className="animFadeInLogos w-full relative flex flex-col justify-between items-center my-8 ">
                <div className="h-full absolute border-r-2 " style={{ left: "50%" }}></div>
                <div className="relative w-full flex items-center" style={{ minHeight: "16rem" }}>
                    <div className={`${styles.roundInnerBorder} w-20 h-20 my-0 mx-auto fadeIn`} >
                        <Image name="gareginNjdehlogo" />
                    </div>
                    <p className="animTextContainer absolute m-0 w-1/3 mx-4 sm:mx-8 text-sm sm:text-base" style={{ left: "60%" }}> Yerevan basic school N 161 named after Garegin Nzhdeh <br />2000-2008</p>
                </div>
                <div className="relative w-full flex items-center" style={{ minHeight: "16rem" }}>
                    <div className={`${styles.roundInnerBorder} w-20 h-20 my-0 mx-auto fadeIn`} >
                        <Image name="fizmatlogo" />
                    </div>
                    <p className="animTextContainer absolute m-0 w-1/3 mx-4 sm:mx-8 text-sm sm:text-base" style={{ left: "60%" }}>Physics and Mathematics Specialized School named after Artashes Shahinyan <br />2008-2012</p>
                </div>
                <div className="relative w-full flex items-center" style={{ minHeight: "16rem" }}>
                    <div className={`${styles.roundInnerBorder} w-20 h-20 my-0 mx-auto fadeIn`} >
                        <Image name="raulogo" />
                    </div>
                    <p className="animTextContainer absolute m-0 w-1/3 mx-4 sm:mx-8 text-sm sm:text-base" style={{ left: "0%" }}>Russian-Armenian University (bachelor degree)<br />2012-2016</p>
                </div>
                <div className="relative w-full flex items-center" style={{ minHeight: "16rem" }}>
                    <div className={`${styles.roundInnerBorder} w-20 h-20 my-0 mx-auto fadeIn`} >
                        <Image name="acalogo" />
                    </div>
                    <p className="animTextContainer absolute m-0 w-1/3 mx-4 sm:mx-8 text-sm sm:text-base" style={{ left: "60%" }}>Russian-Armenian University (bachelor degree)<br />2012-2016</p>
                </div>
                <div className="relative w-full flex items-center" style={{ minHeight: "16rem" }}>
                    <div className={`${styles.roundInnerBorder} w-20 h-20 my-0 mx-auto fadeIn`} >
                        <Image name="raulogo" />
                    </div>
                    <p className="animTextContainer absolute m-0 w-1/3 mx-4 sm:mx-8 text-sm sm:text-base" style={{ left: "0%" }}>Russian-Armenian University (bachelor degree)<br />2012-2016</p>
                </div>
            </div>
        </section>
    </Layout>
);

export default injectIntl(fadeIn(Education));

const styles = {
    roundInnerBorder: style({
        $nest: {
            "& .gatsby-image-wrapper": {
                borderRadius: "50%",
                backgroundColor: "#fff"
            }
        }
    })
};

import * as React from "react";
import {Carousel} from "react-responsive-carousel";
import Image from "./image";
import {style} from "typestyle";

const CarouselEducation = () =>
{
    return (
        <div className={styles.carouselContainer}>
            <Carousel
                autoPlay={true}
                showIndicators={true}
                showStatus={true}
                showThumbs={false}
                infiniteLoop={true}
                centerMode={true}
            >
                <div className="w-1/2 my-0 mx-auto"
                     title="Physics and Mathematics Specialized School named after Artashes Shahinyan">
                    <a href="http://physmath.am/" target="_blank">
                        <div className={`${styles.roundInnerBorder} inline-block w-full`}>
                            <Image name="fizmatlogo"/>
                        </div>
                    </a>
                    <img src="assets/1.jpeg" style={{display: "none"}}/>
                    <p className="legend w-1/2 text-base md:text-lg">
                        Phys-Math Scool <br/>2008-2012
                    </p>
                </div>
                <div className="w-1/2 my-0 mx-auto" title="Russian-Armenian University">
                    <a href="http://www.rau.am/" target="_blank">
                        <div className={`${styles.roundInnerBorder} inline-block w-full`}>
                            <Image name="raulogo"/>
                        </div>
                    </a>
                    <img src="assets/1.jpeg" style={{display: "none"}}/>
                    <p className="legend w-1/2 text-base md:text-lg">
                        Russian-Armenian University (bachelor degree)<br/>2012-2016
                    </p>
                </div>
                <div className="w-1/2 my-0 mx-auto" title="Armenian Code Academy">
                    <a href="https://www.aca.am/" target="_blank">
                        <div className={`${styles.roundInnerBorder} inline-block w-full`}>
                            <Image name="acalogo"/>
                        </div>
                    </a>
                    <img src="assets/1.jpeg" style={{display: "none"}}/>
                    <p className="legend w-1/2 text-base md:text-lg">
                        Armenian Code Academy<br/>2018 - 2019
                    </p>
                </div>
                <div className="w-1/2 my-0 mx-auto" title="Russian-Armenian University">
                    <a href="http://www.rau.am/" target="_blank">
                        <div className={`${styles.roundInnerBorder} inline-block w-full`}>
                            <Image name="raulogo"/>
                        </div>
                    </a>
                    <img src="assets/1.jpeg" style={{display: "none"}}/>
                    <p className="legend w-1/2 text-base md:text-lg">
                        Russian-Armenian University (master's degree)<br/>2018-2020
                    </p>
                </div>
            </Carousel>
        </div>
    );
};

export default CarouselEducation;

const styles = {
    roundInnerBorder: style({
        $nest: {
            "& .gatsby-image-wrapper": {
                borderRadius: "50%"
            }
        }
    }),
    carouselContainer: style({
        width: "100%",
        height: "100%",
        $nest: {
            "& > div": {
                width: "100%",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                alignItems: "center"
            },
            "& .slide": {
                background: "transparent!important" as "transparent"
            },
            "& .legend":
                {
                    bottom: "-60px!important" as "-100px"
                },
            "& .slider-wrapper":
                {
                    overflow: "unset!important" as "unset"
                },
            "& .carousel-slider":
                {
                    overflow: "unset!important" as "unset"
                },
            "& .control-dots":
                {
                    textAlign: "right",
                    top: "-50px",
                    bottom: "unset!important" as "unset"
                }
        }
    })
};
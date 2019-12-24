import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "./LinkWithAni";
import SvgLetter from "./SvgLetter";
import SvgHoverBorder from "./SvgHoverBorder";

const NavMenu = (props) =>
{
    const spl = props.active.split("/");
    const active = spl[spl.length - 1];
    return (
        <nav className="list-none flex-col md:flex-row items-start md:h-12 md:w-full inline-flex absolute left-0 top-0 z-10">
            <li className={`menu -ml-4 sm:-ml-2 md:ml-0 h-10 px-0 md:px-2 py-0 md:mb-0 md:py-0 mt-0 w-24 sm:w-32 md:w-full text-sm sm:text-base mb-1`}>
                <LinkWithAni to="/education" swipe="true" direction="left">
                    <SvgHoverBorder>
                        <SvgLetter active={active === "education" ? "activeElement" : ""}>
                            <FormattedMessage id="education" />
                        </SvgLetter>
                    </SvgHoverBorder>
                </LinkWithAni>
            </li>
            <li className={`menu -ml-4 sm:-ml-2 md:ml-0 h-10 px-0 md:px-2 py-0 md:mb-0 md:py-0 mt-0 w-24 sm:w-32 md:w-full text-sm sm:text-base mb-1`}>
                <LinkWithAni to="/experience" swipe="true" direction="left" >
                    <SvgHoverBorder>
                        <SvgLetter active={active === "experience" ? "activeElement" : ""}>
                            <FormattedMessage id="experience" />
                        </SvgLetter>
                    </SvgHoverBorder>
                </LinkWithAni>
            </li>
            <li className={`menu -ml-4 sm:-ml-2 md:ml-0 h-10 px-0 md:px-2 py-0 md:mb-0 md:py-0 mt-0 w-24 sm:w-32 md:w-full text-sm sm:text-base mb-1`}>
                <LinkWithAni to="/projects" swipe="true" direction="left">
                    <SvgHoverBorder>
                        <SvgLetter active={active === "projects" ? "activeElement" : ""} >
                            <FormattedMessage id="projects" />
                        </SvgLetter>
                    </SvgHoverBorder>
                </LinkWithAni>
            </li>
            <li className={`menu -ml-4 sm:-ml-2 md:ml-0 h-10 px-0 md:px-2 py-0 md:mb-0 md:py-0 mt-0 w-24 sm:w-32 md:w-full text-sm sm:text-base mb-1`}>
                <LinkWithAni to="/contact" swipe="true" direction="left" >
                    <SvgHoverBorder>
                        <SvgLetter active={active === "contacts" ? "activeElement" : ""} >
                            <FormattedMessage id="contacts" />
                        </SvgLetter>
                    </SvgHoverBorder>
                </LinkWithAni>
            </li>
        </nav>
    );
};

export default injectIntl(NavMenu);


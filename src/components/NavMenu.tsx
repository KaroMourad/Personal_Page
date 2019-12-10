import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";
import LinkWithAni from "./LinkWithAni";

const NavMenu = () =>
{
    return (
        <nav className="list-none w-1/2 flex-col md:flex-row items-start md:h-12 md:w-full inline-flex sm:h-64">
            <li className="menu px-0 md:px-2 py-2 md:mb-0 md:py-0 mt-0 w-32 md:w-full text-sm mb-1">
                <LinkWithAni to="/education" swipe="true" direction="left" >
                    <FormattedMessage id="education" />
                </LinkWithAni>
            </li>
            <li className="menu px-0 md:px-2 py-2 md:mb-0 md:py-0 mt-0 w-32 md:w-full text-sm mb-1">
                <LinkWithAni to="/experience" swipe="true" direction="left" >
                    <FormattedMessage id="experience" />
                </LinkWithAni>
            </li>
            <li className="menu px-0 md:px-2 py-2 md:mb-0 md:py-0 mt-0 w-32 md:w-full text-sm mb-1">
                <LinkWithAni to="/projects" swipe="true" direction="left" >
                    <FormattedMessage id="projects" />
                </LinkWithAni>
            </li>
            <li className="menu px-0 md:px-2 py-2 md:mb-0 md:py-0 mt-0 w-32 md:w-full text-sm mb-1">
                <LinkWithAni to="/contact" swipe="true" direction="left" >
                    <FormattedMessage id="contacts" />
                </LinkWithAni>
            </li>
        </nav>
    );
};

export default injectIntl(NavMenu);
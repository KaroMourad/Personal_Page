import React, {useState} from "react";
import {FormattedMessage, injectIntl} from "gatsby-plugin-intl";
import LinkWithAni from "./LinkWithAni";
import SvgLetter from "./SvgLetter";
import SvgHoverBorder from "./SvgHoverBorder";
import "./hamburger.css";

const NavMenu = (props) =>
{
    const [isActive, setIsActive] = useState("");

    const spl = props.active.split("/");
    const active = spl[spl.length - 1];
    let time;

    const handleClick = (): void =>
    {
        if (isActive)
        {
            setIsActive("deActive");
            clearTimeout(time);
            time = setTimeout(() =>
            {
                setIsActive("");
            }, 800);
        } else setIsActive("is-active");
    };

    return (
        <>
            <button className={`hamburger ${isActive} hamburger--collapse inline-block md:hidden absolute z-20`}
                    type="button" onClick={handleClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"/>
                </span>
            </button>

            <nav
                className={`${isActive === "is-active" ? "openHamburgerNav" : isActive === "deActive" ? "closeHamburgerNav" : "hidden"} hidden flex-col md:flex-row md:inline-flex list-none items-start md:h-16 h-full w-full absolute left-0 top-0 z-10 `}>
                <li className={`menu px-0 py-0 my-4 md:mt-0 w-full text-xl md:text-base mb-1`}>
                    <LinkWithAni to="/education" swipe="true" direction="left">
                        <SvgHoverBorder>
                            <SvgLetter active={active === "education" ? "activeElement" : ""}>
                                <FormattedMessage id="education"/>
                            </SvgLetter>
                        </SvgHoverBorder>
                    </LinkWithAni>
                </li>
                <li className={`menu px-0 py-0 my-4 md:mt-0 w-full text-xl md:text-base mb-1`}>
                    <LinkWithAni to="/experience" swipe="true" direction="left">
                        <SvgHoverBorder>
                            <SvgLetter active={active === "experience" ? "activeElement" : ""}>
                                <FormattedMessage id="experience"/>
                            </SvgLetter>
                        </SvgHoverBorder>
                    </LinkWithAni>
                </li>
                <li className={`menu px-0 py-0 my-4 md:mt-0 w-full text-xl md:text-base mb-1`}>
                    <LinkWithAni to="/projects" swipe="true" direction="left">
                        <SvgHoverBorder>
                            <SvgLetter active={active === "projects" ? "activeElement" : ""}>
                                <FormattedMessage id="projects"/>
                            </SvgLetter>
                        </SvgHoverBorder>
                    </LinkWithAni>
                </li>
                <li className={`menu px-0 py-0 my-4 md:mt-0 w-full text-xl md:text-base mb-1`}>
                    <LinkWithAni to="/contact" swipe="true" direction="left">
                        <SvgHoverBorder>
                            <SvgLetter active={active === "contact" ? "activeElement" : ""}>
                                <FormattedMessage id="contact"/>
                            </SvgLetter>
                        </SvgHoverBorder>
                    </LinkWithAni>
                </li>
            </nav>
        </>
    );
};

export default injectIntl(NavMenu);


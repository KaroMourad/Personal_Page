import React, {useState} from "react";
import {FormattedMessage, injectIntl} from "gatsby-plugin-intl";
import LinkWithAni from "./LinkWithAni";
import SvgHoverBorder from "./SvgButton/SvgHoverBorder";
import "./hamburger.css";

const NavMenu = (props) =>
{
    const [isActive, setIsActive] = useState("");

    const spl = props.active.split("/");
    const active = spl[spl.length - 1];
    let time;

    const links: string[] = ["education", "experience", "projects", "contacts"];

    const renderNavLi: JSX.Element[] = getNavLinks(links);

    return (
        <>
            <button className={`hamburger ${isActive} hamburger--collapse inline-block md:hidden absolute z-20`}
                    type="button" onClick={handleClick}>
                <span className="hamburger-box">
                    <span className="hamburger-inner"/>
                </span>
            </button>
            <nav className={`${isActive === "is-active" ? "openHamburgerNav" : isActive === "deActive" ?
                "closeHamburgerNav" : "hidden"} hidden flex-col md:flex-row md:inline-flex list-none items-start 
                md:h-16 h-full w-full absolute left-0 top-0 z-10 pt-2 pl-4 pr-4`}>
                {renderNavLi}
            </nav>
        </>
    );

    function getNavLinks(links: string[]): JSX.Element[]
    {
        const activeIndex = links.indexOf(active);

        return links.map((link, index) =>
        {
            const direction = activeIndex < index ? "left" : "right";
            return (
                <li key={index + link} className={`menu px-0 py-0 my-4 md:mt-0 w-full text-xl md:text-base mb-1`}>
                    <LinkWithAni to={`/${link}`} swipe="true" direction={direction}>
                        <SvgHoverBorder active={active === link ? "activeElement" : ""}>
                            <FormattedMessage id={link}/>
                        </SvgHoverBorder>
                    </LinkWithAni>
                </li>
            );
        });
    }

    function handleClick(): void
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
};

export default injectIntl(NavMenu);


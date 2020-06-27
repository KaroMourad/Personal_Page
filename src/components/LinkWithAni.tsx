import * as React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {injectIntl, useIntl} from "gatsby-plugin-intl";

const LinkWithAni = ({children, to = "/", language = "", ...rest}) =>
{
    const intl = useIntl();
    const lang = intl.locale;
    const languageLink = language || lang;
    const {routed} = window["___gatsbyIntl"];
    const link = routed ? `/${languageLink}/${to}` : `${to}`;

    return (
        <AniLink {...rest} to={link}>
            {children}
        </AniLink>
    );
};

export default injectIntl(LinkWithAni);
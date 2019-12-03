import * as React from "react";
import { injectIntl, changeLocale } from "gatsby-plugin-intl";
import { useIntl } from "gatsby-plugin-intl";
import "./lang.css";
import { find } from "lodash";

const Lang = () =>
{
    const intl = useIntl();
    const lang = intl.locale;
    const list = ["en", "ru"];
    const longName = [{ "en": "English", "ru": "Русский" }];

    const [renderList, setRenderList] = React.useState([]);

    React.useEffect(() =>
    {
        if (lang && lang !== list[0])
        {
            let lis = list.map(l =>
            {
                if (l != lang)
                    return (
                        <li key={l} id={l}
                            onMouseOver={onMouseOver}
                            onMouseLeave={onMouseLeave} onClick={onChangeLocale} >
                            {find(longName, l)[l]}
                        </li>
                    );
            });
            lis.unshift(
                <li key={lang} id={lang}
                    onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
                    onClick={onChangeLocale}>
                    {find(longName, lang)[lang]}
                </li>);
            setRenderList(lis);
        }
        else
        {
            let lis = list.map(l =>
            {
                return (
                    <li key={l} id={l}
                        onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}
                        onClick={onChangeLocale}>
                        {find(longName, l)[l]}
                    </li>);
            });
            setRenderList(lis);
        }
    }, []);

    const onMouseOver = (e) =>
    {
        const element = e.target;
        if (element.classList.contains("hoverLangLeave"))
        {
            element.classList.remove("hoverLangLeave");
        }
        element.classList.add("hoverLangEnter");
    };

    const onMouseLeave = (e) =>
    {
        const element = e.target;
        if (element.classList.contains("hoverLangEnter"))
        {
            element.classList.remove("hoverLangEnter");
        }
        element.classList.add("hoverLangLeave");
    };

    const onChangeLocale = (e) =>
    {
        if (e.target.id !== lang)
        {
            changeLocale(e.target.id);
        }
    };

    const onMouseOverUL = (e) =>
    {
        const element = e.currentTarget;
        if (element.classList.contains("overLangUiLeave"))
        {
            element.classList.remove("overLangUiLeave");
        }
        element.classList.add("overLangUiEnter");
    };

    const onMouseLeaveUL = (e) =>
    {
        const element = e.currentTarget;
        if (element.classList.contains("overLangUiEnter"))
        {
            element.classList.remove("overLangUiEnter");
        }
        element.classList.add("overLangUiLeave");
    };

    return (
        <ul className="langUi" onMouseOver={onMouseOverUL} onMouseLeave={onMouseLeaveUL}>
            {renderList}
        </ul>
    );
};

export default injectIntl(Lang);
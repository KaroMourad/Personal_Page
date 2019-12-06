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
                if (l !== lang)
                    return (
                        <li key={l} id={l}
                            className="hoverLang"
                            onClick={onChangeLocale} >
                            {find(longName, l)[l]}
                        </li>
                    );
            });
            lis.unshift(
                <li key={lang} id={lang}
                    className="hoverLang"
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
                        className="hoverLang"
                        onClick={onChangeLocale}>
                        {find(longName, l)[l]}
                    </li>);
            });
            setRenderList(lis);
        }
    }, []);

    const onChangeLocale = (e) =>
    {
        if (e.target.id !== lang)
        {
            changeLocale(e.target.id);
        }
    };

    const onMouseOverUL = (e) =>
    {
        removeAddClass(e, "overLangUiLeave", "overLangUiEnter");
    };

    const onMouseLeaveUL = (e) =>
    {
        removeAddClass(e, "overLangUiEnter", "overLangUiLeave");
    };

    const removeAddClass = (e, remove, add) =>
    {
        const element = e.currentTarget;
        if (element.classList.contains(remove))
        {
            element.classList.remove(remove);
        }
        element.classList.add(add);
    };

    return (
        <ul className="langUi" onMouseEnter={onMouseOverUL} onMouseLeave={onMouseLeaveUL}>
            {renderList}
        </ul>
    );
};

export default injectIntl(Lang);
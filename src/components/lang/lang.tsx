import * as React from "react";
import {useRef} from "react";
import {changeLocale, injectIntl, useIntl} from "gatsby-plugin-intl";
import "./lang.css";
import {find} from "lodash";

const Lang = () =>
{
    const intl = useIntl();
    const {locale} = intl;
    const shortNameList = ["en", "ru"];
    const longName = [
        {"en": "English"},
        {"ru": "Русский"}
    ];

    const [renderList, setRenderList] = React.useState([]);
    const ulRef = useRef();

    React.useEffect(() =>
    {
        let list = shortNameList.map(lang =>
        {
            if (lang !== locale)
            {
                return (
                    <li key={lang} id={lang} className={`li hoverLang ${locale === lang ? "activeUl" : ""}`}>
                        {find(longName, lang)[lang]}
                    </li>
                );
            }
        });
        setRenderList(list);
    }, []);

    const onClick = (e) =>
    {
        // const elementUL = ulRef.current as HTMLUListElement;
        if (e.currentTarget.id === "ul")
        {
            onChangeLocale(e);
        }
    };

    return (
        <div className="containerUL">
            <li key={locale} id={locale} className="activeUl">
                {find(longName, locale)[locale]}
            </li>
            <ul id="ul"
                ref={ulRef}
                className="langUi ml-0"
                onClick={onClick}
            >
                {renderList}
            </ul>
        </div>
    );

    function onChangeLocale(e)
    {
        const {id} = e.target;
        if (id !== locale && shortNameList.indexOf(id) !== -1)
        {
            changeLocale(id);
        }
    }
};

export default injectIntl(Lang);

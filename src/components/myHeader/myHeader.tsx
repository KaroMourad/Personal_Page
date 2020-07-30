import * as React from "react";
import ThemeContext from "../../context/ThemeContext";
import "./header.css";
import Lang from "../lang/lang";
import LinkWithAni from "../LinkWithAni";

const MyHeader = ({siteTitle = null}: { siteTitle: string }) => (
    <ThemeContext.Consumer>
        {theme => (
            <header className="">
                <div className="mx-auto my-0 max-w-5xl py-3 px-4 h-40 flex items-center justify-between relative">
                    <h1 className="m-0 z-10 sm:text-4xl text-3xl w-2/3 tracking-tight mb-4">
                        <LinkWithAni
                            className="text-black no-underline"
                            cover="true"
                            direction="right"
                            to="/"
                            bg={theme.dark ? "#ffffff" : "#2a2b2d"}
                        >
                            <span dangerouslySetInnerHTML={{__html: siteTitle}}/>
                        </LinkWithAni>
                    </h1>
                    <div className="flex h-full md:flex-row flex-col justify-between items-end md:items-start">
                        <Lang/>
                        <div className="can-toggle demo-rebrand-2">
                            <input
                                id="e"
                                onChange={theme.toggleDark}
                                type="checkbox"
                                checked={theme.dark}
                            />
                            <label htmlFor="e">
                                <div className="can-toggle__switch" data-checked="☾" data-unchecked="☀"/>
                            </label>
                        </div>
                    </div>
                </div>
            </header>
        )}
    </ThemeContext.Consumer>
);

export default MyHeader;

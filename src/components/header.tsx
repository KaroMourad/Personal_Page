import * as React from "react"
import ThemeContext from "../context/ThemeContext";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "./header.css"
import Lang from "./lang/lang";

interface IHeader
{
    siteTitle: string;
}



const Header = ({ siteTitle = "" }: IHeader) => (
    <ThemeContext.Consumer>
        {theme => (
            <header style={styles.headerStyle}>
                <div style={styles.container}>
                    <h1 style={{ margin: 0 }}>
                        <AniLink style={styles.linkStyle} cover="true" bg="#663399" to="/">{siteTitle}</AniLink>
                    </h1>

                    <div className="can-toggle demo-rebrand-2">
                        <input
                            id="e"
                            onChange={theme.toggleDark}
                            type="checkbox"
                            checked={theme.dark}
                        />
                        <label htmlFor="e">
                            <div className="can-toggle__switch" data-checked="☾" data-unchecked="☀"></div>
                        </label>
                    </div>
                    <Lang />
                </div>
            </header>
        )}
    </ThemeContext.Consumer>
);

export default Header;

const styles = {
    headerStyle: {
        marginBottom: `1.45rem`
    },
    container: {
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: "relative" as "relative"
    },
    linkStyle: {
        color: "black",
        textDecoration: `none`
    }
};

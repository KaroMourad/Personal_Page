/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import ThemeContext from "../context/ThemeContext";
import Header from "./header";
import "./layout.css";
import { style } from "typestyle";
// import CreateBubbles from "../../utils/bubbles/bubbles";
import ParticlesConfigured from "./ParticlesConfigured";

const Layout = ({ children }) =>
{
    const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

    return (
        <ThemeContext.Consumer>
            {theme => (
                <div className={theme.dark ? "dark" : "light"}>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div className={styles.middlePageStyle} style={{ background: theme.dark ? "#ffffff33" : "#2a2b2d33" }}>
                        <main>{children}</main>
                        <footer style={styles.footer} >
                            © {new Date().getFullYear()}, Built by Karapet Muradyan
                        </footer>
                    </div>
                    <ParticlesConfigured color={theme.dark ? "#ffffff" : "#2a2b2d"} />
                    {/* <CreateBubbles propbubbleCount={30} /> */}
                </div>
            )}
        </ThemeContext.Consumer>
    );
};

export default Layout;

const styles = {
    middlePageStyle: style({
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
        height: "calc(100vh - 8.8rem)",
        zIndex: 1,
        position: "relative",
        "$nest": {
            "& > main": {
                height: "100%",
                display: "flex"
            }
        }
    }),
    footer: {
        float: "right" as "right"
    }
};
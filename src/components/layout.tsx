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
// import CreateBubbles from "../../utils/bubbles/bubbles";
import ParticlesConfigured from "./ParticlesConfigured";
import NavMenu from "./NavMenu";

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
                <div className={`${theme.dark ? "dark" : "light"} flex flex-col h-screen`}>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    <div className="mx-auto my-0 max-w-5xl py-3 px-4 z-10 relative h-full w-full md:pt-0" style={{ background: theme.dark ? "#ffffff33" : "#2a2b2d33", height: "calc(100vh - 8.8rem)" }}>
                        <main style={{ height: "calc(100% - 1rem)" }}>
                            <NavMenu />
                            {children}
                        </main>
                        <footer className="float-right text-base" >
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
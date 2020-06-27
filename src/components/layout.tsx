/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import ThemeContext from "../context/ThemeContext";
import Header from "./header";
import "./layout.css";
// import CreateBubbles from "../../utils/bubbles/bubbles";
import ParticlesConfigured from "./ParticlesConfigured";
import NavMenu from "./NavMenu";
import Welcome from "./Welcome";

const Layout = ({children}) =>
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
                <>
                    <Welcome/>
                    <div className={`${theme.dark ? "dark" : "light"} flex flex-col h-screen`}>
                        <Header siteTitle={data.site.siteMetadata.title}/>
                        <div className="mx-auto my-0 max-w-5xl py-3 px-4 z-10 relative h-full w-full md:pt-0"
                             style={{background: theme.dark ? "#ffffff33" : "rgba(42,43,45,0.2)"}}>
                            <NavMenu active={window.location.pathname}/>
                            <main className="md:pt-20 pt-0 h-full">
                                {children}
                            </main>
                            <footer className="float-right text-base bottom-0 absolute" style={{right: "1rem"}}>
                                © {new Date().getFullYear()}, Built by Karo Muradyan
                            </footer>
                        </div>
                        <ParticlesConfigured color={theme.dark ? "#ffffff" : "#2a2b2d"}/>
                        {/* <CreateBubbles propbubbleCount={30} /> */}
                    </div>
                </>
            )}
        </ThemeContext.Consumer>
    );
};

export default Layout;
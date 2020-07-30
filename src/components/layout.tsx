import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import ThemeContext from "../context/ThemeContext";
import "./layout.css";
import ParticlesConfigured from "./particles/ParticlesConfigured";
import NavMenu from "./NavMenu";
import Welcome from "./welcome/Welcome";
import Footer from "./footer/Footer";
import Header from "./header/myHeader";

// import CreateBubbles from "../../utils/bubbles/bubbles";

const Layout = (props) =>
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

    let welcome;
    if (typeof window !== "undefined")
    {
        welcome = window.sessionStorage.getItem("welcomeEnable");
        if (welcome === "false")
        {
            // nothing to do
        } else if (welcome === null)
        {
            window.sessionStorage.setItem("welcomeEnable", "true");
        } else if (welcome === "true")
        {
            window.sessionStorage.setItem("welcomeEnable", "false");
        }
    }
    return (
        <ThemeContext.Consumer>
            {theme => (
                <>
                    {welcome === "true" ? <Welcome/> : null}
                    <div className={`${theme.dark ? "dark" : "light"} flex flex-col h-screen`}>
                        <Header siteTitle={data.site.siteMetadata.title}/>
                        <div className="mx-auto my-0 max-w-5xl py-3 px-4 z-10 relative h-full w-full md:pt-0"
                             style={{background: theme.dark ? "#ffffff33" : "rgba(42,43,45,0.2)"}}>
                            <NavMenu/>
                            <main className="md:pt-20 pt-0 h-full">
                                {props.children}
                            </main>
                            <Footer/>
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

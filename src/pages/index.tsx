import * as React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink";

const IndexPage = () => 
{
    return (
        <Layout>
            <SEO title="Home" />
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Image name="myImage" />
            </div>
            <h1>Hi</h1>
            <nav style={{listStyleType: "none"}}>
                <li> <AniLink swipe="true" direction="left" to="about">Go to About</AniLink> </li>
                <li> <AniLink swipe="true" direction="left" to="projects">Go to Projects</AniLink> </li>
            </nav>
        </Layout>
    );
}

export default IndexPage

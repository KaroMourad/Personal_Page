import * as React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

interface IImage
{
    name: string;
}

const Image = (props: IImage) =>
{
    const data = useStaticQuery(graphql`
    query {
        gareginNjdehlogo: file(relativePath: { eq: "gareginNjdehlogo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      fizmatlogo: file(relativePath: { eq: "fizmatlogo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      raulogo: file(relativePath: { eq: "raulogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      acalogo: file(relativePath: { eq: "acalogo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      myImage: file(relativePath: { eq: "myImg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

    return <Img fluid={data[props.name].childImageSharp.fluid}/>;
};

export default Image;

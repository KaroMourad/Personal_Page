import * as React from "react";
import "./SvgHoverBorderAndLetter.css";
import SvgLetter from "./SvgLetter";

const SvgHoverBorder = (props) => (
    <div className={`svg_hover_wrapper ${props.active ? "activeLink" : ""}`}>
        <svg height="50" width="180" xmlns="http://www.w3.org/2000/svg">
            <rect id="btn" height="50" width="180"/>
        </svg>
        <div id="btn-text">
            <SvgLetter {...props}/>
        </div>
    </div>
);

export default SvgHoverBorder;
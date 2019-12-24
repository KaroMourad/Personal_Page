import * as React from "react";
import "./SvgHoverBorderAndLetter.css";

const SvgHoverBorder = (props) => (
    <div className="svg_hover_wrapper">
        <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
            <rect id="btn" height="40" width="150" />
        </svg>
        <div id="btn-text">
            {props.children}
        </div>
    </div>
);

export default SvgHoverBorder;
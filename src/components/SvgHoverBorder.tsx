import * as React from "react";
import "./SvgHoverBorderAndLetter.css";
import ThemeContext from "../context/ThemeContext";

const SvgHoverBorder = (props) => (
    <ThemeContext.Consumer>
        {theme => (
            <div className="svg_hover_wrapper">
                <svg height="50" width="180" xmlns="http://www.w3.org/2000/svg">
                    <rect id="btn" height="50" width="180"
                          stroke={theme.dark ? "#007eff" : "#2a2b2d"}
                    />
                </svg>
                <div id="btn-text">
                    {props.children}
                </div>
            </div>
        )}
    </ThemeContext.Consumer>
);

export default SvgHoverBorder;
import * as React from "react";
import "./SvgHoverBorderAndLetter.css";
import ThemeContext from "../context/ThemeContext";

const SvgLetter = (props) => (
    <ThemeContext.Consumer>
        {theme => (
            <svg id="SvgLetter" className="w-full h-full">
                <text id="textSvgletter" x="50%" y="50%" className={props.active}
                      stroke={theme.dark ? "rgba(255,255,255,0.5)" : "#2a2b2d"}>
                    {props.children}
                </text>
            </svg>
        )}
    </ThemeContext.Consumer>
);

export default SvgLetter;
import * as React from "react";

const Footer = () => (
    <footer className="float-right text-base bottom-0 absolute" style={{right: "1rem"}}>
        © {new Date().getFullYear()}, Built by Karo Muradyan
    </footer>
);

export default Footer;

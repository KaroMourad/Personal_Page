import * as React from "react";

function fadeIn(Component, style?)
{
    return function FadeIn(props)
    {
        const container = React.useRef<HTMLDivElement>();

        React.useEffect(() =>
        {
            requestAnimationFrame(() =>
            {
                if (container.current)
                {
                    container.current.style.opacity = "1";
                }
            });
            return () =>
            {
                if (container.current)
                {
                    container.current.style.opacity = "0";
                }
            };
        }, []);

        return (
            <div
                key={props.path}
                style={Object.assign({}, styles, style)}
                ref={container}
            >
                <Component {...props} />
            </div>
        );
    };
}

export default fadeIn;


const styles = {
    height: "100%",
    transition: "opacity 0.85s cubic-bezier(.17,.67,.17,.91)",
    opacity: 0
};

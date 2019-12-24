import * as React from "react";

function fadeIn(Component, style?)
{
    return class extends React.Component<any, {}>
    {
        private _container = React.createRef<HTMLDivElement>();

        componentDidMount(): void
        {
            requestAnimationFrame(() =>
            {
                if (this._container.current)
                {
                    this._container.current.style.opacity = "1";
                }
            });
        }

        render()
        {
            return (
                <div style={Object.assign({}, styles, style)} ref={this._container}>
                    <Component {...this.props} />
                </div>
            );
        }
    };
}

export default fadeIn;


const styles = {
    height: "100%",
    transition: "opacity 1s cubic-bezier(.17,.67,.17,.91)",
    opacity: 0
};
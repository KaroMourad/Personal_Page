import * as React from "react";
import {keyframes, style} from "typestyle";

const randomInRange = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
let list = [];

function bubble(x, size, hue, distance, speed, delay, scale)
{
    const handleClick = (e) =>
    {
        const matrix = getComputedStyle(e.target).transform.replace(/[^0-9\-.,]/g, "").split(",");
        // const translateX = matrix[12] || matrix[4];
        const translateY = matrix[13] || matrix[5];

        const keyframe = keyframes({
            "0%": {transform: `translate(-50%, ${translateY}) scale(${scale})`},
            "50%": {transform: `translate(-145%, ${translateY}) scale(0)`},
            "100%": {transform: `translate(65%, calc(${distance} * -1vh) scale(1)`}
        });
        const loseBubble = style({
            "animation": `${keyframe} 0.5s linear`,
            "opacity": 1,
            "left": `calc(${x} * 1%)`,
            "height": `calc(${size} * 1px)`,
            "width": `calc(${size} * 1px)`
        });
        const element = e.target;
        if (element.classList.contains(loseBubble))
        {
            element.classList.remove(loseBubble);
        }
        element.classList.add(loseBubble);
    };

    const float = keyframes({
        "0%": {
            opacity: 1,
            transform: "translate(-50%, 0) scale(0)"
        },
        "100%": {
            opacity: 0,
            transform: `translate(-50%, calc(${distance} * -1vh)) scale(${scale})`
        }
    });

    const BubStyle = style({
        "animationName": `${float}`,
        "animationDuration": `calc(${speed} * 1s)`,
        "animationDelay": `calc(${delay} * -1s)`,
        "animationIterationCount": "infinite",
        "animationTimingFunction": "ease-in-out",
        "background": `radial-gradient(100% 115% at 25% 25%, #fff, transparent 33%), radial-gradient(15% 15% at 75% 75%, hsl(${hue}, 100%, 75%), transparent), radial-gradient(100% 100% at 50% 25%, transparent, hsl(${hue}, 100%, 70%) 98%)`,
        "border": `1px solid hsl(${hue}, 100%, 50%)`,
        "borderRadius": "100%",
        "height": `calc(${size} * 1px)`,
        "left": `calc(${x} * 1%)`,
        "position": "absolute",
        "top": "100%",
        "transform": "translate(-50%, 0)",
        "width": `calc(${size} * 1px)`,
        "willChange": "transform"
    });

    return <div key={`${x}+${size}+${hue}+${distance}+${speed}+${delay}+${scale}`} className={BubStyle}
                onClick={handleClick}/>;
}

const CreateBubbles = ({propbubbleCount}: { propbubbleCount: number }) =>
{
    const baseHue = randomInRange(0, 360);
    const [count, setCount] = React.useState(0);
    const bubbleCount = propbubbleCount > 100 ? 100 : propbubbleCount;

    React.useEffect(() =>
    {
        if (count < bubbleCount)
        {
            const size = randomInRange(10, 50);
            const delay = randomInRange(1, 10);
            const speed = randomInRange(2, 20);
            const distance = randomInRange(50, 250);
            const scale = randomInRange(100, 150) / 100;
            const x = randomInRange(0, 100);
            list.push(bubble(x, size, baseHue, distance, speed, delay, scale));
            setCount(count => count + 1);
        }
    }, [count, list]);

    React.useEffect(() =>
    {
        return () =>
        {
            list = [];
        };
    }, []);

    return <section>{list}</section>;
};

export default CreateBubbles;

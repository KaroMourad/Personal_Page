import * as React from "react"
import styled, { keyframes } from 'styled-components'

let list = [];

function bubble(x, size, hue, distance, speed, delay, scale) 
{
    const float = keyframes`
        from {
            opacity: 1;
            -webkit-transform: translate(-50%, 0) scale(0);
                    transform: translate(-50%, 0) scale(0);
        }
        to {
            opacity: 0;
            -webkit-transform: translate(-50%, calc(${distance} * -1vh)) scale(${scale});
                    transform: translate(-50%, calc(${distance} * -1vh)) scale(${scale});
        }
    `
    const Bub = styled.div`
        animation-name: ${float};
        animation-duration: calc(${speed} * 1s);
        animation-delay: calc(${delay} * -1s);
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        background: radial-gradient(100% 115% at 25% 25%, #fff, transparent 33%), radial-gradient(15% 15% at 75% 75%, hsl(${hue}, 100%, 75%), transparent), radial-gradient(100% 100% at 50% 25%, transparent, hsl(${hue}, 100%, 70%) 98%);
        border: 1px solid hsl(${hue}, 100%, 50%);
        border-radius: 100%;
        height: calc(${size} * 1px);
        left: calc(${x} * 1%);
        position: absolute;
        top: 100%;
        transform: translate(-50%, 0);
        width: calc(${size} * 1px);
        will-change: transform;
    `
    return <Bub key={`${x}+${size}+${hue}+${distance}+${speed}+${delay}+${scale}`} />;
};

const CreateBubbles = ({ propbubbleCount }: { propbubbleCount: number }) => 
{
    const randomInRange = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;
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
    }, [count,list])

    React.useEffect(() => 
    {
        return () => { list = []; }
    }, [])

    return <section>{list}</section>;
};

export default CreateBubbles;
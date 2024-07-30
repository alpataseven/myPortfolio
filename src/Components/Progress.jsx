import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Progress() {
    const progressBarRef = useRef(null);

    useEffect(() => {
        gsap.to(progressBarRef.current, {
            value: 100,
            scrollTrigger: {
                scrub: 0.5,
            },
        });
    }, []);

    return (
        <progress ref={progressBarRef} max="100" value="0"></progress>
    )
}
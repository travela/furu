"use client";

import { useEffect, useRef, useState } from "react";

export default function Scrollable() {
  // Font to use for the title: Gasoek One (https://fonts.googleapis.com/css2?family=Gasoek+One&display=swap)
  // supports Korean and Latin characters (is there any similar font for Chinese?)
  // Noto Sans Traditional Chinese with thickness 900

  // Inspo: https://www.soon.global/ (but no videos and less movement); only movement via css

  /*   const [scrollPosition, setScrollPosition] = useState(0);

  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollPosition(window.scrollY);
      console.log(
        "Page scrolled:",
        (window.scrollY - (window.screen.height - window.screenY)) /
          window.scrollY,
        elementRef.current.offsetHeight,
        elementRef.current,
        window.scrollY,
        window.screenY
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); */

  return (
    <div
      onScrollCapture={() => console.log("scrolling2")}
      //ref={elementRef}
      className="flex min-h-[200vh] flex-col items-center justify-around p-24"
    >
      <div
        onScrollCapture={() => console.log("scrolling3")}
        className="sticky top-1/4 font-black z-10 max-w-5xl w-full text-clip pt-0.5 text-8xl lg:flex"
      >
        腐乳在中國大陸、香港、台灣、琉球及東南亞均有生產，但色澤與味道因地方做法不同而有所差異。
      </div>

      <div
        onScrollCapture={() => console.log("scrolling")}
        className={`hover:animate-ping-once scale-150 w-[12px] h-12 bg-red-400 rounded-full`}
      />
    </div>
  );
}

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

  const scrollDivRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log(
        "Window scrolled:"
        //window.scrollY,
        //scrollDivRef,
        //typeof scrollDivRef,
        //scrollDivRef?.current?.getBoundingClientRect(),
        //scrollDivRef?.current?.offsetTop,
        //scrollDivRef?.current?.offsetHeight
      );
      const boundingClientRect = scrollDivRef?.current?.getBoundingClientRect();
      if (boundingClientRect) {
        const currentProgress =
          1 -
          Math.max(
            0,
            Math.min(
              (boundingClientRect?.top + boundingClientRect?.height) /
                boundingClientRect?.height,
              1
            )
          );
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollDivRef}
      className="flex min-h-[200vh] flex-col items-center justify-around p-24 pb-[250px]"
    >
      <div
        onScrollCapture={() => console.log("scrolling3")}
        className="sticky top-1/4 font-black z-10 max-w-5xl w-full text-clip pt-0.5 text-8xl lg:flex"
      >
        腐乳在中國大陸、香港、台灣、琉球及東南亞均有生產，但色澤與味道因地方做法不同而有所差異。
      </div>

      <div
        className={`scale-150 bg-red-400 rounded-full -z-10`}
        style={{
          height: scrollProgress * scrollProgress * 100 + "vh",
          width: scrollProgress * scrollProgress * 100 + "vh",
        }}
      />
    </div>
  );
}

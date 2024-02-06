"use client";

import { useState } from "react";
import Scrollable from "./scrollableElement";

export default function Home() {
  // Font to use for the title: Gasoek One (https://fonts.googleapis.com/css2?family=Gasoek+One&display=swap)
  // supports Korean and Latin characters (is there any similar font for Chinese?)
  // Noto Sans Traditional Chinese with thickness 900

  // Inspo: https://www.soon.global/ (but no videos and less movement); only movement via css

  // Curriculum Vitae path: https://florianmies.com/cv
  // There one page is for one year of life and the year scrolls in the back, use sticky to keep the text in the middle
  // Should the background change color or not?

  const [circleClicked, setCircleClicked] = useState(false);

  return (
    <div onScroll={() => console.log("scrolling10")}>
      <main className="flex min-h-screen flex-col items-center justify-around p-24">
        <div className="font-black z-10 max-w-5xl w-full text-clip text-8xl lg:flex">
          腐乳在中國大陸、香港、台灣、琉球及東南亞均有生產，但色澤與味道因地方做法不同而有所差異。
        </div>

        <div className="flex items-center justify-between space-x-10">
          {Array.from(Array(10), (e, i) => {
            return (
              <div
                key={10 + i}
                className="hover:animate-ping-once w-12 h-12 bg-red-400 rounded-full"
              />
            );
          })}
        </div>
      </main>

      <main className="flex min-h-screen flex-col items-start justify-around p-24">
        <div className="font-black z-10 max-w-5xl w-full text-left text-8xl lg:flex">
          A WEBSITE ABOUT - ME 差不多
        </div>
        <div className="flex w-full justify-between">
          <div
            onClick={() => setCircleClicked(!circleClicked)}
            className={`${
              circleClicked ? "w-full" : "w-12"
            } focus:w-full justify-evenly transition duration-1000 hover:w-full w-12 h-12 bg-red-400 rounded-full overflow-hidden`}
          />

          {
            // <div className="animate-wiggle w-12 h-12 bg-red-400 rounded-full" />
          }
        </div>
      </main>
      {circleClicked && <Scrollable />}
      <div className="min-w-screen bg-red-400">
        <div className="min-h-screen font-black z-10 max-w-5xl w-full text-clip pt-0.5 text-8xl lg:flex">
          腐乳在中國大陸、香港、台灣、琉球及東南亞均有生產，但色澤與味道因地方做法不同而有所差異。
        </div>
      </div>
    </div>
  );
}

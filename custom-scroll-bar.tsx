import React, { useEffect, useRef, useState } from "react";

const scrollColor = "#94CDED";

export const CustomScrollBar = ({
  totalHeight,
  offsetTop,
  height,
  element,
}: {
  element: React.MutableRefObject<HTMLDivElement>;
  offsetTop: number;
  height: number;
  totalHeight: number;
}) => {
  // height of the scrolled content
  const scrollHeight = element.current.scrollHeight;

  const weightedHeight = totalHeight / (scrollHeight - height);
  let weightedOffsetTopInPercent = (offsetTop * weightedHeight) / totalHeight;
  if (weightedOffsetTopInPercent > 1) {
    weightedOffsetTopInPercent = 1;
  }
  if (weightedOffsetTopInPercent < 0) {
    weightedOffsetTopInPercent = 0;
  }

  // const [isScrolling, setIsScrolling] = useState(false);
  // const onMouseMoveSub = useRef<ReturnType<
  //   typeof windowEvents.$onMouseMove.subscribe
  // > | null>(null);

  // const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  //   setIsScrolling(true);
  //   ui.$blockOtherEvents.next(true);
  //   onMouseMoveSub.current = windowEvents.$onMouseMove.subscribe((e) => {
  //     onMouseMove(e);
  //   });
  // };

  // const onMouseMove = (e: MouseEvent | null) => {
  //   // on first scroll, the scrollHeight is not calculated yet so we need to get the updated value while moving the scroll handle
  //   const scrollHeight = element.current.scrollHeight;
  //   const weightedHeightOnMove = totalHeight / (scrollHeight - height);

  //   const deltaY =
  //     e!.clientY -
  //     windowEvents.lastMouseDownPosition[1] +
  //     weightedOffsetTopInPercent * totalHeight * scale;
  //   element.current!.scrollTop = deltaY / weightedHeightOnMove / scale;
  // };

  // useEffect(() => {
  //   const sub = windowEvents.$onMouseUp.subscribe(() => {
  //     setIsScrolling(false);
  //     onMouseMoveSub.current?.unsubscribe();
  //     ui.$blockOtherEvents.next(false);
  //   });

  //   return () => {
  //     sub.unsubscribe();
  //     onMouseMoveSub.current?.unsubscribe();
  //   };
  // }, []);

  return (
    <div
      style={{
        zIndex: 100,
        transformOrigin: "top",
        scale,
      }}
      className="CustomScrollBar flex justify-center w-16"
    >
      <div
        data-testid="cpb-page-builder-custom-scrollbar"
        style={{
          height: totalHeight,
          backgroundColor: scrollColor,
        }}
        className="relative w-2 bg-scroll"
      >
        <div
          onMouseDown={onMouseDown}
          style={{
            borderColor: scrollColor,
            backgroundColor: isScrolling ? "#94CDED" : "#fff",
            top: weightedOffsetTopInPercent * 100 + "%", // 16 is half of the height of the scroll handle, added for centering
          }}
          className={`absolute w-8 h-8 -left-3 cursor-pointer rounded-full border-scroll border-[0.5rem] -translate-y-4
        ${isScrolling ? "bg-scroll" : "bg-white"}
        `}
        ></div>
      </div>
    </div>
  );
};

import React, { useEffect, useRef, useState } from "react";
import { throttle } from "./utils";

export const CustomScrollBar = ({
  element,
}: {
  element: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  let thumbTop = 0; // Replaces state
  let startPosition = 0; // Mouse Y position when dragging starts
  let dragOffset = 0; // Offset between where the user clicked and the top of the thumb
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const contentElement = element.current;

    if (contentElement) {
      const handleScroll = () => {
        const scrollTop = contentElement.scrollTop;
        const editorOffsetHeight = contentElement.offsetHeight;
        const editorViewHeight = contentElement.scrollHeight;
        const scrollableHeight = editorViewHeight - editorOffsetHeight;
        const percentage = (scrollTop * 100) / scrollableHeight;

        // Calculate the thumb position based on the percentage scrolled
        const thumbPosition = ((300 - 40) * percentage) / 100; // 300px total height, 40px thumb height

        thumbTop = thumbPosition;
        if (thumbRef.current) {
          thumbRef.current.style.top = `${thumbTop}px`;
        }
      };

      contentElement.addEventListener("scroll", handleScroll);

      return () => {
        contentElement.removeEventListener("scroll", handleScroll);
      };
    }
  }, [element]);

  // Handle thumb drag
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return;

    const scrollElement = element.current;
    const thumb = thumbRef.current;
    const scrollContainer = scrollRef.current;

    if (scrollElement && thumb && scrollContainer) {
      const scrollBarHeight = 300 - 40; // Custom scrollbar container height minus thumb size
      const scrollableHeight =
        scrollElement.scrollHeight - scrollElement.offsetHeight;

      // Calculate the new thumb position relative to the mouse, accounting for dragOffset
      let newThumbTop =
        e.clientY - scrollRef.current?.getBoundingClientRect().top - dragOffset;

      const maxThumbTop = scrollBarHeight;
      if (newThumbTop < 0) {
        newThumbTop = 0;
      } else if (newThumbTop > maxThumbTop) {
        newThumbTop = maxThumbTop;
      }

      thumb.style.top = `${newThumbTop}px`;

      // Calculate the new scroll position based on thumb position
      const newScrollRatio = newThumbTop / maxThumbTop;
      const newScrollTop = newScrollRatio * scrollableHeight;

      scrollElement.scrollTop = newScrollTop;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    startPosition = e.clientY; // Store the mouse position when clicking

    const thumbRect = thumbRef.current?.getBoundingClientRect();
    if (thumbRect) {
      dragOffset = startPosition - thumbRect.top;
    }

    isDraggingRef.current = true;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", throttle(handleMouseMove, 50), {
      passive: true,
    });
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  console.log("isDragging: ", isDraggingRef);

  return (
    <div
      ref={scrollRef}
      className="relative h-[340px] w-10 overflow-hidden flex items-stretch"
    >
      {/* Custom Scrollbar */}
      <div className="absolute top-0 right-0 w-2 h-full bg-gray-200 rounded -translate-x-4">
        <div
          ref={thumbRef}
          onMouseDown={handleMouseDown}
          className="absolute bg-blue-800 transition-all duration-100 ease-in-out  w-8 h-8 -left-3 cursor-pointer rounded-full border-scroll border-[0.5rem]"
          style={{ height: 40, top: `${thumbTop}px` }}
        />
      </div>
    </div>
  );
};

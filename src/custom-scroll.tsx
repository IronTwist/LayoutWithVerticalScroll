import React, { useEffect, useRef, useState } from "react";

export const CustomScrollBar = ({
  element,
}: {
  element: React.MutableRefObject<HTMLDivElement | null>;
}) => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  let thumbTop = 0; // Replaces state
  let startPosition = 0; // Mouse Y position when dragging starts
  let dragOffset = 0; // Offset between where the user clicked and the top of the thumb

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

        // setScrollRatio(percentage);
        thumbTop = thumbPosition; // Update let variable
        if (thumbRef.current) {
          thumbRef.current.style.top = `${thumbTop}px`; // Directly update the thumb's position
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
    if (!isDragging) return;

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

      // Bound thumb movement to scrollbar height
      const maxThumbTop = scrollBarHeight;
      if (newThumbTop < 0) {
        newThumbTop = 0;
      } else if (newThumbTop > maxThumbTop) {
        newThumbTop = maxThumbTop;
      }

      thumb.style.top = `${newThumbTop}px`; // Directly update the thumb's position

      // Calculate the new scroll position based on thumb position
      const newScrollRatio = newThumbTop / maxThumbTop;
      const newScrollTop = newScrollRatio * scrollableHeight;

      scrollElement.scrollTop = newScrollTop; // Scroll the content
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    startPosition = e.clientY; // Store the mouse position when clicking

    // Calculate the offset between the click point and the top of the thumb
    const thumbRect = thumbRef.current?.getBoundingClientRect();
    if (thumbRect) {
      dragOffset = startPosition - thumbRect.top; // Store the offset between the mouse click and the thumb's top
    }

    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

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
          className="absolute bg-blue-800 rounded transition-all duration-100 ease-in-out  w-8 h-8 -left-3 cursor-pointer rounded-full border-scroll border-[0.5rem]"
          style={{ height: 40, top: `${thumbTop}px` }}
        />
      </div>
    </div>
  );
};

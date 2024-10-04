import { useEffect, useRef, useState } from "react";
import { PreviewButton } from "./PreviewButton";
import "./styles.css";

export default function App() {
  const [showComponents, setShowComponents] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(true);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    setShowComponents(!showComponents);
  };

  const handleViewsScroll = () => {
    const editorElement = editorRef.current;
    const componentsElement = componentRef.current;

    const editorScrollTop = editorElement?.scrollTop;
    const componentsScrollTop = componentsElement?.scrollTop;

    const isHidden =
      editorScrollTop < 5 && (showComponents ? componentsScrollTop < 5 : true);

    setHeaderVisible(isHidden);
  };

  return (
    <div className="App">
      <div className="main" ref={mainRef}>
        <div
          className="Board"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            ref={headerRef}
            className={`flex Header absolute top-0 left-[25%] w-1/2 border border-blue-400 justify-between m-auto z-10 transition-opacity duration-300 ${
              headerVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ background: "blue", color: "green", padding: "10px" }}
          >
            <div>Logo</div>
            <PreviewButton onClick={handleClick} />
          </div>
          <div
            className="EditorAndComponets"
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              className={`Editor ${showComponents ? "w-2/3" : "w-full"}`}
              onScroll={handleViewsScroll}
              ref={editorRef}
              style={{
                position: "relative",
                border: "1px solid green",
                height: "100vh",
                overflowY: "scroll",
                overflowX: "hidden",
                scrollbarWidth: "none",
                textWrap: "balance",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: showComponents ? "absolute" : "relative",
                  margin: showComponents ? "0" : "auto",
                  top: "0",
                  right: "0",
                }}
                className="flex flex-col w-2/3 pt-16 pb-10 pr-2"
              >
                <h3 className="text-xl">Editor view</h3>
                This is some text. It will be displayed exactly as it is
                written. New lines and spaces are preserved.This is some text.
                It will be displayed exactly as it is written. New lines and
                spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved. This is some text. It will be
                displayed exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved. This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are preserved.
                This is some text. It will be displayed exactly as it is
                written. New lines and spaces are preserved.This is some text.
                It will be displayed exactly as it is written. New lines and
                spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved. This is some text. It will be
                displayed exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved. This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are preserved.
                This is some text. It will be displayed exactly as it is
                written. New lines and spaces are preserved.This is some text.
                It will be displayed exactly as it is written. New lines and
                spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved. This is some text. It will be
                displayed exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.This is some
                text. It will be displayed exactly as it is written. New lines
                and spaces are preserved.This is some text. It will be displayed
                exactly as it is written. New lines and spaces are
                preserved.This is some text. It will be displayed exactly as it
                is written. New lines and spaces are preserved.
              </div>
            </div>
            {showComponents && (
              <div
                className="components w-1/3"
                onScroll={handleViewsScroll}
                ref={componentRef}
                style={{
                  position: "relative",
                  border: "1px solid blue",
                  height: "100vh",
                  overflow: "auto",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  scrollbarWidth: "none",
                  scrollbarColor: "red",
                  textWrap: "balance",
                  textAlign: "center",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    marginTop: "60px",
                  }}
                  className="flex flex-col w-1/2 pb-10 pl-2"
                >
                  <h3 className="text-xl">Components</h3>
                  It will be displayed exactly as it is written. New lines and
                  spaces are preserved.This is some text. It will be displayed
                  exactly as it is written. New lines and spaces are preserved.
                  This is some text. It will be displayed exactly as it is
                  written. New lines and spaces are preserved.This is some text.
                  It will be displayed exactly as it is written. New lines and
                  spaces are preserved.This is some text. It will be displayed
                  exactly as it is written. New lines and spaces are
                  preserved.This is some text. It will be displayed exactly as
                  it is written. New lines and spaces are preserved.This is some
                  text. It will be displayed exactly as it is written. New lines
                  and spaces are preserved.This is some text. It will be
                  displayed exactly as it is written. New lines and spaces are
                  preserved.This is some text. It will be displayed exactly as
                  it is written. New lines and spaces are preserved.This is some
                  text. It will be displayed exactly as it is written. New lines
                  and spaces are preserved. It will be displayed exactly as it
                  is written. New lines and spaces are preserved.This is some
                  text. It will be displayed exactly as it is written. New lines
                  and spaces are preserved. This is some text. It will be
                  displayed exactly as it is written. New lines and spaces are
                  preserved.This is some text. It will be displayed exactly as
                  it is written. New lines and spaces are preserved.This is some
                  text. It will be displayed exactly as it is written. New lines
                  and spaces are preserved.This is some text. It will be
                  displayed exactly as it is written. New lines and spaces are
                  preserved.This is some text. It will be displayed exactly as
                  it is written. New lines and spaces are preserved.This is some
                  text. It will be displayed exactly as it is written. New lines
                  and spaces are preserved.This is some text. It will be
                  displayed exactly as it is written. New lines and spaces are
                  preserved.This is some text. It will be displayed exactly as
                  it is written. New lines and spaces are preserved. It will be
                  displayed exactly as it is written. New lines and spaces are
                  preserved.This is some text. It will be displayed exactly as
                  it is written. New lines and spaces are preserved. This is
                  some text. It will be displayed exactly as it is written. New
                  lines and spaces are preserved.This is some text. It will be
                  displayed exactly as it is written. New lines and spaces are
                  preserved.This is some text. It will be displayed exactly as
                  it is written. New lines and spaces are preserved.This is some
                  text. It will be displayed exactly as it is written. New lines
                  and spaces are preserved.This is some text. It will be
                  displayed exactly as it is written. New lines and spaces are
                  preserved.This is some text. It will be displayed exactly as
                  it is written. New lines and spaces are preserved.This is some
                  text. It will be displayed exactly as it is written. New lines
                  and spaces are preserved.This is some text. It will be
                  displayed exactly as it is written. New lines and spaces are
                  preserved.
                </div>
              </div>
            )}
          </div>
          {/* <div
            className="flex Header absolute bottom-0 left-[25%] w-1/2 border border-blue-400 justify-between m-auto z-10 p-3"
            style={{ background: "blue", color: "white" }}
          >
            footer
          </div> */}
        </div>
      </div>
    </div>
  );
}

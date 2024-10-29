import { useEffect, useRef, useState } from "react";
import { PreviewButton } from "./PreviewButton";
import "./styles.css";
import { CustomScrollBar } from "./custom-scroll";

export default function App() {
  const [showComponents, setShowComponents] = useState(true);
  const [headerVisible, setHeaderVisible] = useState(true);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const componentRef = useRef<HTMLDivElement | null>(null);
  const editorElement = editorRef.current;
  const componentsElement = componentRef.current;

  const [lastPaddingSize, setLastPaddingSize] = useState(0);
  let computedPadding = 0;

  const handleClick = () => {
    setShowComponents(!showComponents);
  };

  const handleViewsScroll = () => {
    const editorScrollTop = editorElement?.scrollTop as number;
    const componentsScrollTop = componentsElement?.scrollTop as number;

    const isHidden =
      editorScrollTop < 45 &&
      (showComponents ? componentsScrollTop < 45 : true);

    setHeaderVisible(isHidden);
  };

  const resizeView = () => {
    let paddingSize = (window.innerWidth - 1800) / 2;
    if (paddingSize > 0) {
      computedPadding = paddingSize;
    } else {
      if (computedPadding !== 0) {
        computedPadding = 0;
      }
    }

    setLastPaddingSize(computedPadding);

    const header = document.getElementById("header");
    const editorView = document.getElementById("editor-view");
    const componentView = document.getElementById("component-view");

    if (header && editorView) {
      header.style.display = "absolute";
      header.style.right = `${computedPadding}px`;
      header.style.left = `${computedPadding}px`;

      editorView.style.paddingRight = `${
        computedPadding > 0 ? computedPadding : 0
      }px`;
      editorView.style.left = `${computedPadding > 0 ? computedPadding : 0}px`;
    }

    if (componentView) {
      componentView.style.paddingLeft = `${
        computedPadding > 0 ? computedPadding : 0
      }px`;
      componentView.style.right = `${
        computedPadding > 0 ? computedPadding : 0
      }px`;
    }
  };

  useEffect(() => {
    const componentView = document.getElementById("component-view");
    if (showComponents && componentView) {
      componentView.style.paddingLeft = `${
        lastPaddingSize > 0 ? lastPaddingSize : 0
      }px`;
      componentView.style.right = `${
        lastPaddingSize > 0 ? lastPaddingSize : 0
      }px`;
    }
  }, [showComponents]);

  useEffect(() => {
    window.addEventListener("resize", resizeView);
    resizeView();
  }, []);

  return (
    <div className="App">
      <div className="main" ref={mainRef}>
        <div className="Board">
          <div
            ref={headerRef}
            style={{
              display: "absolute",
            }}
            id="header"
            className={`flex Header absolute top-0 bg-blue-500 text max-w-[1800px] w-[100%] py-5 px-10 justify-between overflow-hidden z-10 transition-opacity duration-300 ${
              headerVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>Logo</div>
            <PreviewButton onClick={handleClick} />
          </div>
          <div
            className="EditorAndComponets flex w-full bg-yellow-400 overflow-y-scroll scrollbar-hide"
            style={{
              display: "flex",
              flexDirection: "row",
              overflowY: "hidden",
            }}
          >
            <div
              className={`Editor flex bg-green-400 ${
                showComponents ? "w-[66.66%]" : "w-full"
              }`}
              onScroll={handleViewsScroll}
              ref={editorRef}
              style={{
                position: "relative",
                height: "100vh",
                overflowY: "scroll",
                overflowX: "hidden",
                scrollbarWidth: "none",
                textWrap: "balance",
                textAlign: "center",
              }}
            >
              <div
                id="editor-view"
                style={{
                  position: showComponents ? "absolute" : "relative",
                }}
                className={`EditorView flex flex-col pt-16 pb-10
                w-full`}
              >
                <div className="ScrollableEditor bg-yellow-400 flex w-full max-w-[1800px] relative pl-10 pt-10 pb-10">
                  <div>
                    <h3 className="text-xl">Editor view</h3>
                    This is some text. It will be displayed exactly as it is
                    written. New lines and spaces are preserved.This is some
                    text. It will be displayed exactly as it is written. New
                    lines and spaces are preserved.This is some text. It will be
                    displayed exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved. This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved. This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved. This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved. This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved. This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved. This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved. This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will bThis is some text. It will be displayed exactly as it
                    is written. New lines and spaces are preserved.This is some
                    text. It will be displayed exactly as it is written. New
                    lines and spaces are preserved.This is some text. It will be
                    displayed exactly as it is written. New lines and spaces are
                    preserved. This is some text. It will be displayed exactly
                    as it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved. This is some text. It will be displayed exactly
                    as it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved. This is some text. It will be displayed exactly
                    as it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved. This is some text. It will be displayed exactly
                    as it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved. This is some text. It will be displayed exactly
                    as it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved. This is some text. It will be displayed exactly
                    as it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved. New lines and spaces are preserved.This is some
                    text. It will be displayed exactly as it is written. New
                    lines and spaces are preserved.This is some text. It will be
                    displayed exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved. This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved. This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved. New lines
                    and spaces are preserved.This is some text. It will be
                    displayed exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved. This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved. This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.This is some text. It
                    will be displayed exactly as it is written. New lines and
                    spaces are preserved.This is some text. It will be displayed
                    exactly as it is written. New lines and spaces are
                    preserved.This is some text. It will be displayed exactly as
                    it is written. New lines and spaces are preserved.This is
                    some text. It will be displayed exactly as it is written.
                    New lines and spaces are preserved.
                  </div>
                  <div
                    style={{
                      height: "300px",
                    }}
                    className="EditorScroll flex flex-col ml-10 bg-gray-400 w-[70px] sticky top-[200px]"
                  >
                    <CustomScrollBar element={editorRef} />
                  </div>
                </div>
              </div>
            </div>
            {showComponents && (
              <div
                className="Components bg-green-200 w-1/3"
                onScroll={handleViewsScroll}
                ref={componentRef}
                style={{
                  position: "relative",
                  height: "100vh",
                  overflow: "auto",
                  overflowY: "scroll",
                  overflowX: "hidden",
                  scrollbarWidth: "none",
                  scrollbarColor: "red",
                  textWrap: "balance",
                  textAlign: "center",
                }}
              >
                <div
                  id="component-view"
                  style={{
                    position: "absolute",
                  }}
                  className="ComponentsView flex flex-col pt-16 pb-10 w-full"
                >
                  <div className="flex w-full bg-blue-200 pl-10 pt-10 pb-10">
                    <div>
                      <h3 className="text-xl">Components</h3>
                      It will be displayed exactly as it is written. New lines
                      and spaces are preserved.This is some text. It will be
                      displayed exactly as it is written. New lines and spaces
                      are preserved. This is some text. It will be displayed
                      exactly as it is written. New lines and spaces are
                      preserved.This is some text. It will be displayed exactly
                      as it is written. New lines and spaces are preserved.This
                      is some text. It will be displayed exactly as it is
                      written. New lines and spaces are preserved.This is some
                      text. It will be displayed exactly as it is written. New
                      lines and spaces are preserved.This is some text. It will
                      be displayed exactly as it is written. New lines and
                      spaces are preserved.This is some text. It will be
                      displayed exactly as it is written. New lines and spaces
                      are preserved.This is some text. It will be displayed
                      exactly as it is written. New lines and spaces are
                      preserved.This is some text. It will be displayed exactly
                      as it is written. New lines and spaces are preserved. It
                      will be displayed exactly as it is written. New lines and
                      spaces are preserved.This is some text. It will be
                      displayed exactly as it is written. New lines and spaces
                      are preserved. This is some text. It will be displayed
                      exactly as it is written. New lines and spaces are
                      preserved.This is some text. It will be displayed exactly
                      as it is written. New lines and spaces are preserved.This
                      is some text. It will be displayed exactly as it is
                      written. New lines and spaces are preserved.This is some
                      text. It will be displayed exactly as it is written. New
                      lines and spaces are preserved.This is some text. It will
                      be displayed exactly as it is written. New lines and
                      spaces are preserved.This is some text. It will be
                      displayed exactly as it is written. New lines and spaces
                      are preserved.This is some text. It will be displayed
                      exactly as it is written. New lines and spaces are
                      preserved.This is some text. It will be displayed exactly
                      as it is written. New lines and spaces are preserved. It
                      will be displayed exactly as it is written. New lines and
                      spaces are preserved.This is some text. It will be
                      displayed exactly as it is written. New lines and spaces
                      are preserved. This is some text. It will be displayed
                      exactly as it is written. New lines and spaces are
                      preserved.This is some text. It will be displayed exactly
                      as it is written. New lines and spaces are preserved.This
                      is some text. It will be displayed exactly as it is
                      written. New lines and spaces are preserved.This is some
                      text. It will be displayed exactly as it is written. New
                      lines and spaces are preserved.This is some text. It will
                      be displayed exactly as it is written. New lines and
                      spaces are preserved.This is some text. It will be
                      displayed exactly as it is written. New lines and spaces
                      are preserved.This is some text. It will be displayed
                      exactly as it is written. New lines and spaces are
                      preserved.This is some text. It will be displayed exactly
                      as it is written. New lines and spaces are preserved.
                    </div>
                    <div
                      style={{
                        height: "300px",
                      }}
                      className="ComponentsScroll flex flex-col ml-10 bg-gray-400 w-[100px] sticky top-[200px]"
                    >
                      <CustomScrollBar element={componentRef} />
                    </div>
                  </div>
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

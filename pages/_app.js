import "@styles/globals.css";

import { useState, useEffect } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

// Custom cursor https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3

const isMobile = () => {
  const ua = navigator.userAgent;
  return /Android|Mobi/i.test(ua);
};

const Cursor = () => {
  if (typeof navigator !== "undefined" && isMobile()) return null;
  const [position, setPosition] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    addEventListeners();
    handleLinkHoverEvents();
    return () => removeEventListeners();
  }, [router]);

  const addEventListeners = () => {
    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseenter", onMouseEnter);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mousedown", onMouseDown);
    document.body.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.body.removeEventListener("mousemove", onMouseMove);
    document.body.removeEventListener("mouseenter", onMouseEnter);
    document.body.removeEventListener("mouseleave", onMouseLeave);
    document.body.removeEventListener("mousedown", onMouseDown);
    document.body.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseover", () => setLinkHovered(true));
      el.addEventListener("mouseout", () => setLinkHovered(false));
    });
  };

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  });

  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <div>{/* <Cursor /> */}</div>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

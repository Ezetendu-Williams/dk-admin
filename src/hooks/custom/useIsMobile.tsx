import React, { useEffect } from "react";

export default function useIsMobile() {
  const [width, setWidth] = React.useState(window.innerWidth);

  const setWindowWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowWidth);

    return () => window.removeEventListener("resize", setWindowWidth);
  }, []);

  const isMobile = width >= 768 ? false : true;
  return {isMobile}
}

import React from "react";
import { useMediaQuery } from "react-responsive";

const useMediaQueryHook = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 999px)" });

  return { isDesktopOrLaptop, isTabletOrMobile };
};

export default useMediaQueryHook;

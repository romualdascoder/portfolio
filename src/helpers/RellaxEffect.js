import React, { useEffect, useRef } from "react";
import Rellax from "rellax";

export function RellaxEffect() {
  const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(rellaxRef.current, {
      center: true,
      round: true,
      vertical: true,
      horizontal: false,
    });
  }, []);

  return rellaxRef;
}

import React, { useEffect, useState } from "react";

export function IsFontsReady() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => {
      setTimeout(() => {
        setIsReady(true);
      }, 800);
    });
  }, []);

  return isReady;
}

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AosEffect() {
  setTimeout(function() {
    AOS.init({
      duration: 1500,
          // offset: 400,
          once: true,
          anchorPlacement: "top-bottom",
    }); 
}, 100);
  AOS.refresh();
}



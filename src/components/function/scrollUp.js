import {
  useEffect
} from "react";

export default function ScrollUp(top) {

  useEffect(() => {
    window.scrollTo({
      top: top.top.scroll,
      behavior: 'smooth'
    });
  });

  return null;
}
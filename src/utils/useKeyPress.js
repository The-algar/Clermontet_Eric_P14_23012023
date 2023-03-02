import { useEffect } from "react";

export const useKeyPress = (key, action) => {
  useEffect(() => {
    const onKeyUp = (e) => {
      if (e.key === key) action();
    };
    window.addEventListener("keyup", onKeyUp);
    return () => window.removeEventListener("keyup", onKeyUp);
  }, [action, key]);
};

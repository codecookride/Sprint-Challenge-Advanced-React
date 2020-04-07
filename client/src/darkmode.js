import React, { useEffect } from "react";
import {useLocalStorage} from "./localstorage";


function useDarkMode(key) {
  const [toggleOn, setOnorOff] = useLocalStorage(key, false);
  useEffect(() => {
    toggleOn
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [toggleOn]);
  return [toggleOn, setOnorOff];
}
export default useDarkMode;
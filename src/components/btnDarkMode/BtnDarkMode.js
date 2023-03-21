// import { useEffect } from "react";
// import { useLocalStorage } from "../../utils/useLocalStorage";
// import detectDarkMode from "../../utils/detectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";
import "./style.css";
import useTheme from "../../hooks/useTheme";

const BtnDarkMode = () => {
  const { isDark, setIsDark } = useTheme();

  // const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode);

  // useEffect(() => {
  //   if (darkMode === true) {
  //     setDarkMode(isDark);
  //   } else {
  //     setDarkMode(!isDark);
  //   }
  // });

  // useEffect(() => {
  //   window
  //     .matchMedia("(prefers-color-scheme: dark)")
  //     .addEventListener("change", (event) => {
  //       const newColorScheme = event.matches ? true : false;
  //       setDarkMode(newColorScheme);
  //     });
  // }, [setDarkMode]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";
  return (
    <button
      className={isDark === true ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;

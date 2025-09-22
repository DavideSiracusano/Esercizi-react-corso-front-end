import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("🌞");

  const themes = ["🌞", "🌛", "🔵"];

  const toggleTheme = () => {
    // torna zero se arriva a fine array
    const newTheme = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(newTheme);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeProvider;

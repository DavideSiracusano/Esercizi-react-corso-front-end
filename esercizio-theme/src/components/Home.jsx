import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import Button from "./atoms/Button";

function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // calcola il tema successivo
  const themes = ["🌞", "🌛", "🔵"];
  const nextTheme = themes[(themes.indexOf(theme) + 1) % themes.length];

  const themeColors = {
    "🌞": {
      backgroundColor: "white",
      color: "black",
    },
    "🌛": {
      backgroundColor: "black",
      color: "white",
    },
    "🔵": {
      backgroundColor: "blue",
      color: "white",
    },
  };

  const homeStyle = {
    backgroundColor: themeColors[theme].backgroundColor,
    color: themeColors[theme].color,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease-in-out",
    height: "100vh",
  };

  const buttonStyle = {
    backgroundColor: themeColors[theme].backgroundColor,
    color: themeColors[theme].color,
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease-in-out",
    cursor: "pointer",
  };

  return (
    <div style={homeStyle}>
      <h2>Theme Toggle</h2>
      <Button
        type="button"
        style={buttonStyle}
        onClick={toggleTheme}
      >{`Switch to ${nextTheme} theme`}</Button>
    </div>
  );
}

export default Home;

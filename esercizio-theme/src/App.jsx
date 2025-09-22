import "./App.css";
import ThemeProvider from "./context/ThemeProvider";
import Home from "./assets/components/home";

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import { useContext } from "react";

export const ThemeContext = createContext(null);

function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
        </div>
          <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"} />
        </div>
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default App;

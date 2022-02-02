import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };
  return (
    <div className="container">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;

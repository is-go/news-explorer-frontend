import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews"
import Footer from "../Footer/Footer";
import About from "../About/About";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <div className="page__border"></div>
      <div className="page__section">
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/saved-articles" element={<SavedNews />} />
        </Routes>
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;

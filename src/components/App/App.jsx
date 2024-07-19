import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main"
import Footer from "../Footer/Footer"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="page">
      <div className="page__section">
        <Header loggedIn={loggedIn} />
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

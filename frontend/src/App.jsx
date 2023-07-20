import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import "./assets/font/Fondamento-Regular.ttf";

import background from "./assets/image/background.jpg";

import Home from "./pages/Home";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        className="body"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

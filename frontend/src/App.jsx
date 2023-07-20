import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import "./assets/font/Fondamento-Regular.ttf";

import background from "./assets/image/background.jpg";

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Kanji from "./pages/Kanji";
import Katakana from "./pages/Katakana";
import Hiragana from "./pages/Hiragana";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
          width: "100%",
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kanji" element={<Kanji />} />
            <Route path="/hiragana" element={<Hiragana />} />
            <Route path="/katakana" element={<Katakana />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

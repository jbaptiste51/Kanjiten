import { Link } from "react-router-dom";
import "../assets/font/Fondamento-Regular.ttf";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="../" className="homelink">
          <p>KANJITEN</p>
        </Link>
      </div>
      <div className="link-div">
        <Link to="../kanji" className="hlink">
          <p>KANJI</p>
        </Link>
        <Link to="../hiragana" className="hlink">
          <p>HIRAGANA</p>
        </Link>
        <Link to="../katakana" className="hlink">
          <p>KATAKANA</p>
        </Link>
        <Link to="../signin" className="hlink">
          <p>CONNEXION</p>
        </Link>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import "../assets/font/Fondamento-Regular.ttf";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="../" className="homelink">
          KANJITEN
        </Link>
      </div>
      <div className="link-div">
        <Link to="../kanji" className="hlink">
          KANJI
        </Link>
        <Link to="../hiragana" className="hlink">
          HIRAGANA
        </Link>
        <Link to="../katakana" className="hlink">
          KATAKANA
        </Link>
        <Link to="../signin" className="signinlink">
          CONNEXION
        </Link>
      </div>
    </header>
  );
}

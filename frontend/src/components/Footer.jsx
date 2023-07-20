import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link to="../about" className="about-link">A PROPOS</Link>
      </div>
      <div>
        <Link to="../contact" className="contact-link">CONTACT</Link>
      </div>
    </footer>
  );
}

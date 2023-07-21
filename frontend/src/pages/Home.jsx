import "../assets/font/Fondamento-Regular.ttf";
import homelogo from "../assets/image/home.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <img src={homelogo} alt="Logo Accueil" className="home-img" />
    </div>
  );
}

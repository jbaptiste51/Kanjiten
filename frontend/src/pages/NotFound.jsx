import notfoundimage from "../assets/image/notfound.jpg";

export default function NotFound() {
  return (
    <>
      <div className="contact-image">
        <img src={notfoundimage} alt="Contact" className="contact-image" />
      </div>
      <div>
        <p>Erreur 404 Not Found</p>
      </div>
    </>
  );
}

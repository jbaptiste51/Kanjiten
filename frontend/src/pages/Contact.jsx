import contactimage from "../assets/image/contact.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contactbox">
        <div className="form-label">
          <label htmlFor="email">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Adresse Mèl"
              className="emailbox"
            />
          </label>
        </div>
        <div className="form-label">
          <label htmlFor="object">
            <input type="text" placeholder="Objet" className="objectbox" />
          </label>
        </div>
        <div className="message">
          <label htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows="16"
              maxLength="250"
              cols="60"
              wrap
              placeholder="Message"
              className="messagebox"
            />
          </label>
        </div>
        <button type="submit" className="contact-button">
          Envoyer
        </button>
      </div>

      <div className="contact-image">
        <img src={contactimage} alt="Contact" className="contact-image" />
      </div>
    </div>
  );
}

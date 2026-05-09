import { contactContent, contactInfo } from "../../data";
import { whatsappMessage } from "../../utils/whatsapp";
import ContactInfoItem from "../contact/ContactInfoItem";

function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="contact-content">
        <div>
          <span className="section-label">{contactContent.label}</span>
          <h2>{contactContent.title}</h2>

          <div className="contact-info">
            {contactInfo.map((item) => (
              <ContactInfoItem key={item.text} item={item} />
            ))}
          </div>

          <a
            href={whatsappMessage(contactContent.whatsappService)}
            className="primary-btn contact-whatsapp-btn"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <div className="map-box">
          <iframe
            title={contactContent.mapTitle}
            src={contactContent.mapUrl}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;

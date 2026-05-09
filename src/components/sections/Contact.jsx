import { contactContent, contactInfo, socialLinks } from "../../data";
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

          <div className="contact-socials" aria-label="Redes sociales">
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  href={item.href}
                  key={item.label}
                  aria-label={item.label}
                  title={item.label}
                  onClick={(event) => {
                    if (item.href === "#") event.preventDefault();
                  }}
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </div>
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

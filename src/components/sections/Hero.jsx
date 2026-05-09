import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { heroData } from "../../data";
import { fadeUpVariants } from "../../utils/animations";
import { whatsappMessage } from "../../utils/whatsapp";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-carousel" aria-hidden="true">
        {heroData.carouselImages.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            className={`hero-slide hero-slide-${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
        >
          <span className="badge">{heroData.badge}</span>

          <h1>{heroData.title}</h1>

          <p>{heroData.text}</p>

          <div className="hero-buttons">
            <a href={whatsappMessage("reservar un turno")} className="primary-btn">
              Reservar turno <ArrowRight size={18} />
            </a>

            <a href="#tratamientos" className="secondary-btn">
              Ver tratamientos
            </a>
          </div>

          <div className="hero-mini">
            {heroData.highlights.map((highlight) => (
              <span key={highlight}>
                <CheckCircle size={18} /> {highlight}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}

export default Hero;

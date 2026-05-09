import { motion } from "framer-motion";
import ortodonciaImg from "../../assets/ortodoncia.png";
import { fadeUpVariants } from "../../utils/animations";
import { whatsappMessage } from "../../utils/whatsapp";

function ServiceCard({ treatment }) {
  const Icon = treatment.icon;

  return (
    <motion.div
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
    >
      <div className="card-icon">
        {treatment.customIcon === "brackets" ? (
          <img src={ortodonciaImg} alt="Ortodoncia" className="ortho-icon" />
        ) : (
          <Icon size={34} strokeWidth={1.8} />
        )}
      </div>

      <h3>{treatment.title}</h3>
      <p>{treatment.desc}</p>

      <a href={whatsappMessage(treatment.title)} className="consult-btn">
        Consultar
      </a>
    </motion.div>
  );
}

export default ServiceCard;

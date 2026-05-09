import { motion } from "framer-motion";
import { fadeUpVariants } from "../../utils/animations";

function SectionHeading({ label, title, text }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
      className="section-heading"
    >
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
}

export default SectionHeading;

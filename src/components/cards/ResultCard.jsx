import { motion } from "framer-motion";
import { fadeUpVariants } from "../../utils/animations";

function ResultCard({ item }) {
  return (
    <motion.div
      className="result-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariants}
    >
      <div className="result-images">
        <div>
          <img src={item.before} alt={`Antes - ${item.title}`} />
          <span>Antes</span>
        </div>

        <div>
          <img src={item.after} alt={`Después - ${item.title}`} />
          <span>Después</span>
        </div>
      </div>

      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </motion.div>
  );
}

export default ResultCard;

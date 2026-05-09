import { motion } from "framer-motion";
import { aboutBenefits, aboutContent, dentalTeam } from "../../data";
import { fadeUpVariants } from "../../utils/animations";
import BenefitCard from "../cards/BenefitCard";

function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about-grid">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          <span className="section-label">{aboutContent.label}</span>
          <h2>{aboutContent.title}</h2>
          <p className="about-text">{aboutContent.text}</p>
        </motion.div>

        <div className="benefits">
          {aboutBenefits.map((benefit) => (
            <BenefitCard key={benefit.title} benefit={benefit} />
          ))}
        </div>
      </div>

      <motion.div
        className="team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
      >
        <h3>Nuestro equipo de trabajo:</h3>

        <div className="team-grid">
          {dentalTeam.map((member) => (
            <article className="team-card" key={member.name}>
              <img src={member.image} alt={member.name} />
              <div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;

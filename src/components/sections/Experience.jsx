import { CheckCircle } from "lucide-react";
import { experienceContent } from "../../data";

function Experience() {
  return (
    <section id="experiencia" className="experience">
      <div className="experience-card">
        <div>
          <span className="section-label">{experienceContent.label}</span>
          <h2>{experienceContent.title}</h2>
          <p>{experienceContent.text}</p>
        </div>

        <div className="experience-list">
          {experienceContent.steps.map((step) => (
            <span key={step}>
              <CheckCircle size={20} /> {step}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

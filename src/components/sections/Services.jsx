import { sectionHeadings, treatments } from "../../data";
import ServiceCard from "../cards/ServiceCard";
import SectionHeading from "../common/SectionHeading";

function Services() {
  const heading = sectionHeadings.treatments;

  return (
    <section id="tratamientos" className="services">
      <SectionHeading
        label={heading.label}
        title={heading.title}
        text={heading.text}
      />

      <div className="cards">
        {treatments.map((treatment) => (
          <ServiceCard key={treatment.title} treatment={treatment} />
        ))}
      </div>
    </section>
  );
}

export default Services;

import { results, sectionHeadings } from "../../data";
import ResultCard from "../cards/ResultCard";
import SectionHeading from "../common/SectionHeading";

function Results() {
  const heading = sectionHeadings.results;

  return (
    <section id="resultados" className="before-after">
      <SectionHeading
        label={heading.label}
        title={heading.title}
        text={heading.text}
      />

      <div className="results-grid">
        {results.map((item) => (
          <ResultCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Results;

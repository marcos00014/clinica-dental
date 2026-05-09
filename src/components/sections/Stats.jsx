import { stats } from "../../data";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;

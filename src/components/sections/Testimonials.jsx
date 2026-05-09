import { testimonials } from "../../data";

function Testimonials() {
  return (
    <section id="testimonios" className="testimonials">
      <span className="section-label">Opiniones</span>
      <h2>Pacientes que confían en nosotros</h2>

      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div className="testimonial" key={testimonial.name}>
            <div className="stars">★★★★★</div>
            <p>“{testimonial.text}”</p>
            <span>{testimonial.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

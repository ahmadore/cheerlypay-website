import "./Testimonials.css";
import {
  testimonialOne,
  reviewerOne,
  testimonialTwo,
  reviewerTwo,
} from "@assets";
import TestimonialCard from "@components/home/TestimonialCard/TestimonialCard";

const testimonials = [
  {
    text: "Generosity isn’t just a talking point. It's really who MyCheerly is, and it comes from this deep commitment—together we build community.",
    image: testimonialOne,
    reviewerName: "Matthew Oludo",
    reviewerImage: reviewerOne,
    reviewerTitle: "Founder at MyCheerly",
  },
  {
    text: "“Generosity is one of our core values at MyCheerly and is something we encourage to churches every day, so to have a chance to practice it in our community is really special.”",
    image: testimonialTwo,
    reviewerName: "Matthew Oludo",
    reviewerImage: reviewerTwo,
    reviewerTitle: "Founder at MyCheerly",
  },
];

function Testimonials() {
  return (
    <section id="testimonial-section">
      <div className="wrapper">
        <div className="content-container">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              image={testimonial.image}
              reviewerName={testimonial.reviewerName}
              reviewerImage={testimonial.reviewerImage}
              reviewerTitle={testimonial.reviewerTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

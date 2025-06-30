import "./TestimonialCard.css";

function TestimonialCard({
  text,
  image,
  reviewerName,
  reviewerImage,
  reviewerTitle,
}) {
  return (
    <div className="testimonial-card">
      <div className="testimonial">
        <p className="testimonial-text">{text}</p>
        <div className="testimonial-by">
          <img src={reviewerImage} alt="" className="reviewer-image" />
          <div className="t-cred">
            <h4>{reviewerName}</h4>
            <p>{reviewerTitle}</p>
          </div>
        </div>
      </div>
      <img src={image} alt="" className="testimonial-image" />
    </div>
  );
}

export default TestimonialCard;

import "./BlogCard.css";

function BlogCard({ title, image }) {
  return (
    <div className="blog-card">
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  );
}

export default BlogCard;

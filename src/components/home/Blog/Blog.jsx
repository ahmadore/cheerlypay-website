import "./Blog.css";
import BlogCard from "@components/home/BlogCard/BlogCard";
import { blogImageOne, blogImageTwo, blogImageThree } from "@assets";

function Blog() {
  return (
    <section id="blog-section">
      <div className="wrapper">
        <div className="column-container">
          <div className="blog-text">
            <h2>Browse the blog</h2>
            <p>
              Digital giving and engagement tools that enables churches of any
              size to leverage on cutting edge technology to offer secured
              giving and a robust back-end management
            </p>
          </div>
          <div className="blog-cards">
            <BlogCard
              title="5 church problems that technology can tackle"
              image={blogImageOne}
            />
            <BlogCard
              title="Understanding exemptions: Are churches exempt from sales tax?"
              image={blogImageTwo}
            />
            <BlogCard
              title="25 innovative men’s ministry ideas for connection & discipleship"
              image={blogImageThree}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;

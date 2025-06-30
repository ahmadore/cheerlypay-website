import "./Solution.css";
import Button from "@components/common/Button/Button";

function Solution() {
  const solutions = [
    "Givings",
    "Mobile app",
    "Church management",
    "Feeds",
    "Reports and insights",
    "Members management",
    "Engagement",
    "Recurring givings",
    "Upcoming programs",
    "Streaming links",
    "Scheduled posts",
    "Manage campuses",
  ];
  return (
    <section id="solution-section">
      <div className="wrapper">
        <div className="column-container">
          <div className="top">
            <div className="solutions">
              {solutions.map((solution) => {
                return <span className="solution">{solution}</span>;
              })}
            </div>
          </div>
          <div className="section-header">
            <h2>A solution designed to support your mission</h2>
            <p>
              Digital giving and engagement tools that enables churches of any
              size to leverage on cutting edge technology to offer secured
              giving and a robust back-end management
            </p>
            <div>
              <Button label="Create a free account" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;

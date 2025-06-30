import { useState } from "react";
import "./Accordion.css";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`accordion ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
    >
      <div className="accordion-header">
        <h3>{title}</h3>
        <span className={`arrow ${open ? "up" : "down"}`}>▼</span>
      </div>
      {open && <div className="accordion-body">{children}</div>}
    </div>
  );
}

export default Accordion;

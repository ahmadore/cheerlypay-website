import { useState, useEffect } from "react";
import "./AnimatedButton.css";

const variations = [
  { text: "Increase giving", class: "increase-giving" },
  { text: "Increase engagement", class: "increase-engagement" },
  { text: "Powerful insight", class: "powerful-insight" },
  { text: "Church app", class: "church-app" },
];

function AnimatedButton() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % variations.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const current = variations[index];

  return (
    <button className={`hero-button ${current.class}`}>{current.text}</button>
  );
}

export default AnimatedButton;

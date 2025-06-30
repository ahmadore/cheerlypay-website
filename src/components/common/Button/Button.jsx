import "./Button.css";

function Button({ label, className }) {
  return (
    <button className={className || "btn demo"}>
      {label || "Book a demo"}
    </button>
  );
}

export default Button;

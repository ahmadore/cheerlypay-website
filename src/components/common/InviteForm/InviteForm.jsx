import { useState } from "react";
import "./InviteForm.css";

function InviteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    country: "Nigeria +234",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submission logic here
  };

  return (
    <div className="invite-form">
      <h2>Get started</h2>
      <p>Provide the details below and our team will get in touch</p>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input
            type="text"
            name="firstName"
            placeholder="Firstname"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Lastname"
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="organization"
          placeholder="Organization name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Work email"
          onChange={handleChange}
        />
        <div className="row">
          <select
            name="country"
            onChange={handleChange}
            defaultValue="Nigeria +234"
          >
            <option>Nigeria +234</option>
            <option>Ghana +233</option>
            <option>Kenya +254</option>
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            onChange={handleChange}
          />
        </div>
        <p className="disclaimer">
          By filling out the form you consent to receive information from
          MyCheerly at the email address or telephone numbers you provided. You
          can learn more about how we handle your personal data and your rights
          by reviewing our <a href="#">privacy policy</a>.
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InviteForm;

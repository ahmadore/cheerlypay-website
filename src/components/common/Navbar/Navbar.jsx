import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import Button from "@components/common/Button/Button";
import NavModal from "@components/common/NavModal/NavModal";
import { logo } from "@assets";

function Navbar() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  const isCompanyActive = location.pathname.startsWith("/company");
  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <a href="/" className="logo">
            <img src={logo} alt="" />
          </a>
          <div className="nav-container">
            <ul className="nav-items">
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  For Churches
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/members"
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                >
                  For Members
                </NavLink>
              </li>
              <li onMouseEnter={() => setShowModal(true)} ref={modalRef}>
                <span
                  className={`nav-item ${isCompanyActive ? "active" : ""} `}
                >
                  Company
                </span>
              </li>
            </ul>
            <ul className="nav-buttons">
              <li className="nav-item btn">
                <Button label="Login" className="btn login-btn" />
              </li>
              <li className="nav-item btn">
                <Button />
              </li>
            </ul>
          </div>
        </nav>
        {/* <NavModal /> */}
        {showModal && <NavModal />}
      </div>
    </>
  );
}
export default Navbar;

import "./AppStore.css";
import { AppleStore, GooglePlay } from "@assets";

function AppStore({ isDark }) {
  return (
    <>
      <div className="appstore">
        <button className={`store-btn ${isDark ? "appstore-dark" : ""}`}>
          <img src={AppleStore} alt="" />
          App Store
        </button>
        <button className={`store-btn ${isDark ? "appstore-dark" : ""}`}>
          <img src={GooglePlay} alt="" />
          Google Play
        </button>
      </div>
    </>
  );
}

export default AppStore;

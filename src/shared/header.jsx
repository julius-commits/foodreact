import React from "react";
import LogoImage from "../assets/images/landing Page/logo.svg";
import { Link } from "react-router-dom";
import Home from "../pages/home";

function Header() {
  return (
    <div>
      <header>
        <div>
          <Link to="/home">
            <img src={LogoImage} alt="Logo" />
          </Link>
        </div>

        <div class="user-nav">
          <div class="business-btn">
            <img src="./fi-rr-briefcase.png" alt="business icon" />
            <p>Start your business</p>
          </div>
          <button class="main-btn">
            <img src="./Leading Icon.png" alt="account icon" />
            <p>Account</p>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;

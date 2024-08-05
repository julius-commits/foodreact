import React from "react";
import LogoImage from "../assets/images/landing Page/logo.svg";
import AccountIcon from "../assets/images/landing Page/account-icon.svg";
import Header from "../shared/header";
import Appsection from "./appsection";
import Footer from "../shared/footer";
import Stepsinfo from "./Stepsinfo";
import Hearo from "./hearo";

function Landing() {
  return (
    <div>
      <Header />

      <Hearo />

      <Stepsinfo />

      <Appsection />

      <Footer />
    </div>
  );
}

export default Landing;

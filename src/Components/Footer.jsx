import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start text-dark fixed-bottom "
        style={{ backgroundColor: "#ECEFF1" }}
      >
        <div className="text-center p-1" style={{ color: "gray" }}>
          © 2023 Copyright @
          <a
            className="text-dark"
            style={{ textDecoration: "none" }}
            href="https://www.towerpower.com.pk"
          >
            TPL
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;

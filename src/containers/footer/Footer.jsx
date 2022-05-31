import React from "react";
import "./Footer.css";
import gpt3 from "../../assets/logo.svg";
const Footer = () => {
  return (
    <div className="wui__footer section__padding" id="featured">
      <div className="wui__footer-heading">
        {" "}
        <h1 className="gradient__text">
          Do you want to step in to the
           future before others
        </h1>
      </div>

      <div className="wui__footer-btn">
        <button>Request Early Access</button>
      </div>
      <div className="wui__footer-links">
        <div className="wui__footer-links-logo">
          <img src={gpt3} alt="" />
          <p>Crechterwoord K12 182 DK <br /> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="wui__footer-links_div">
          <h4>Links</h4>

          <p>Overons</p>
          <p>Social media</p>
          <p>Counter</p>
          <p>contact</p>
        </div>
        <div className="wui__footer-links_div">
          <h4>Company</h4>

          <p>terms and conditions</p>
          <p>privacy policy</p>
          <p>contact</p>
        </div>
        <div className="wui__footer-links_div">
          <h4>Get in touch</h4>

          <p>Crechterwoord K12 <br />
           182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="wui__footer-copyRe">
          <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

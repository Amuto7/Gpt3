import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#featured">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <div className="Wui__navbar " id="nav">
      <div className="Wui__navbar-links">
        <div className="Wui__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Wui__nav-links_container">
          <Menu />
        </div>
      </div>
      <div className="Wui__navbar-sign">
        <p>Sign in</p>

        <button type="button">
          <p>Sign up</p>
        </button>
      </div>
      <div className="Wui__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={"27"}
            onClick={() => settoggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={"27"}
            onClick={() => settoggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="Wui__navbar-menu_container scale-up-center">
            <div className="Wui__navbar-menu_container-links">
              <Menu />
              <div className="Wui__navbar-menu_container-links-sign">
                <p>Sign in</p>

                <button type="button">
                  <p>Sign up</p>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

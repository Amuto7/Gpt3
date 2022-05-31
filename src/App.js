import React from "react";
import "./App.css";

import { Brand, Cta, Navbar } from "./components";
import {
  Footer,
  Features,
  Blog,
  Possbility,
  WhatMui,
  Header,
} from "./containers";

const App = () => {
  return (
    <div className="App ">
        <div className="gradient__bg">
          <Navbar />
          <Header />
          <div className="all">
            <Brand />
            <WhatMui />
            <Features />
            <Possbility />
            <Cta />
            <Blog />
            <Footer />{" "}
          </div>
        </div>
    </div>
  );
};

export default App;

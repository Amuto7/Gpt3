import React, { useEffect } from "react";
import { Feature } from "../../components";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhatMui.css";

const WhatMui = () => {
  let [ig,seti] = React.useState()
  useEffect(() => {
    AOS.init();
    
    seti(window.pageYOffset)
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (ig === currentScrollPos) {
        document.getElementById('nav').style.cssText ='background-color:;'

      } else if (ig !== currentScrollPos && window.innerWidth > 900) {
        document.getElementById('nav').style.cssText ='position:sticky; top:0; background-color:#0e1539;z-index:99;'
      }
    }
  }, [ig]);

  return (
    <div data-aos="slide-up" data-aos-offset="100" data-aos-delay="100" data-aos-once={false} className="Wui__whatMui section__margin" id="wgpt3">
      <div className="Wui__whatMui-feature">
        <Feature
          title={"What is GPT3"}
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="Wui__whatMui-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="Wui__whatMui-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
          title="Knowledgebase"
        />
        <Feature
          title={"Education"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
      </div>
    </div>
  );
};

export default WhatMui;

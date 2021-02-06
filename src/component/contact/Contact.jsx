import React from "react";
import "./contact.css";
import { animateScroll as scroll} from 'react-scroll';
import facebook from "../../img/redesSociales/facebook.svg";
import instagram from "../../img/redesSociales/instagram.svg";
import linkedin from "../../img/redesSociales/linkedin.svg";
import github from "../../img/redesSociales/github.svg";
import whatsapp from "../../img/redesSociales/whatsapp.svg";
import botonArriba from "../../img/botonArriba.svg";

const Contact = () => {
  const handleChange = (newValue) => {
    scroll.scrollTo(0);
  }
  return (
    <div className="Contact">
      <div className="titleContact">
        <div>
          <h1>Contact</h1>
        </div>
      </div>
      
      <div className="circlesContact">
        <div className="circlesRedesSociales">
          <img className="github" src={github} alt="" />
        </div>
        <div className="circlesRedesSociales">
          <img className="linkedin" src={linkedin} alt="" />
        </div>
        <div className="circlesRedesSociales">
          <img className="instagram" src={instagram} alt="" />
        </div>
        <div className="circlesRedesSociales">
          <img className="facebook" src={facebook} alt="" />
        </div>
        <div className="circlesRedesSociales">
          <img className="whatsapp" src={whatsapp} alt="" />
        </div>
      </div>
      <div className="emailContact">
        <div>
          <a href="nadiariquelme@gmail.com">tomasdemarco3@gmail.com</a>
        </div>
      </div>
      <div className="botonContent"></div>
      <div className="circlesBotonArriba"  onClick={handleChange}>
        <img className="botonArriba" src={botonArriba} alt="" />
      </div>
    </div>
  );
};
export default Contact;

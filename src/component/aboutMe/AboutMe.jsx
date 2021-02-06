import React from 'react';
import './aboutMe.css';
import perfilTomas from '../../img/tomasPerfil.jpg';

const AboutMe = () => {
  
  return (
    <div className="AboutMe">
      <div className="titleAboutMe">
        <h1>About Me</h1>
      </div>  
      <div className="contentAboutMe">
        <div className="pAboutMe">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolorum recusandae ab enim eligendi asperiores praesentium, deleniti dolore veritatis eum tempora voluptatum dolorem eos distinctio ipsum unde. Officia, a magni?</p>  
        </div>
        <div className="imgAboutMe">
          <img className="perfilTomas" src={perfilTomas} alt=""/>
        </div>
      </div>  
    </div>
  );
};
export default AboutMe;

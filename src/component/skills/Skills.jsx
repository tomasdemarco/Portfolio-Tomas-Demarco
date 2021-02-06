import React from 'react';
import './skills.css';
import logoReact from '../../img/logos/logoReact.svg';
import logoHTML from '../../img/logos/logoHTML.svg';
import logoCSS from '../../img/logos/logoCSS.svg';
import logoJS from '../../img/logos/logoJS.svg';
import logoNodeJS from '../../img/logos/logoNodeJS.svg';
import logoMongoDB from '../../img/logos/logoMongoDB.svg';

const Skills = () => {
  
  return (
    <div className="Skills">  
      <div className="titleSkills">
        <h1>Skills</h1>
      </div>
      <div className="circlesSkills">
        <div className="circleSkill">
          <div className="circles">
            <img className="logoReact" src={logoReact} alt=""/>
          </div>
          <div className="circles">
          <img className="logoJS" src={logoJS} alt=""/>
          </div>
        </div>
        <div className="circleSkill">
          <div className="circles">
          <img className="logoHTML" src={logoHTML} alt=""/>
          </div>
          <div className="circles">
          <img className="logoCSS" src={logoCSS} alt=""/>
          </div>
      </div>
      <div className="circleSkill">
          <div className="circles">
          <img className="logoNodeJS" src={logoNodeJS} alt=""/>
          </div>
          <div className="circles">
          <img className="logoMongoDB" src={logoMongoDB} alt=""/>
          </div>        
        </div>
    </div>
    </div>  
  );
};
export default Skills;

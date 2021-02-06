import React from 'react';
import './home.css';
import './particles.scss';
import logo from '../../img/logo.svg';

const Home = () => {
  return (
  <>
  {
    <div className= "body">
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
      <div className= "particle"><img src={logo} alt=""/></div>
    <div className= "home">  

      <div className= "home-content">
        <label className= "name">TOMAS TADEO DEMARCO</label>
        <label className= "title">Programador Full Stack</label>
      </div>
      <div className= "home-content"> 
        <p>
           Bienvenidos a mi portfolio.<br></br><br></br>
           Soy un desarrollador web full stack, con ganas 
           de asumir nuevos desafios que potencien mis habilidades.
        </p>
        </div> 
    </div>
    <div className= "triangle">
    <svg height="100" width="100">
    <polygon points="0,5 100,5 50,50"
    stroke="rgb(63, 111, 156)" stroke-width="1" fill="rgb(63, 111, 156)"/> 
  </svg> 
  </div>
  </div>
  }
  </>
  );
};
export default Home;

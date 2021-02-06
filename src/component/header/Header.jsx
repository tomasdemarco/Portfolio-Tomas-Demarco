import React from 'react';
import './header.css';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { animateScroll as scroll} from 'react-scroll';

const Header = () => {
  
  const { height } = useWindowDimensions();
  const getHeight = height;
  var y, itemUno, itemDos, itemTres, itemCuatro;
  var indicator = document.querySelector('.indicator');

  const indicatorItem = (e) => {
    indicator.style.left = e.offsetLeft + "px";
    indicator.style.width = e.offsetWidth + "px";
  }  
  window.addEventListener('resize', () => {
    window.scrollBy(0,1);
  });
    window.addEventListener('scroll', () => {
      indicator = document.querySelector('.indicator');
      itemUno = document.querySelector('#uno');
      itemDos = document.querySelector('#dos');
      itemTres = document.querySelector('#tres');
      itemCuatro = document.querySelector('#cuatro');
     
      y = document.documentElement.scrollTop
     
      if(y >= (getHeight - 200) * 3){
        indicatorItem(itemCuatro);
      }
      else if(y >= (getHeight - 200) * 2){
        indicatorItem(itemTres);
      }
      else if(y >= (getHeight - 200)){
        indicatorItem(itemDos);
      }
      else{
        indicatorItem(itemUno);
      }
    });

  document.addEventListener('DOMContentLoaded', () => {
    handleChange('home');
  });

   const handleChange = (newValue) => {
    switch(newValue) {
      case 'home':
        scroll.scrollTo(0);
        break;
      case 'Skills':
        scroll.scrollTo(getHeight);
        break;
      case 'aboutme':
        scroll.scrollTo(getHeight * 2);
        break;
      case 'contact':
        scroll.scrollTo(getHeight * 3);
        break;
      default:
        break;
    }
  };
  
  return (
    <header>
        <div className="nav-header">
          <div id="uno" className="item-header" onClick={()=>handleChange("home")}>Home</div>
          <div id="dos" className="item-header" onClick={()=>handleChange("Skills")}>Skills</div>
          <div id="tres" className="item-header" onClick={()=>handleChange("aboutme")}>About Me</div>
          <div id="cuatro" className="item-header" onClick={()=>handleChange("contact")}>Contact</div>
          <div className="indicator"></div>
       </div>
  </header>
  );
};
export default Header;

import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Contact from './component/contact/Contact';
import AboutMe from './component/aboutMe/AboutMe';
import Skills from './component/skills/Skills';

function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Skills/>
        <AboutMe/>
        <Contact/>
    </div>
  );
}

export default App;

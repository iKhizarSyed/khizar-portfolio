import './App.css';
import "./Components/navbar/NavbarComp"
import NavbarComp from './Components/navbar/NavbarComp';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';
import { Contact } from './Components/Contact/Contact';
import Work from './Components/Work/Work';
import Footer from './Components/Footer/Footer';


function App() {
  
  return (
    <div>
      <NavbarComp />      
      <Home />
      <Skills />
      <Work />
      <Contact />
      <Footer />
</div>
  );
}

export default App;

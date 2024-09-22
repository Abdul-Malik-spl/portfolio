import './App.css';
import Nav from './PortfolioDetails/Nav/Nav.js'
import Banner from './PortfolioDetails/Banner/Banner.js'
import Skills from './PortfolioDetails/Skills/Skills.js'
import Paragraph from './PortfolioDetails/Paragraph/Paragraph.js'
import Projects from './PortfolioDetails/ProjectCards/Projects.js'
import Footer from './PortfolioDetails/Footer/Footer.js'
function App() {
  return (
    <div className="App">
      
  <Nav/>
  <Banner/>
  <Paragraph/>
  <Skills/>
  <Projects/>
  <Footer/>


    </div>
  );
}

export default App;

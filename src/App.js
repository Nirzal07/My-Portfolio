import "./App.css";
import styles from "./index.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About id="about" />
      {/* <Services id="services" />
          <Skills id="skills" />
          <Portfolio id="portfolio" />
          <Contact /> */}
    </div>
  );
}

export default App;

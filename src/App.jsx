import "./App.css";
import ChatWidget from "./components/widgets/ChatWidget";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Results from "./components/sections/Results";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";
import Testimonials from "./components/sections/Testimonials";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const activeSection = useActiveSection();

  return (
    <div className="app">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Services />
      <Results />
      <About />
      <Stats />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;

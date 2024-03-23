import "./App.css";
import Header from "./Layouts/Header";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Home />
      <Resume />
      <Skills />
      <Portfolio />
      <Blogs />
      <Pricing />
      <Contact />
    </>
  );
}

export default App;
